# 2021-mar-Clash Of The Toppings API

### Setup

1. Run `npm install` in root of project
2. Create database in mongoDB with name `pizza` and create a document with name `toppings`
3. Import the data from the `JsonData` folder in the root of the project into the `toppings` document.
4. To run the application locally: `nodemon start.js`

### Running tests

To run the tests locally: `npm test`

### Routes

**/toppings**

GET
- Gets two different random toppings from the database.
- Data format:
    - {'_id': ObjectId('507f1f77bcf86cd799439011'), 'name':'Coffee for Maria', 'img':'<your image url>', 'category':'Chameleon', 
    'wins':99, 'battles':100, 'winPercent':99}
- Returns:
    - if GET request is successful
        - {'data':[], 'msg':'Success', statusCode:200, 'success':true}
    - if GET request is successful but no data is returned:
        - {'data':[], 'msg':'No data found', statusCode:200, 'success':true}

PUT
- updates a topping with the new number of wins, number of battles and win percentage and then returns the updated topping.

