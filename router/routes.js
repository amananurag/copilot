import express from "express";
import bodyParser from "body-parser";
import hellorouter from "./hello-router/hello-router.js";
const router = express.Router();

router.use(bodyParser.json());

router.use("/hello", hellorouter(router));

export default router;
