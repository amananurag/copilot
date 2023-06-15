import helloService from "./../../service/hello/hello-service.js";
class HelloController {
  constructor() {}
  sayHello(req, res) {
    return helloService.sayHello(req, res);
  }
}

export default new HelloController();
