import express from "express";
import bodyParser from "body-parser";
import hellorouter from "./hello/hello-router.js";
import authRouter from "./auth/auth-router.js";

const router = express.Router();

router.use(bodyParser.json());

router.use("/hello", hellorouter(router));
router.use("/login", authRouter(router));

export default router;
