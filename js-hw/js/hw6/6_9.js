/*
Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
*/
const getNamesSortedByFriendsCount = users => {
  const newUsers = [...users];
  newUsers.sort((a, b) => b.friends.length - a.friends.length);
  return newUsers.reduce((acc, { name }) => [...acc, name], []);
};
console.log(getNamesSortedByFriendsCount(users));
