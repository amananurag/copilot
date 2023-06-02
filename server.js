// run node server on port 8080
const person = new Proxy(
  { age: 22 },
  {
    set(target, key, value) {
      console.log(`setting  ${key} to ${value}`);
      if (key == "name") {
        target[key] = value;
      } else {
        throw new Error("You cannot set age to person");
      }
    },
    get(target, key) {
      console.log(`getting ${key}`);
      return target[key];
    },
    deleteProperty(target, key) {
      if (key == "name") {
        console.log(`deleting ${key}`);
        delete target[key];
      } else {
        throw new Error("You cannot delete age from person");
      }
    },
    has(target, key) {
      console.log(`has ${key}`);
      return key in target;
    },
  }
);

person.name = "John";
console.log(person.name);
delete person.name;
console.log(person.name);
console.log("name" in person);
console.log("age" in person);

// use express to create a server
const express = require("express");
const util = require("util");
const app = express();
const router = require("./router/routes");
const listen = util.promisify(app.listen).bind(app);
require("./swagger")(app);

app.use("/", router);

async function startServer() {
  try {
    await listen(8080);
    console.log("Server started on port 8080");
  } catch (err) {
    console.error(err);
  }
}
startServer();
