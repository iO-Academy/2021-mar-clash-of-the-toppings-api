const ToppingsController = require("../Controllers/ToppingsController");

const routes = (app) => {
  app.get("/toppings", ToppingsController.getAllToppings);
  app.put("/toppings", ToppingsController.updateTopping);
  app.get("/toppings/topten", ToppingsController.getTopTen);
};

module.exports = routes;
