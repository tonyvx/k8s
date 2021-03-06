const { MongoClient } = require("mongodb");
// const connectionString = process.env.MONGO_URI;
const { USER_NAME, USER_PWD, DB_URL } = process.env;
const connectionString = "mongodb://" + USER_NAME + ":" + USER_PWD + "@" + DB_URL + ":27017";
// const connectionString = "mongodb://root:rootpassword@localhost:27017";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("k8s");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};