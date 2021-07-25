-- Initial Table Creation

CREATE TABLE Users (
  userID INT AUTO_INCREMENT NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY (userID),
  CONSTRAINT email_unique UNIQUE (email)
);

CREATE TABLE FoodGroups (
   foodGroupID INT AUTO_INCREMENT NOT NULL,
   name VARCHAR(255) NOT NULL,
   CONSTRAINT unique_name UNIQUE(name),
   PRIMARY KEY (foodGroupID)
 );
 
CREATE TABLE Ingredients (
  ingredientID int AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  foodGroupID int,
  PRIMARY KEY (ingredientID),
  CONSTRAINT unique_name UNIQUE(name),
  FOREIGN KEY (foodGroupID) REFERENCES FoodGroups(foodGroupID)
  ON UPDATE CASCADE
  ON DELETE CASCADE
 );
 
CREATE TABLE GroceryLists(
  listID INT AUTO_INCREMENT NOT NULL,
  userID INT NOT NULL,
  listDate DATETIME NOT NULL,
  PRIMARY KEY (listID),
  FOREIGN KEY (userID) REFERENCES Users (userID)
  ON UPDATE CASCADE
  ON DELETE CASCADE
);

CREATE TABLE User_Ingredients(
  userID INT NOT NULL,
  ingredientID INT NOT NULL,
  FOREIGN KEY (userID) REFERENCES Users (userID),
  ON UPDATE CASCADE
  ON DELETE CASCADE
  FOREIGN KEY (ingredientID) REFERENCES Ingredients (ingredientID),
  ON UPDATE CASCADE
  ON DELETE CASCADE
  PRIMARY KEY (userID, ingredientID)
);

CREATE TABLE GroceryList_Ingredients(
  listID INT NOT NULL,
  ingredientID INT NOT NULL,
  FOREIGN KEY (listID) REFERENCES GroceryLists (listID),
  ON UPDATE CASCADE
  ON DELETE CASCADE
  FOREIGN KEY (ingredientID) REFERENCES Ingredients (ingredientID),
  ON UPDATE CASCADE
  ON DELETE CASCADE
  PRIMARY KEY (listID, ingredientID)
);

Actual Insertion Into Tables

-- Users
INSERT INTO Users (email, username) VALUE ('test@test.com', 'test_user');
INSERT INTO Users (email, username) VALUE ('john@doe.com', 'john_doe');
INSERT INTO Users (email, username) VALUE ('jane@doe.com', 'jane_doe');
INSERT INTO Users (email, username) VALUE ('sapsen@oregonstate.edu', 'noah_sapse');
INSERT INTO Users (email, username) VALUE ('harritra@oregonstate.edu', 'travis_harris');

-- Food Groups
INSERT INTO FoodGroups (name) VALUE ('dairy');
INSERT INTO FoodGroups (name) VALUE ('vegetable');
INSERT INTO FoodGroups (name) VALUE ('spice');
INSERT INTO FoodGroups (name) VALUE ('meat');
INSERT INTO FoodGroups (name) VALUE ('cheese');
INSERT INTO FoodGroups (name) VALUE ('beverage');

-- Ingredients
INSERT INTO Ingredients (name, foodGroupID) VALUE ('broccoli', (SELECT foodGroupID from FoodGroups WHERE name='vegetable'));
INSERT INTO Ingredients (name, foodGroupID) VALUE ('carrot', (SELECT foodGroupID from FoodGroups WHERE name='vegetable'));
INSERT INTO Ingredients (name, foodGroupID) VALUE ('gouda', (SELECT foodGroupID from FoodGroups WHERE name='cheese'));
INSERT INTO Ingredients (name, foodGroupID) VALUE ('beer', (SELECT foodGroupID from FoodGroups WHERE name='beverage'));
INSERT INTO Ingredients (name, foodGroupID) VALUE ('steak', (SELECT foodGroupID from FoodGroups WHERE name='meat'));

-- GroceryLists
INSERT INTO GroceryLists (userID, listDate) VALUE ((SELECT userID from Users WHERE username='test_user'), NOW()); 
INSERT INTO GroceryLists (userID, listDate) VALUE ((SELECT userID from Users WHERE username='jane_doe'), NOW()); 
INSERT INTO GroceryLists (userID, listDate) VALUE ((SELECT userID from Users WHERE username='john_doe'), NOW()); 
INSERT INTO GroceryLists (userID, listDate) VALUE ((SELECT userID from Users WHERE username='noah_sapse'), NOW()); 

-- User_Ingredients
INSERT INTO User_Ingredients (userID, ingredientID) VALUE ((SELECT userID from Users WHERE username='test_user'),(SELECT ingredientID from Ingredients WHERE name='broccoli'));

INSERT INTO User_Ingredients (userID, ingredientID) VALUE ((SELECT userID from Users WHERE username='test_user'),(SELECT ingredientID from Ingredients WHERE name='steak'));


INSERT INTO User_Ingredients (userID, ingredientID) VALUE ((SELECT userID from Users WHERE username='noah_sapse'),(SELECT ingredientID from Ingredients WHERE name='beer'));

INSERT INTO User_Ingredients (userID, ingredientID) VALUE ((SELECT userID from Users WHERE username='john_doe'),(SELECT ingredientID from Ingredients WHERE name='broccoli'));

INSERT INTO User_Ingredients (userID, ingredientID) VALUE ((SELECT userID from Users WHERE username='john_doe'),(SELECT ingredientID from Ingredients WHERE name='gouda'));

-- GroceryLists
INSERT INTO GroceryList_Ingredients (listID, ingredientID) VALUES ((SELECT listID from GroceryLists WHERE userID=(SELECT userID FROM Users WHERE username='test_user')),(SELECT ingredientID from Ingredients where name='broccoli'));

INSERT INTO GroceryList_Ingredients (listID, ingredientID) VALUES ((SELECT listID from GroceryLists WHERE userID=(SELECT userID FROM Users WHERE username='jane_doe')),(SELECT ingredientID from Ingredients where name='broccoli'));

INSERT INTO GroceryList_Ingredients (listID, ingredientID) VALUES ((SELECT listID from GroceryLists WHERE userID=(SELECT userID FROM Users WHERE username='john_doe')),(SELECT ingredientID from Ingredients where name='broccoli'));

INSERT INTO GroceryList_Ingredients (listID, ingredientID) VALUES ((SELECT listID from GroceryLists WHERE userID=(SELECT userID FROM Users WHERE username='noah_sapse')),(SELECT ingredientID from Ingredients where name='carrot'));
