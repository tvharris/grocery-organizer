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
 );
 
CREATE TABLE GroceryLists(
  listID INT AUTO_INCREMENT NOT NULL,
  userID INT NOT NULL,
  listDate DATETIME NOT NULL,
  PRIMARY KEY (listID),
  FOREIGN KEY (userID) REFERENCES Users (userID)
);

CREATE TABLE User_Ingredients(
  userID INT NOT NULL,
  ingredientID INT NOT NULL,
  FOREIGN KEY (userID) REFERENCES Users (userID),
  FOREIGN KEY (ingredientID) REFERENCES Ingredients (ingredientID),
  PRIMARY KEY (userID, ingredientID)
);

CREATE TABLE GroceryList_Ingredients(
  listID INT NOT NULL,
  ingredientID INT NOT NULL,
  FOREIGN KEY (listID) REFERENCES GroceryLists (listID),
  FOREIGN KEY (ingredientID) REFERENCES Ingredients (ingredientID),
  PRIMARY KEY (listID, ingredientID)
);

-- Actual Insertion Into Tables

-- Users
INSERT INTO Users (email, username) VALUE ('test@test.com', 'test_user');
INSERT INTO Users (email, username) VALUE ('john@doe.com', 'john_doe');
INSERT INTO Users (email, username) VALUE ('jane@doe.com', 'jane_doe');

-- Food Groups
INSERT INTO FoodGroups (name) VALUE ('DAIRY');
INSERT INTO FoodGroups (name) VALUE ('VEGETABLE');

-- Ingredients
INSERT INTO Ingredients (name, foodGroupID) VALUE ('brocolli', (SELECT foodGroupID from FoodGroups WHERE name='VEGETABLE'));

-- GroceryLists
INSERT INTO GroceryLists (userID, listDate) VALUE ((SELECT userID from Users WHERE username='test_user'), NOW()); 

-- User_Ingredients
INSERT INTO User_Ingredients (userID, ingredientID) VALUE ((SELECT userID from Users WHERE username='test_user'),(SELECT ingredientID from Ingredients WHERE name='brocolli'));

INSERT INTO User_Ingredients (userID, ingredientID) VALUE ((SELECT userID from Users WHERE username='john_doe'),(SELECT ingredientID from Ingredients WHERE name='brocolli'));

-- GroceryLists
INSERT INTO GroceryList_Ingredients (listID, ingredientID) VALUES ((SELECT listID from GroceryLists WHERE userID='test_user'),(SELECT ingredientID from Ingredients where name='brocolli'));
