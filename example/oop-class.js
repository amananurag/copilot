class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

// Adding incrementScore to the prototype
User.prototype.incrementScore = function () {
  this.score++;
};

const user = new User("john", 1234);
user.incrementScore();
console.log(user.__proto__);

const user2 = new User("john", 1234);
user2.incrementScore();
console.log(user2.__proto__);
