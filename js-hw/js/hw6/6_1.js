/*
Получить массив имен всех пользователей (поле name).
*/
const getUserNames = users => users.map(({ name }) => name);
console.log(getUserNames(users));
