import { MongoConnect } from "./../config.js";
// create a new object with Singleton class
const connection = new MongoConnect();

const result = connection
  .connectToMongoDB("insertOne", { commit: "Hello World!" })
  .then((result) => {
    console.log(JSON.stringify(result));
  })
  .catch((error) => {
    console.log(error);
  });
