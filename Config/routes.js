const ToppingsController = require("../Controllers/ToppingsController");
const validator = require("../Middleware/updateToppingValidator");

const routes = (app) => {
  app.get("/toppings", ToppingsController.getAllToppings);
  app.put(
    "/toppings",
    validator.updateToppingValidator,
    ToppingsController.updateTopping
  );
  app.get("/toppings/topten", ToppingsController.getTopTen);
};

module.exports = routes;
