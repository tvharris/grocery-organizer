 --# Necessary Queries

 --## Users:
 --- Initial Load: 

SELECT email, username, userID FROM Users;

 --- Add:  
INSERT INTO Users (email, username) VALUE (x, y);

 --- Edit email : 
UPDATE Users SET (email) = 'new_value' WHERE userID='_'[ID]''

 --- Edit users : 
UPDATE Users SET (username) = 'new_value' WHERE userID=''[ID]''

 --- Delete : 
DELETE FROM Users WHERE userID="'[ID]'";


 --## Grocery Lists:

 --- Initial Load : 
SELECT username, listDate, listID FROM GroceryLists JOIN Users USING (userID);


 --- Add : 
INSERT INTO GroceryLists (userID, listDate) VALUE ((SELECT userID from Users WHERE username='[username]'),NOW());

 --- Delete : 
DELETE FROM GroceryLists WHERE listID='[ID]';

 --#### Dropdown - Add (Username)
 --> Initial Load : 
SELECT username, userID FROM Users;

 --## Ingredients:

 --- Initial Load : 
SELECT Ingredients.name, FoodGroups.name, Ingredients.ingredientID FROM Ingredients LEFT JOIN FoodGroups USING (foodGroupID);

 --- Add: 
INSERT INTO Ingredients (name, foodGroupID) VALUE ([NAME], (SELECT foodGroupID WHERE name='FoodGroups.name'));

 --- Edit name : 
UPDATE Ingredients SET (name) = '[NEW NAME]' WHERE ingredientID='_'[ID]''

 --- Edit foodGroupID : 
UPDATE Ingredients SET (foodGroupID) = (SELECT foodGroupID from FoodGroups WHERE name=[FOODGROUP_NAME]) WHERE ingredientID='_'[ID]''

 --- Delete : 
DELETE FROM Ingredients WHERE ingredientID='[ID]';

 --#### Dropdown - Add (Food Group)
 --> Initial Load : 
SELECT * FROM FoodGroups;


 --## Food Groups:

 --- Initial Load :
SELECT name, foodGroupID FROM FoodGroups;

 --- Add : 
INSERT INTO FoodGroups (name) VALUE ([INPUT]);

 --- Edit : 
UPDATE FoodGroups SET name WHERE foodGroupID='[ID]' ;

 --- Delete : 
DELETE FROM FoodGroups WHERE foodGroupID='[ID]';

 --## User Ingredients:

 --- Initial Load - Depends on User Dropdown:
SELECT name from User_Ingredients
JOIN Ingredients USING (ingredientID)
WHERE User_Ingredients.userID = ('[INPUT FROM DROPDOWN]')

 --- Add :
INSERT INTO User_Ingredients (userID, ingredientID) 
VALUES ('[USER_ID_FROM_DROPDOWN]', '[INGREDIENT_ID_FROM_DROPDOWN]');


 --- Delete : 
DELETE FROM User_Ingredients WHERE userID='[userID]' AND listID='[listID]' --;

 --#### Dropdown - Select User (User)
 --> Initial Load 
SELECT username, userId FROM Users;

 --#### Dropdown - Add Form (Ingredient)
 --> Initial Load : 
SELECT name, ingredientID FROM Ingredients;

 --## Grocery-List Ingredients:

 --### Grocery Lists

 --- Initial Load : 
SELECT username, listDate, listID FROM GroceryLists JOIN Users USING (userID);

 --- Load Ingredients from List (On Click of List) : 
SELECT name, ingredientID from GroceryLists_Ingredients
JOIN Ingredients USING (ingredientID)
WHERE GroceryLists_Ingredients.listID = ['GroceryLists.listID' (From INPUT)]; 


 --### GroceryLists_Ingredients

 --- Add : 
INSERT INTO GroceryLists_Ingredients (listID, ingredientID) 
VALUES ('[CURRENT_LIST_ID]', (SELECT ingredientID from Ingredient WHERE name='[SELECTED_NAME]'));


 --- Delete : 
DELETE FROM GroceryLists_Ingredients WHERE ingredientID='[ID]' AND listID = '[ID]';

 --#### Dropdown - Add Form (Ingredient)
 --> Initial Load : 
SELECT name, ingredientID FROM Ingredients;

