
# Necessary Queries

## Users:
- Initial Load - SELECT * FROM Users;
- Add - INSERT INTO Users (email, username) VALUE (x, y);
- Edit email - UPDATE Users SET (email) = 'new_value' WHERE userID='_[ID]'
- Edit users - UPDATE Users SET (users) = 'new_value' WHERE userID='[ID]'
- Delete - DELETE FROM Users WHERE userID="[ID]";

#### Possible
> Search - SELECT username, email FROM Users WHERE [QUERY];  (or use automatic)

## Grocery Lists:
- Initial Load - SELECT username, listDate FROM GroceryLists JOIN Users;
- Add - INSERT INTO GroceryLists (userID, listDate) VALUE ((SELECT userID from Users WHERE userID=[ID]),NOW());
- Delete - DELETE FROM GroceryLists WHERE listID=[ID];

#### Dropdown - Add (Username)
> Initial Load - SELECT username, userID FROM Users;

#### Possible
> Initial Load - SELECT username, listDate FROM GroceryLists JOIN Users WHERE listDate=[INPUT] or username = [INPUT];

## Ingredients:
- Initial Load - SELECT * FROM Ingredients;
- Add - INSERT --- INTO Ingredients;
- Edit - UPDATE --- from Ingredients;
- Delete - DELETE -- from Ingredients;

#### Dropdown - Add (Food Group)
> Initial Load - SELECT * FROM FoodGroups;

#### Possible
> Search - SELECT --- from Ingredients; (or use automatic)

## Food Groups:
- Initial Load - SELECT * FROM FoodGroups;
- Add - INSERT --- INTO FoodGroups;
- Edit - UPDATE --- from FoodGroups;
- Delete - DELETE -- from FoodGroups;

#### Possible
> Search - SELECT --- from FoodGroups; (or use automatic)

## User Ingredients:
- Initial Load - SELECT * FROM Ingredients WHERE --;
- Add - INSERT --- INTO Ingredients WHERE --;
- Edit - UPDATE --- from Ingredients WHERE --;
- Delete - DELETE -- from Ingredients WHERE --;

#### Dropdown - Select User (User)
> Initial Load - SELECT username FROM Users;

#### Dropdown - Add Form (Ingredient)
> Initial Load - SELECT name FROM Ingredients;

#### Possible
> Search - SELECT --- from UserIngredients (or use automatic)

## Grocery-List Ingredients:

### Grocery Lists
- Initial Load - SELECT * FROM GroceryLists;
- Load Ingredients from List - SELECT --- FROM JOIN JOIN;

#### Possible
> Search - SELECT --- from Users; (or use automatic)

### GroceryLists_Ingredients
- Add - INSERT --- X 
- Edit - UPDATE --- from Ingredients WHERE --;
- Delete - DELETE -- from Ingredients WHERE --;

#### Dropdown - Add Form (Ingredient)
> Initial Load - SELECT name FROM Ingredients;

#### Possible
> Search - SELECT --- from Users; (or use automatic)
