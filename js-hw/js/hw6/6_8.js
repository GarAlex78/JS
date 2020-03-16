/*
Массив имен всех пользователей у которых есть друг с указанным именем.
*/
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);
//
console.log("getUsersWithFriend: ", getUsersWithFriend(users, "Sharron Pace")); // ['Moore Hensley', 'Sharlene Bush']
console.log("getUsersWithFriend: ", getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
