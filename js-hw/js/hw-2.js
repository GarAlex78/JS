"use strict";
//==============================================================
/*Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
*/

//   const logItems = function(array) {
//     for (let i = 0; i < array.length; i += 1) {
//       let itemArray = array[i];
//       console.log(`${i + 1} - ${itemArray}`);
//     }
//   };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

//   logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//==================================================================

/*Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.
 */
// const calculateEngravingPrice = function(message, pricePerWord) {
//   const messegeArrays = message.split(" ");
//   console.log(messegeArrays);
//   const sum = messegeArrays.length * pricePerWord;
//   return sum;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

//=================================================================================
/*Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
 */

// const findLongestWord = function(string) {
//   const messegeArrays = string.split(" ");
//   let longWord = messegeArrays[0];
//   for (const item of messegeArrays) {
//     if (longWord.length < item.length) longWord = item;
//   }
//   return longWord;
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
// console.log(findLongestWord("Google do a roll")); // 'Google'
// console.log(findLongestWord("May the force be with you")); // 'force'

//================================================================================
/*
Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
    Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
    Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
*/

// const formatString = function(string) {
//   let stringArrays = string.split("");
//   if (stringArrays.length < 40) {
//     return string;
//   } else {
//     let i = stringArrays.length - 40;
//         stringArrays.splice(40, i, "...");
//        return stringArrays.join("");
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // вернется оригинальная строка
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // вернется форматированная строка
// console.log(formatString("Curabitur ligula sapien.")); // вернется оригинальная строка
// console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")); // вернется форматированная строка

//=====================================================================================
/*
Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
*/

// const checkForSpam = function(message) {
//   message = message.toLowerCase();
//   const messegeArrays = message.split("");
//   return findSpam(messegeArrays);
// };
// const findSpam = function(messegeArrays) {
//   let newArrays = [];
//   for (let i = 0; i < messegeArrays.length; i += 1) {
//     if (messegeArrays[i] === "s") {
//       newArrays = messegeArrays.slice(i, i + 4);
//       let t = newArrays.join("");
//             if (t === "spam" || t === "sale") {
//         return true;
//       } else if (i < messegeArrays.length) continue;
//     }
//   }
//   return false;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//========================================================

/*
Напиши скрипт со следующим функционалом:
    При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
    Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
    После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
!!! Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

// let input;
// const arrays = [];
// const nanTest = function(input) {
//   input = Number(input);
//   if (Number.isNaN(input)) {
//     return alert("было введено не число, пожалуйста введите число");
//   } else {
//     arrays.push(input);
//   }
// };
// const sumArray = function(arrays) {
//   let sum = 0;
//   for (let arrayItem of arrays) {
//     sum += arrayItem;
//   }
//   return sum;
// };
// // тело
// do {
//   input = prompt("Введите любое число");
//   if (input !== null) {
//     nanTest(input);
//   } else {
//     console.log("Сумма всех чисел: ", sumArray(arrays));
//     break;
//   }
//   console.log("arrays: ", arrays);
// } while (input !== null);

//=====================================================

/*
Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:
    проходить проверку на длину от 4 до 16-ти символов включительно
    быть уникален, то есть отсутствовать в массиве logins
Разбей задачу на подзадачи с помощью функций.
Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.
Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.
Напиши функцию addLogin(allLogins, login) которая:
    Принимает новый логин и массив всех логинов как параметры
    Проверяет валидность логина используя вспомогательную функцию isLoginValid
    Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
    Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
    Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
!!! Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.
Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
    isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
    isLoginValid только проверяет валидный ли логин и возвращает true или false.
    addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.
*/

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = login => login.length > 3 && login.length < 17;

// const isLoginUnique = function(logins, login) {
//   login = login.toLowerCase();
//   let loginLowerCase = [];
//   for (const iterator of logins) {
//     loginLowerCase.push(iterator.toLowerCase());
//   }
//   return loginLowerCase.includes(login);
// };

// const addLogin = function(logins, login) {
//   let text = "Логин успешно добавлен!";
//   let error;
//   isLoginValid(login)
//     ? (error = "Такой логин уже есть")
//     : (error = "Ошибка! Логин должен быть от 4 до 16 символов");
//   isLoginValid(login) && !isLoginUnique(logins, login)
//     ? logins.push(login)
//     : (text = error);
//   return text;
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
