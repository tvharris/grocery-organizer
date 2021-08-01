from flask import Flask, render_template, json, jsonify, request
# from flask_cors import CORS
import os
import database.db_connector as db

# Configuration
app = Flask(__name__, static_folder='./front/build', static_url_path='/')

# HAD TO CONNECT FOR EVERY ROUTE AND CLOSE AFTER EVERY REQUEST TO ALLOW MULTIPLE REQUESTS
# db_connection = db.connect_to_database()

# Routes


@app.route('/')
def root():
    # return render_template("main.j2")
    return app.send_static_file('index.html')


# This enables use of React Router
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/users', methods=['GET', 'POST', 'DELETE', 'PUT'])
def users():

    db_connection = db.connect_to_database()

    # if we receive a get request we need to execute a get query and return
    # all users from the DB as json.
    if request.method == 'GET':

        # execute SQL query
        query = "SELECT * FROM Users;"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        print(jsonify(results), type(results), results)
        db_connection.close()
        return jsonify(results)

    # POST ROUTE
    if request.method == 'POST':
        # extract data from request object
        json_data = request.get_json()
        email = json_data['email']
        username = json_data['username']

        # execute SQL query
        query = f"INSERT INTO Users (email, username) \
                  VALUE ('{email}', '{username}');"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        print(jsonify(results), type(results), results)
        db_connection.close()
        return jsonify(results)

    # DELETE ROUTE
    if request.method == 'DELETE':
        # extract data from request object
        json_data = request.get_json()
        user_id = json_data['userID']

        # execute SQL query
        query = f"DELETE FROM Users WHERE userID = '{user_id}';"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        db_connection.close()
        return jsonify(results)

    # PUT ROUTE
    if request.method == 'PUT':
        # extract data from request object
        json_data = request.get_json()
        email = json_data['email']
        username = json_data['username']
        userID = json_data['userID']

        # execute SQL query
        query = f"UPDATE Users SET username = '{username}', email = '{email}' WHERE userID = '{userID}';"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        db_connection.close()
        return jsonify(results)


@ app.route('/grocery_lists', methods=['GET', 'POST', 'DELETE'])
def grocery_lists():

    db_connection = db.connect_to_database()

    # if we receive a get request we need to execute a get query and return
    # all users from the DB as json.
    if request.method == 'GET':

        query = "SELECT username, listDate, listID \
                 FROM GroceryLists JOIN Users USING (userID)"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        # return jsonify(results)
        db_connection.close()
        return(jsonify(results), 200)

    if request.method == 'POST':
        # extract data from request object
        json_data = request.get_json()
        username = json_data['username']
        # listDate = json_data['listDate']

        # execute SQL query
        query = f"INSERT INTO GroceryLists (userID, listDate) \
            VALUE ((SELECT userID from Users \
            WHERE username = '{username}'), NOW())"
        #   VALUE ((SELECT userID from Users WHERE username='{username}', '2020-01-01 10:10:10');"
        #   VALUE ((SELECT userID from Users WHERE username='{username}', NOW());"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        
        # get and return the row that was just added (most recent date)
        query2 = "SELECT username, listDate, listID \
                 FROM GroceryLists JOIN Users USING (userID) \
                 ORDER BY listDate DESC LIMIT 1"
        cursor = db.execute_query(db_connection=db_connection, query=query2)

        results = cursor.fetchall()
        print(jsonify(results), type(results), results)
        db_connection.close()
        return jsonify(results)

    if request.method == 'DELETE':
        # extract data from request object
        json_data = request.get_json()
        listID = json_data['listID']

        # execute SQL query
        query = f"DELETE FROM GroceryLists WHERE listID = '{listID}';"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        db_connection.close()
        return jsonify(results)


@ app.route('/ingredients', methods=['GET', 'POST', 'DELETE'])
def ingredients():

    db_connection = db.connect_to_database()

    # if we receive a get request we need to execute a get query and return
    # all users from the DB as json.
    if request.method == 'GET':
        query = "SELECT \
                 Ingredients.name, FoodGroups.name, Ingredients.ingredientID \
                 FROM Ingredients LEFT JOIN FoodGroups USING (foodGroupID)"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        db_connection.close()
        return(jsonify(results))

    if request.method == 'POST':
        json_data = request.get_json()
        ingredientName = json_data['ingredientName']
        foodGroup = json_data['foodGroup']

        query = f"INSERT INTO Ingredients (name, foodGroupID) \
                VALUE \
                ('{ingredientName}', \
                (SELECT foodGroupID from FoodGroups \
                WHERE name='{foodGroup}'));"

        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        db_connection.close()
        return jsonify(results)

    if request.method == 'DELETE':
        # extract data from request object
        json_data = request.get_json()
        ingredientID = json_data['ingredientID']

        # execute SQL query
        query = f"DELETE FROM Ingredients \
                WHERE ingredientID = '{ingredientID}';"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        db_connection.close()
        return jsonify(results)


@ app.route('/food_group', methods=['GET', 'POST', 'DELETE'])
def food_group():

    db_connection = db.connect_to_database()

    # if we receive a get request we need to execute a get query and return
    # all users from the DB as json.
    if request.method == 'GET':

        query = "SELECT name, foodGroupID FROM FoodGroups"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        db_connection.close()
        return(jsonify(results))

    if request.method == 'DELETE':
        # extract data from request object
        json_data = request.get_json()
        foodGroupID = json_data['foodGroupID']

        # execute SQL query
        query = f"DELETE FROM FoodGroups WHERE foodGroupID = '{foodGroupID}';"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        db_connection.close()
        return jsonify(results)


@ app.route('/user_ingredients/<int:user_id>', methods=['GET', 'POST'])
def user_ingredients(user_id):

    db_connection = db.connect_to_database()

    # if we receive a get request we need to execute a get query and return
    # all users from the DB as json.
    if request.method == 'GET':
        query = f"SELECT name from User_Ingredients \
                JOIN Ingredients USING (ingredientID)\
                WHERE User_Ingredients.userID = {user_id}"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        print(jsonify(results))
        db_connection.close()
        return jsonify(results)


# Route to provide the ingredients from a given grocery list
@ app.route('/grocery_list_ingredients/<int:listID>', methods=['GET', 'POST'])
def grocery_list_ingredients(listID):

    db_connection = db.connect_to_database()

    # if we receive a get request we need to execute a get query and return
    # all users from the DB as json.
    if request.method == 'GET':
        query = f"SELECT name, ingredientID from GroceryList_Ingredients \
                JOIN Ingredients USING (ingredientID) \
                WHERE GroceryList_Ingredients.listID = {listID}"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        print(jsonify(results))
        db_connection.close()
        return jsonify(results)


# Listener
if __name__ == "__main__":
    port = int(os.environ.get('PORT', 80))
    app.run(port=port, debug=False)  # debug option allows live changes
