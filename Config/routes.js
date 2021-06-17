const ToppingsController = require("../Controllers/ToppingsController");
const InvalidMethodController = require("../Controllers/InvalidMethodController")
const validator = require("../Middleware/updateToppingValidator");

const routes = (app) => {
  app.get("/toppings", ToppingsController.getTwoToppings);
  app.post("/toppings", InvalidMethodController.sendInvalidMethodResponse);
  app.put(
    "/toppings",
    validator.updateToppingValidator,
    ToppingsController.updateTopping
  );
  app.delete("/toppings", InvalidMethodController.sendInvalidMethodResponse);
  app.get("/toppings/topten", ToppingsController.getTopTen);
  app.post("/toppings/topten", InvalidMethodController.sendInvalidMethodResponse);
  app.put("/toppings/topten", InvalidMethodController.sendInvalidMethodResponse);
  app.delete("/toppings/topten", InvalidMethodController.sendInvalidMethodResponse);
};

module.exports = routes;
