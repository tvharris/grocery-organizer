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
