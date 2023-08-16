import authService from "./../../service/auth/auth-service.js";
import { v4 as uuidv4 } from "uuid";
import hashUserCredentials from "../../utilities/hash/hashUserCredentials.js";
class Authcontroller {
  constructor() {
    this.isAuhenticated = false;
    this.sessionId = "";
  }
  login(req, res) {
    //  const req = hashUserCredentials(req);
    this.isAuhenticated = authService.login(req, res);
    if (this.isAuhenticated) {
      this.sessionId = uuidv4();
      res.cookie("session_id", this.sessionId, { httpOnly: true });
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
