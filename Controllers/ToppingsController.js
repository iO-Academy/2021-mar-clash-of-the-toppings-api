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

const updateTopping = (req, res) => {
  const data = {
    id: ObjectId(req.body.id),
    wins: req.body.wins,
    battles: req.body.battles,
  }
  data.winPercent = Number((100*data.wins/data.battles).toFixed(1))

  DbService.connectToDb(async (db) => {
    const mongoResponseObject = await ToppingsService.updateTopping(db, data)
    res.json(mongoResponseObject)
  })
}

module.exports.getAllToppings = getAllToppings;
module.exports.updateTopping = updateTopping;
