 --# Necessary Queries

 --## Users:
 --- Initial Load: 

SELECT email, username, userID FROM Users;

 --- Add:  
INSERT INTO Users (email, username) VALUE (x, y);
 --- Return the added row:
SELECT * FROM Users WHERE userID = (SELECT MAX(userID) FROM Users);

 --- Edit email : 
UPDATE Users SET (email) = 'new_value' WHERE userID='_'[ID]'';

 --- Edit users : 
UPDATE Users SET (username) = 'new_value' WHERE userID=''[ID]'';

 --- Delete : 
DELETE FROM Users WHERE userID="'[ID]'";


 --## Grocery Lists:

 --- Initial Load : 
SELECT username, listDate, listID FROM GroceryLists JOIN Users USING (userID);


 --- Add : 
INSERT INTO GroceryLists (userID, listDate) VALUE ((SELECT userID from Users WHERE username='[username]'),NOW());
  --- After insert, select the added row (most recent date)
  --- This is necessary to return the date to the front-end
  SELECT username, listDate, listID FROM GroceryLists 
  JOIN Users USING (userID) ORDER BY listDate DESC LIMIT 1;

 --- Delete : 
DELETE FROM GroceryLists WHERE listID='[ID]';

 --#### Dropdown - Add (Username)
 --> Initial Load : 
SELECT username, userID FROM Users;

 --## Ingredients:

 --- Initial Load : 
SELECT Ingredients.name, FoodGroups.name fgname, Ingredients.ingredientID FROM Ingredients LEFT JOIN FoodGroups USING (foodGroupID);

 --- Add: 
INSERT INTO Ingredients (name, foodGroupID) VALUE ([NAME], (SELECT foodGroupID WHERE name='FoodGroups.name'));
 --- Return the added row:
SELECT Ingredients.name, FoodGroups.name fgname, Ingredients.ingredientID FROM Ingredients 
LEFT JOIN FoodGroups USING (foodGroupID) WHERE Ingredients.ingredientID = (SELECT MAX(ingredientID) FROM Ingredients);

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
 --- Return the added row:
SELECT * FROM FoodGroups WHERE foodGroupID = (SELECT MAX(foodGroupID) FROM FoodGroups);

 --- Edit : 
UPDATE FoodGroups SET name='[INPUT]' WHERE foodGroupID='[ID]' ;

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
DELETE FROM User_Ingredients WHERE userID='[userID]' AND ingredientID='[ingredientID]' --;

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

