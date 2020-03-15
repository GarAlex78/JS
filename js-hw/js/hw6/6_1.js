/*
Получить массив имен всех пользователей (поле name).
*/
const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));
