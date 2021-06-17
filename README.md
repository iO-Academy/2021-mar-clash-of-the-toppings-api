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
    - {'_id': ObjectId('507f1f77bcf86cd799439011'), 'name':'Coffee for Maria', 'img':'<your image url>', 
      'category':'Chameleon', 'wins':49, 'battles':50, 'winPercent':98}
- Returns:
    - if GET request is successful
        - {'data':[], 'msg':'Success', statusCode:200, 'success':true}
    - if GET request is successful but no data is returned:
        - {'data':[], 'msg':'No data found', statusCode:200, 'success':true}

PUT
- updates a topping with the new number of wins, new number of battles and calculates the new win percentage. Then 
  returns the updated topping.
- Data format:
    - {'_id': ObjectId('507f1f77bcf86cd799439011'), 'name':'Coffee for Maria', 'img':'<your image url>',
      'category':'Chameleon', 'wins':49, 'battles':50, 'winPercent':98}
- Sends:
    - {'id': ObjectId(), 'wins': 'integer', battles: 'integer'}
- Returns:
    - if PUT request is successful
        - {'data':[], 'msg':'Success', statusCode:200, 'success':true}
    - if PUT request is unsuccessful
      - {'data':[], 'msg':'There has been an error', statusCode:404, 'success':false} 

