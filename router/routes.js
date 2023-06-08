const router = require("express").Router();

const bodyParser = require("body-parser");

const hellorouter = require("./hello-router/hello-router");

router.use(bodyParser.json());

router.use("/hello", hellorouter(router));

module.exports = router;
