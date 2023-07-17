import helloController from "../../controller/hello/hello-controller.js";
import mongoConnect from "../../config.js";

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

    const result = mongoConnect
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

export default hellorouter;
