const express = require("express");
const router = express.Router();

const MongoConnect = require("./../config.js");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

/**
 * @swagger
 * /:
 *   get:
 *     responses:
 *       200:
 *         description: Welcome String
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *
 */
router.get("/", (req, res) => {
  res.send("Hello welcome from Express Server");
});
// based on hello world example, create a new route for /api/posts
router.post("/api/posts", (req, res) => {
  const { title } = req.body;
  // create a new object with Singleton class
  const connection = new MongoConnect();

  const result = connection
    .connectToMongoDB("insertOne", { commit: title })
    .then((result) => {
      console.log(JSON.stringify(result));
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
});

module.exports = router;
