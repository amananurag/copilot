function User(name, score) {
  this.name = name;
  this.score = score;
  this.hobbies = ["reading", "music"];
}

const user = new User("john", 1234);

const clonedUser = JSON.parse(JSON.stringify(user));

user.name = "bob";
user.score = 4321;

console.log(user.name);
console.log(user.score);
console.log(clonedUser.name);
console.log(clonedUser.score);

user.hobbies.push("sports");

console.log(user.hobbies);
console.log(clonedUser.hobbies);
