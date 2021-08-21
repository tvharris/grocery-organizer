# Grocery Organizer
![Users_GroceryLists](https://user-images.githubusercontent.com/51836567/129780754-406d4cf4-e2ef-4ee8-892f-379cfbb61deb.gif)
![FoodGroups_Ingredients](https://user-images.githubusercontent.com/51836567/129780767-991101dd-1aff-45e7-8d34-6ed39423a9ca.gif)
![UserIngred_GroceryListIngred](https://user-images.githubusercontent.com/51836567/129780775-8bde9e06-2bad-490f-a006-b31974860fb7.gif)

## File Structure
The Flask code is in app.py and database/db_connector.py

The bulk of the React work is in front/src/components 

The sql files for database table creation and the queries are in database/

## References
The navigation is set up in front/src/App.js using Material-UI Simple Tabs.  
2000+ contributors to Material-UI (July 2021) Material-UI (Version 4.11.4) [Source code] https://material-ui.com/components/tabs/

The tables are implemented using the material-table package:  
Baran, M et al. (July 2021) material-table (Version 1.69.3) [Source code] https://material-table.com/

In several cases (e.g., in handleRowUpdate and handleRowDelete of Ingredients.js) the code for updating the state of a React component after a fetch is adapted from:  
Effiong, C (July 2021) material-ui-table-crud-restapi [Source code] https://github.com/effiongcharles/material-ui-table-crud-restapi
