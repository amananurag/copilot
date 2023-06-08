class MongoConnect {
  constructor() {
    if (MongoConnect.instance === undefined) {
      MongoConnect.instance = this;
      this.mongoclient = require("mongodb").MongoClient;
      this.uri =
        "mongodb+srv://amananurag07:Amandocs07@cluster0" +
        ".b73a6db.mongodb.net/sample?retryWrites=true&w=majority";
    }
    return MongoConnect.instance;
  }

  async connectToMongoDB(dbName, collectionName, operation, documents) {
    try {
      const client = await this.mongoclient.connect(this.uri);
      const collection = await client.db(dbName).collection(collectionName);
      let result = "";
      if (operation === "insertOne") {
        result = await collection.insertOne(documents);
      } else if (operation === "insertMany") {
        result = await collection.insertMany(documents);
      } else if (operation === "findOne") {
        result = await collection.findOne(documents);
      } else if (operation === "find") {
        result = await collection.find(documents);
      } else if (operation === "updateOne") {
        result = await collection.updateOne(documents);
      } else if (operation === "updateMany") {
        result = await collection.updateMany(documents);
      } else if (operation === "deleteOne") {
        result = await collection.deleteOne(documents);
      } else if (operation === "deleteMany") {
        result = await collection.deleteMany(documents);
      }
      return result;
      console.log("Connected to MongoDB");
      // Perform operations on the database
      client.close();
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
}

module.exports = MongoConnect;
