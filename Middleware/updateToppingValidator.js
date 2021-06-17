const ResponsesService = require("../Services/ResponsesService");

const updateToppingValidator = (req, res, next) => {
  const wins = req.body.wins;
  const battles = req.body.battles;

  if (checkInt(battles) && checkInt(wins) && battles >= wins) {
    return next();
  }
  let jsonRes = ResponsesService.unsuccessful();
  return res.json(jsonRes);
};

const checkInt = (value) => {
  if (typeof value === "number" && String(value).match(/^[0-9]*$/gm)) {
    return true;
  }
  return false;
};

module.exports.updateToppingValidator = updateToppingValidator;
module.exports.checkInt = checkInt;
