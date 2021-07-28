from flask import Flask, render_template, json, jsonify, request
from flask_cors import CORS
import os
import database.db_connector as db

# Configuration
app = Flask(__name__, static_folder='./front/build', static_url_path='/')
db_connection = db.connect_to_database()

# Routes 
@app.route('/')
def root():
    #return render_template("main.j2")
    return app.send_static_file('index.html')

# This enables use of React Router
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/bsg-people')
def bsg_people():

    # Write the query and save it to a variable
    query = "SELECT * FROM Users;"

    # The way the interface between MySQL and Flask works is by using an
    # object called a cursor. Think of it as the object that acts as the
    # person typing commands directly into the MySQL command line and
    # reading them back to you when it gets results
    cursor = db.execute_query(db_connection=db_connection, query=query)

    # The cursor.fetchall() function tells the cursor object to return all
    # the results from the previously executed
    #
    # The json.dumps() function simply converts the dictionary that was
    # returned by the fetchall() call to JSON so we can display it on the
    # page.
    # results = json.dumps(cursor.fetchall())

    # Send list of dictionaries instead of JSON because we
    # don't want to send JSON to the template
    results = cursor.fetchall()

    # Sends the results back to the web browser.
    return render_template("bsg.j2", bsg_people = results)

@app.route('/users', methods=['GET', 'POST'])
def users():

    # if we receive a get request we need to execute a get query and return
    # all users from the DB as json.
    if request.method == 'GET':
        query = "SELECT * FROM Users;"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)

@app.route('/grocery_lists', methods=['GET', 'POST'])
def grocery_lists():

    # if we receive a get request we need to execute a get query and return
    # all users from the DB as json.
    if request.method == 'GET':
        query = "SELECT username, listDate, listID FROM GroceryLists JOIN Users USING (userID)"
        cursor = db.execute_query(db_connection=db_connection, query=query)
        results = cursor.fetchall()
        return jsonify(results)


@app.route('/api', methods=['GET', 'POST'])
def welcome():
    # return "Hello World!"
    return jsonify(hello='world')

# Listener
if __name__ == "__main__":
    port = int(os.environ.get('PORT', 80)) 
    
    app.run(port=port, debug=False)  # debug option allows live changes
