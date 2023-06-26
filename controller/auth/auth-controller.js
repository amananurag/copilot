import authService from "./../../service/auth/auth-service.js";
import { v4 as uuidv4 } from "uuid";

class Authcontroller {
  constructor() {
    if (!Authcontroller.instance) {
      Authcontroller.instance = this;
      this.isAuhenticated = false;
    }
    return Authcontroller.instance;
  }
  login(req, res) {
    this.isAuhenticated = authService.login(req, res);
    if (this.isAuhenticated) {
      const sessionId = uuidv4();
      res.cookie("session_id", sessionId, { httpOnly: true });
      res.send("Authentication Successful");
    } else {
      res.send("Authentication Failed");
    }
  }
  logout(req, res) {
    // logout logic
  }
}

export default new Authcontroller();
