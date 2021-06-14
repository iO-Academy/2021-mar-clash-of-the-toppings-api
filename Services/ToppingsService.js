const getAllToppings = async (db) => {
    const collection = db.collection("toppings");
    const result = await collection.find({}).toArray();
    return result;
};

const getToppingById = async (db, id) => {
    const collection = db.collection("toppings");
    const result = await collection.findOne({ _id: id });
    return result;
}

const updateTopping = async (db, data) => {
    const collection = db.collection("toppings");
    const result = await collection.updateOne(
        {
        _id: data.id
        }, { $set: {
        wins: data.wins,
        battles: data.battles,
        winPercent: data.winPercent
        }});
    return result;
}

module.exports.getAllToppings = getAllToppings;
module.exports.getToppingById = getToppingById;
module.exports.updateTopping = updateTopping;
