const MongoConnect = require("./../config.js");

const connection = new MongoConnect();

const result = connection
  .connectToMongoDB("sample", "demo", "insertOne", { commit: "Hello World!" })
  .then((result) => {
    console.log(JSON.stringify(result));
  })
  .catch((error) => {
    console.log(error);
  });
