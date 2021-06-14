const DbService = require("../Services/DbConnectionService");
const ToppingsService = require("../Services/ToppingsService");
const ResponsesService = require("./../Services/ResponsesService");
const ObjectId = require("mongodb").ObjectId;

const getAllToppings = (req, res) => {
  DbService.connectToDb(async (db) => {
    const result = await ToppingsService.getAllToppings(db);
    let jsonRes = ResponsesService.successful()
    jsonRes.data = result;
    return res.json(jsonRes);
  });
};

const updateTopping = (req, res) => {
  const data = {
    id: ObjectId(req.body.id),
    wins: req.body.wins,
    battles: req.body.battles,
  };
  data.winPercent = Number((100*data.wins/data.battles).toFixed(1));

  DbService.connectToDb(async (db) => {
    const result = await ToppingsService.updateTopping(db, data);
    if(result.modifiedCount == 1) {
      const result2 = await ToppingsService.getToppingById(db, data.id);
      let jsonRes = ResponsesService.successful();
      jsonRes.data = result2;
      return res.json(jsonRes);
    }
  })
}

module.exports.getAllToppings = getAllToppings;
module.exports.updateTopping = updateTopping;
