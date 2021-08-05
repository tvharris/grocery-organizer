from flask import Flask, jsonify, request
import os
import database.db_connector as db

# Configuration
app = Flask(__name__, static_folder='./front/build', static_url_path='/')

'''
HAD TO:

    1) CONNECT FOR EVERY ROUTE; AND,
    2) CLOSE AFTER EVERY REQUEST

TO ALLOW MULTIPLE REQUESTS
'''

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

        # return the newly added row for the front end to add
        query = "SELECT * FROM Users WHERE \
                userID = (SELECT MAX(userID) FROM Users);"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        print(jsonify(results), type(results), results)
        return jsonify(results)

        results = cursor.fetchall()
        print(jsonify(results), type(results), results)
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
        cursor = db.execute_query(db_connection=db_connection, query=query)

        # get and return the row that was just added (most recent date)
        query2 = "SELECT username, listDate, listID \
                 FROM GroceryLists JOIN Users USING (userID) \
                 ORDER BY listDate DESC LIMIT 1"
        cursor = db.execute_query(db_connection=db_connection, query=query2)

        results = cursor.fetchall()
        print(jsonify(results), type(results), results)
        return jsonify(results)

    if request.method == 'DELETE':
        # extract data from request object
        json_data = request.get_json()
        listID = json_data['listID']

        # execute SQL query
        query = f"DELETE FROM GroceryLists WHERE listID = '{listID}';"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)


@ app.route('/ingredients', methods=['GET', 'POST', 'DELETE', 'PUT'])
def ingredients():

    db_connection = db.connect_to_database()

    # if we receive a get request we need to execute a get query and return
    # all users from the DB as json.
    if request.method == 'GET':
        query = "SELECT \
                 Ingredients.name, FoodGroups.name fgname, Ingredients.ingredientID \
                 FROM Ingredients LEFT JOIN FoodGroups USING (foodGroupID)"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return(jsonify(results))

    if request.method == 'POST':
        json_data = request.get_json()
        ingredientName = json_data['name']
        foodGroupName = json_data['fgname']

        # execute INSERT
        query = f"INSERT INTO Ingredients (name, foodGroupID) \
                VALUE \
                ('{ingredientName}', \
                (SELECT foodGroupID from FoodGroups \
                WHERE name='{foodGroupName}'));"

        cursor = db.execute_query(db_connection=db_connection, query=query)

        # return the inserted row
        query = "SELECT \
                 Ingredients.name, FoodGroups.name fgname, Ingredients.ingredientID \
                 FROM Ingredients LEFT JOIN FoodGroups USING (foodGroupID) WHERE \
                Ingredients.ingredientID = (SELECT MAX(ingredientID) FROM Ingredients);"

        cursor = db.execute_query(db_connection=db_connection, query=query)

        results = cursor.fetchall()
        return jsonify(results)

    if request.method == 'PUT':
        json_data = request.get_json()
        ingredientName = json_data['name']
        foodGroupName = json_data['fgname']
        ingredientID = json_data['ingredientID']

        query = f"UPDATE Ingredients \
        SET \
        foodGroupID=(SELECT foodGroupID from FoodGroups WHERE name='{foodGroupName}'),\
        name='{ingredientName}' \
        WHERE ingredientID = '{ingredientID}'"

        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)

    if request.method == 'DELETE':
        # extract data from request object
        json_data = request.get_json()
        ingredientID = json_data['ingredientID']

        query = f"DELETE FROM Ingredients \
                WHERE ingredientID = '{ingredientID}';"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)


@ app.route('/food_group', methods=['GET', 'POST', 'DELETE', 'PUT'])
def food_group():

    db_connection = db.connect_to_database()

    # if we receive a get request we need to execute a get query and return
    # all users from the DB as json.
    if request.method == 'GET':

        query = "SELECT name, foodGroupID FROM FoodGroups"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return(jsonify(results))

    if request.method == 'POST':
        # extract data from request object
        json_data = request.get_json()
        name = json_data['name']

        # execute INSERT
        query = f"INSERT INTO FoodGroups (name) VALUE ('{name}');"
        cursor = db.execute_query(db_connection=db_connection, query=query)

        # return the inserted row
        query = "SELECT * FROM FoodGroups WHERE \
                foodGroupID = (SELECT MAX(foodGroupID) FROM FoodGroups);"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        print(jsonify(results), type(results), results)
        return jsonify(results)

    if request.method == 'DELETE':
        # extract data from request object
        json_data = request.get_json()
        foodGroupID = json_data['foodGroupID']

        # execute SQL query
        query = f"DELETE FROM FoodGroups WHERE foodGroupID = '{foodGroupID}';"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)

    # PUT ROUTE
    if request.method == 'PUT':
        # extract data from request object
        json_data = request.get_json()
        foodGroupID = json_data['foodGroupID']
        name = json_data['name']

        # execute SQL query
        query = f"UPDATE FoodGroups SET name = '{name}' WHERE foodGroupID = '{foodGroupID}';"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
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
        return jsonify(results)


# Listener
if __name__ == "__main__":
    port = int(os.environ.get('PORT', 80))
    app.run(port=port, debug=False)  # debug option allows live changes
