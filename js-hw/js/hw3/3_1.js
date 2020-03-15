/*
Напиши скрипт, который, для объекта user, последовательно:
    добавляет поле mood со значением 'happy'
    заменяет значение hobby на 'skydiving'
    заменяет значение premium на false
    выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};
const show = (text, user) => console.log(text, user);
show("original: ", user);
user.mood = "happy";
show("mood: happy: ", user);
user.hobby = "skydiving";
show("hobby: skydiving: ", user);
user.premium = "false";
show("premium: false: ", user);
const array = Object.keys(user);
show(array);
for (let item of array) {
  show(`${item}: ${user[item]}`);
}
