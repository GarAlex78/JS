/*
Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
*/
const getSortedUniqueSkills = users =>
  users
    .reduce((totalLikes, tweet) => [...totalLikes, ...tweet.skills], [])
    .sort((a, b) => b.localeCompare(a, "en"))
    .filter((item, index, self) => !self.includes(item, index + 1));

console.log("getSortedUniqueSkills: ", getSortedUniqueSkills(users));

/*
   =======================================II вариант==================
*/
const getSortedUniqueSkills1 = users =>
  users
    .reduce((totalLikes, tweet) => [...totalLikes, ...tweet.skills], [])
    .filter((item, index, self) => index === self.indexOf(item))
    .sort((a, b) => b.localeCompare(a, "en"));

console.log("getSortedUniqueSkills1: ", getSortedUniqueSkills1(users));
