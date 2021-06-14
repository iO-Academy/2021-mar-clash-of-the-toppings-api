const getAllToppings = async (db) => {
  const collection = db.collection("toppings");
  const result = await collection.find({}).toArray();
  return result;
};

const updateTopping = async (db, data) => {
  const collection = db.collection("toppings");
  console.log(data)
  const result = await collection.updateOne(
      {
        _id: data.id
      }, { $set: {
        wins: data.wins,
        battles: data.battles,
        winPercent: data.winPercent
      }})
  return result
}
module.exports.getAllToppings = getAllToppings;
module.exports.updateTopping = updateTopping;
