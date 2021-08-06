# CS340 Group 70
## File Structure
This project uses Flask and React
The Flask code is in app.py and database/db_connector.py
The sql files for database table creation and the queries are in database/
The bulk of our React work is in front/src/components

## References
The navigation is set up in front/src/App.js using Material-UI Simple Tabs.  
2000+ contributors to Material-UI (July 2021) Material-UI (Version 4.11.4) [Source code] https://material-ui.com/components/tabs/

The tables are implemented using the material-table package:  
Baran, M et al. (July 2021) material-table (Version 1.69.3) [Source code] https://material-table.com/

In several cases (e.g., in handleRowUpdate and handleRowDelete of Ingredients.js) the code for updating the state of a React component after a fetch is adapted from:  
Effiong, C (July 2021) material-ui-table-crud-restapi [Source code] https://github.com/effiongcharles/material-ui-table-crud-restapi