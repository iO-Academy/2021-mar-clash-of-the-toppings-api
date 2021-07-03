const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://root:password@localhost:27017";
const dbName = "pizza";

const connectToDb = async (cb) => {
  const Client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await Client.connect(async (err) => {
    let db = Client.db(dbName);
    await cb(db);
    await Client.close()
  });
};

module.exports.connectToDb = connectToDb;
