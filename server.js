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
import validateApiKey from "./api-middleware/validation/validate-apikey.js";
import cookiesParser from "./api-middleware/cookies-parser.js";
import noHandlerFound from "./api-middleware/validation/noHandlerException.js";
import fs from "fs";
import https from "https";
const app = express();

// Read the private key and certificate files
const privateKey = fs.readFileSync("./private-key.pem", "utf8");
const certificate = fs.readFileSync("./certificate.pem", "utf8");

const credentials = { key: privateKey, cert: certificate };

// Create an HTTPS server
const httpsServer = https.createServer(credentials, app);

swagger(app);
const listen = util.promisify(httpsServer.listen).bind(httpsServer);
app.use(validateApiKey);
app.use(cookiesParser);
app.use(noHandlerFound);
app.use("/", router);

async function startServer() {
  try {
    await listen(443);
  } catch (error) {
    console.log(error);
  }
}
startServer();
