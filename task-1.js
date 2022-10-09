import users from "./users.js";
// const getUserNames = (users) => {
//   const gotUsername = [];
//   users.array.forEach((user) => {
//     gotUsername.push(user.name);
//   });
//   return gotUsername;
// };

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
