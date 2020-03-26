/*
Получить массив имен пользователей по полу (поле gender).
*/
const getUsersWithGender = (users, sex) =>
  users.filter(({ gender }) => gender === sex).map(({ name }) => name);
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
