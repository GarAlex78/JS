/*
Получить пользоваля (не массив) по email (поле email, он уникальный).
*/
const getUserWithEmail = (users, mail) =>
  users.find(({ email }) => email === mail);
console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
