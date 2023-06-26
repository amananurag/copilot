class AuthService {
  constructor() {
    this.username = "admin";
    this.password = "password";
  }

  login(req, res) {
    if (req.body && req.body.username) {
      if (
        req.body.username === this.username &&
        req.body.password === this.password
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export default new AuthService();
