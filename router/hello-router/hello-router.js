const helloController = require("./../../controller/hello/hello-controller");

const MongoConnect = require("./../../config.js");
function hellorouter(router) {
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
    return helloController.sayHello(req, res);
  });

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

  return router;
}

module.exports = hellorouter;