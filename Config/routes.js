const ToppingsController = require("../Controllers/ToppingsController");

const routes = (app) => {
  app.get("/", ToppingsController.getAllToppings);
  // app.put("/", ToppingsController.updateTopping);
  // app.get("/topten", ToppingsController.getTopTen);
};

module.exports = routes;
