const getAllToppings = async (db) => {
  const collection = db.collection("toppings");
  const result = await collection.find({}).toArray();
  return result;
};

module.exports.getAllToppings = getAllToppings;
