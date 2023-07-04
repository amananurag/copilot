// run node server on port 8080
const person = new Proxy(
  { age: 22 },
  {
    set(target, key, value) {
      console.log(`setting  ${key} to ${value}`);
      if (key === "name") {
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
      if (key === "name") {
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

// use express to create a server
import express from "express";
import util from "util";
import router from "./router/routes.js";
import { swagger } from "./swagger.js";
import validateApiKey from "./utilities/validation/validate-apikey.js";
const app = express();
swagger(app);
const listen = util.promisify(app.listen).bind(app);
app.use(validateApiKey);
app.use("/", router);

async function startServer() {
  try {
    await listen(8080);
  } catch (error) {
    console.log(error);
  }
}
startServer();
