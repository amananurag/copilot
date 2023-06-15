import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

class MongoConnect {
  constructor() {
    if (!MongoConnect.instance) {
      // set instance to this
      MongoConnect.instance = this;
      this.username = process.env.DB_USERNAME;
      this.password = process.env.DB_PASSWORD;
      this.uri = `mongodb+srv://${this.username}:${this.password}@cluster0.b73a6db.mongodb.net/sample?retryWrites=true&w=majority`;
    }
    return MongoConnect.instance;
  }

  async connectToMongoDB(operation, documents) {
    try {
      const client = await MongoClient.connect(this.uri);
      const dbName = "sample";
      const collectionName = "demo";
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
      console.log("Connected to MongoDB");
      // Perform operations on the database
      client.close();
      return result;
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
}
// all object will have same copy of function.

export default new MongoConnect();
