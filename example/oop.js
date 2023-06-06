function createPerson(name, country, score) {
  const person = {
    name: name,
    country: country,
    score: score,
    incrementScore: function () {
      this.score++;
    },
  };
  return person;
}
const person1 = createPerson("john", "USA", 1234);
person1.incrementScore();

const person2 = createPerson("john", "USA", 1234);
person2.incrementScore();

function User(name, score) {
  const user = Object.create(funcitonscore);
  user.name = name;
  user.score = score;
  return user;
}
const funcitonscore = {
  incrementScore: function () {
    this.score++;
  },
};

const user1 = User("john", 1234);
//Object.setPrototypeOf(user1, Object);
user1.incrementScore();
function newUser(name, score) {
  this.name = name;
  this.score = score;
}
newUser.prototype.incrementScore = function () {
  this.score++;
};
const user = new newUser("john", 1234);
user.incrementScore();
console.log(user.__proto__);
