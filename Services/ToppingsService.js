const getTwoToppings = async (db) => {
  const collection = db.collection("toppings");
  const result = await collection
    .aggregate([{ $sample: { size: 2 } }])
    .toArray();
  return result;
};

const getToppingById = async (db, id) => {
  const collection = db.collection("toppings");
  const result = await collection.findOne({ _id: id });
  return result;
};

const updateTopping = async (db, data) => {
  const collection = db.collection("toppings");
  const result = await collection.updateOne(
    {
      _id: data.id,
    },
    {
      $set: {
        wins: data.wins,
        battles: data.battles,
        winPercent: data.winPercent,
      },
    }
  );
  return result;
};

const getTopTen = async (db) => {
  const collection = db.collection("toppings");
  const result = await collection
    .aggregate([{ $sort: { winPercent: -1 } }, { $limit: 10 }])
    .toArray();
  return result;
};

module.exports.getTwoToppings = getTwoToppings;
module.exports.getToppingById = getToppingById;
module.exports.updateTopping = updateTopping;
module.exports.getTopTen = getTopTen;
