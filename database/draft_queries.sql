 --# Necessary Queries

 --## Users:
 --- Initial Load: 

SELECT * FROM Users;

 --- Add:  
INSERT INTO Users (email, username) VALUE (x, y);

 --- Edit email : 
UPDATE Users SET (email) = 'new_value' WHERE userID='_'[ID]''

 --- Edit users : 
UPDATE Users SET (users) = 'new_value' WHERE userID=''[ID]''

 --- Delete : 
DELETE FROM Users WHERE userID="'[ID]'";

 --#### Possible
 --> Search : 
SELECT username, email FROM Users WHERE [QUERY];  (or use automatic)

 --## Grocery Lists:

 --- Initial Load : 
SELECT username, listDate, listID FROM GroceryLists JOIN Users;


 --- Add : 
INSERT INTO GroceryLists (userID, listDate) VALUE ((SELECT userID from Users WHERE userID='[ID]'),NOW());

 --- Delete : 
DELETE FROM GroceryLists WHERE listID='[ID]';

 --#### Dropdown - Add (Username)
 --> Initial Load : 
SELECT username, userID FROM Users;

 --#### Possible
 --> Initial Load: 
SELECT username, listDate FROM GroceryLists JOIN Users WHERE listDate=[INPUT] or username = [INPUT];
 --## Ingredients:

 --- Initial Load : 
SELECT Ingredients.name, FoodGroups.name, Ingredients.ingredientID FROM Ingredients JOIN FoodGroups;

 --- Add: 
INSERT INTO Ingredients (name, foodGroupID) VALUE ([NAME], (SELECT foodGroupID WHERE name='FoodGroups.name'));

 --- Edit name : 
UPDATE Ingredients SET (name) = '[NEW NAME]' WHERE ingredientID='_'[ID]''

 --- Edit goodGroupID : 
UPDATE Ingredients SET (goodGroupID) = (SELECT foodGroupID from FoodGroups WHERE name=[FOODGROUP_NAME]) WHERE ingredientID='_'[ID]''

 --- Delete : 
DELETE FROM Ingredients WHERE ingredientID='[ID]';

 --#### Dropdown - Add (Food Group)
 --> Initial Load : 
SELECT * FROM FoodGroups;

 --#### Possible
 --> Search :
SELECT Ingredients.name Foodgroups.namefrom FROM Ingredients 
JOIN Foodgroups 
WHERE Ingredients.name=[INPUT] or FoodGroups.name=[INPUT]; (or use automatic)

 --## Food Groups:

 --- Initial Load :
SELECT * FROM FoodGroups;

 --- Add : 
INSERT INTO FoodGroups (name) VALUE ([INPUT]);

 --- Edit : 
UPDATE FoodGroups SET name WHERE foodGroupID='[ID]' ;

 --- Delete : 
DELETE FoodGroups WHERE foodGroupID='[ID]';

 --#### Possible
 --> Search : 
SELECT * from FoodGroups WHERE name='[INPUT]'; (or use automatic)

 --## User Ingredients:

 --- Initial Load - Depends on User Dropdown:
SELECT name from User_Ingredients
JOIN Ingredients WHERE User_Ingredients.ingredientID = Ingredient.ingredientID
JOIN Users WHERE User_Ingredients.userID = Users.userID;

 --- Add :
INSERT INTO User_Ingredients (userID, ingredientID) 
VALUES ('[USER_ID_FROM_DROPDOWN]', '[INGREDIENT_ID_FROM_DROPDOWN]');


 --- Delete : 
DELETE -- from Ingredients WHERE --;

 --#### Dropdown - Select User (User)
 --> Initial Load 
SELECT username FROM Users;

 --#### Dropdown - Add Form (Ingredient)
 --> Initial Load : 
SELECT name FROM Ingredients;

 --#### Possible
 --> Search : 
SELECT name from User_Ingredients
JOIN Ingredients WHERE User_Ingredients.ingredientID = Ingredient.ingredientID
JOIN Users WHERE User_Ingredients.userID = Users.userID
WHERE name = '[INPUT]';

 --## Grocery-List Ingredients:

 --### Grocery Lists

 --- Initial Load : 
SELECT * FROM GroceryLists;

 --- Load Ingredients from List (On Click of List) : 
SELECT name from User_Ingredients
JOIN Ingredients WHERE User_Ingredients.ingredientID = Ingredient.ingredientID
JOIN Users WHERE User_Ingredients.userID = Users.userID;

 --#### Possible
 --> Search : 

SELECT --- from Users; (or use automatic)

 --### GroceryLists_Ingredients

 --- Add : 
INSERT INTO GroceryLists_Ingredients (listID, ingredientID) 
VALUES ('[CURRENT_LIST_ID]', (SELECT ingredientID from Ingredient WHERE name='[SELECTED_NAME]'));


 --- Delete : 
DELETE FROM User_Ingredients WHERE ingredientID='[ID]' AND listID = '[ID]';

 --#### Dropdown - Add Form (Ingredient)
 --> Initial Load : 
SELECT * FROM Ingredients;

 --#### Possible
 --> Search - 

SELECT --- from Users; (or use automatic)
