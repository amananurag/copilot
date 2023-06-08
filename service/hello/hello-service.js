class HelloService {
  constructor() {
    this.greeting = "Welcome from Hello Service";
  }
  sayHello(req, res) {
    console.log(this.greeting);
    return res.send(this.greeting);
  }
}
module.exports = new HelloService();
