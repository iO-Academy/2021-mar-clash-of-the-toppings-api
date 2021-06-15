const DbService = require("../Services/DbConnectionService");
const ToppingsService = require("../Services/ToppingsService");
const ResponsesService = require("./../Services/ResponsesService");
const ObjectId = require("mongodb").ObjectId;

const getTwoToppings = (req, res) => {
  DbService.connectToDb(async (db) => {
    const result = await ToppingsService.getTwoToppings(db);
    let jsonRes = ResponsesService.successful();
    if (result.length === 0) {
      jsonRes.msg = "No data found";
    }
    jsonRes.data = result;
    return res.json(jsonRes);
  });
};

const updateTopping = (req, res) => {
  const data = {
    id: ObjectId(req.body.id),
    wins: req.body.wins,
    battles: req.body.battles,
    winPercent: Number((100 * (req.body.wins / req.body.battles)).toFixed(1)),
  };

  DbService.connectToDb(async (db) => {
    const updateResult = await ToppingsService.updateTopping(db, data);
    if (updateResult.modifiedCount == 1) {
      const findResult = await ToppingsService.getToppingById(db, data.id);
      let jsonRes = ResponsesService.successful();
      jsonRes.data = findResult;
      return res.json(jsonRes);
    }
    let jsonRes = ResponsesService.unsuccessful();
    return res.json(jsonRes);
  });
};

const getTopTen = (req, res) => {
  DbService.connectToDb(async (db) => {
    const result = await ToppingsService.getTopTen(db);
    let jsonRes = ResponsesService.successful();
    if (result.length === 0) {
      jsonRes.msg = "No data found";
    }
    jsonRes.data = result;
    return res.json(jsonRes);
  });
};

module.exports.getTwoToppings = getTwoToppings;
module.exports.updateTopping = updateTopping;
module.exports.getTopTen = getTopTen;
