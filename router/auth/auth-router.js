import authController from "../../controller/auth/auth-controller.js";

function authRouter(router) {
  // implement login route

  router.post("/login", (req, res) => {
    return authController.login(req, res);
  });
  return router;
}

export default authRouter;
