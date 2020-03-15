/*
Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
*/
const getSortedUniqueSkills = users =>
  users
    .reduce((totalLikes, tweet) => [...totalLikes, ...tweet.skills], [])
    .sort()
    .filter((item, index, self) => !self.includes(item, index + 1));

console.time("Time this");
console.log("getSortedUniqueSkills: ", getSortedUniqueSkills(users));
console.timeEnd("Time this");
/*
   =======================================II вариант==================
*/
const getSortedUniqueSkills1 = users =>
  users
    .reduce((totalLikes, tweet) => [...totalLikes, ...tweet.skills], [])
    .filter((item, index, self) => index === self.indexOf(item))
    .sort();

console.time("Time this");
console.log("getSortedUniqueSkills1: ", getSortedUniqueSkills1(users));
console.timeEnd("Time this");
