/*
Получить массив имен пользователей по полу (поле gender).
*/
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(nam => nam.name);
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
