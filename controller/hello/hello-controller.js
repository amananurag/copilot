const helloService = require("../../service/hello/hello-service");
class HelloController {
  constructor() {}
  sayHello(req, res) {
    return helloService.sayHello(req, res);
  }
}

module.exports = new HelloController();
