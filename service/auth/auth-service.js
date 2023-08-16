class AuthService {
  constructor() {
    this.username = "admin";
    // this password is generated in utilities hashUserCredentials.js
    this.password =
      "19fdbcc676822f93a4565bbc87245f1b090ea091daab1951c217894b8a0b449c2cac7931cc970d4845d3281769ab36f856a4b592bbeb0589724ea7e417286e76";
    this.salt = "d968a6d787d14fdc7033321f4092cfb9";
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
