import helloController from "../../controller/hello/hello-controller.js";
import mongoConnect from "../../config.js";
import authController from "../../controller/auth/auth-controller.js";
import cookiesParser from "../../utilities/cookies-parser.js";
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
    const cookies = req.headers.cookie;
    const session_id = cookiesParser(cookies);
    console.log(session_id);
    console.log("auth sessionId :" + authController.sessionId);
    if (session_id && session_id === authController.sessionId) {
      return helloController.sayHello(req, res);
    }
    return res.send("Please Authenticate");
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
