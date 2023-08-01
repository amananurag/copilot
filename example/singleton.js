class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
      this.name = "John";
      this.score = 1234;
    }
    //console.log('instance created'+ JSON.stringify(Singleton.instance));
    return Singleton.instance;
  }
  getscore() {
    return this.score;
  }
}
// all object will have same copy of function.
const user1 = new Singleton();
const user2 = new Singleton();
user1.score = 1000;
console.log(user1.getscore());
console.log(user2.getscore());
console.log(user1 === user2);
