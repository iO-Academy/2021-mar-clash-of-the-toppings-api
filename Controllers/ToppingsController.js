const DbService = require("../Services/DbConnectionService");
const ToppingsService = require("../Services/ToppingsService");
const ResponsesService = require("./../Services/ResponsesService");
const ObjectId = require("mongodb").ObjectId;

const getAllToppings = (req, res) => {
  DbService.connectToDb(async (db) => {
    const toppings = await ToppingsService.getAllToppings(db);
    res.json(toppings);
  });
};

module.exports.getAllToppings = getAllToppings;
