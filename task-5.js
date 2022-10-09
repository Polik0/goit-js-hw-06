import users from "./users.js";

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email).name;
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}
