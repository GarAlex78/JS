/*
Напиши скрипт, который, для объекта user, последовательно:
    добавляет поле mood со значением 'happy'
    заменяет значение hobby на 'skydiving'
    заменяет значение premium на false
    выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };
// const show = (text, user) => console.log(text, user);
// show("original: ", user);
// user.mood = "happy";
// show("mood: happy: ", user);
// user.hobby = "skydiving";
// show("hobby: skydiving: ", user);
// user.premium = "false";
// show("premium: false: ", user);
// const array = Object.keys(user);
// show(array);
// for (let item of array) {
//   show(`${item}: ${user[item]}`);
// }

//=======================================================
/*
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
*/

// const countProps = function(obj) {
//   const array = Object.keys(obj);
//   return array.length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango" })); // 1

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

//===========================================================

/*
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
*/
// const findBestEmployee = function(employees) {
//   //const array = Object.keys(employees);
//   let numberOfTasks = 0;
//   let bestEmployeeName;
//   //-------- первый вариант------------
//   // for (let item of array) {
//   //   let key = item;
//   //   if (employees[item] > bestEmployees) {
//   //     numberOfTasks = employees[item];
//   //     bestEmployeeName = item;
//   //   }
//   // }
//   //-------- второй вариант------------
//   for (const key in employees) {
//     if (employees[key] > numberOfTasks) {
//       numberOfTasks = employees[key];
//       bestEmployeeName = key;
//     }
//   }
//   console.log(
//     `вот он лучший работник ${bestEmployeeName}: ${employees[bestEmployeeName]}`
//   );
// };
// findBestEmployee({
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// }); // lorence

// findBestEmployee({
//   poly: 12,
//   mango: 17,
//   ajax: 4
// }); // mango

// findBestEmployee({
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38
// }); // lux

//==============================================================
/*
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
*/

// const countTotalSalary = function(employees) {
//   const allSalary = Object.values(employees);
//   let sumSalary = 0;
//   for (let item of allSalary) {
//     sumSalary += item;
//   }
//   return sumSalary;
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 250,
//     lux: 50,
//     chelsy: 150
//   })
// ); // 400
//=====================================================
/*
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
*/

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const getAllPropValues = function(inputArray, key) {
//   let outputArray = [];
//   for (const item of inputArray) {
//     Object.keys(item).includes(key) ? outputArray.push(item[key]) : [];
//   }
//   return outputArray;
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

//========================================================
/*
Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).
*/

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//   let sum;
//   for (const item of allProdcuts) {
//     Object.values(item).includes(productName)
//       ? (sum = item.price * item.quantity)
//       : false;
//   }
//   return console.log(`Oбщую стоимость продукта ${productName} = ${sum}`);
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200
// console.log(calculateTotalPrice(products, "Дроид")); // 2800

//==========================================================

// /*Напиши скрипт управления личным кабинетом интернет банка. Есть объект 'account' в котором необходимо реализовать методы для работы с балансом и историей транзакций.
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw"
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length,
//       type,
//       amount
//     };
//   },
//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     const type = Transaction.DEPOSIT;
//     this.balance += amount;
//     this.transactions.push(this.createTransaction(amount, type));
//   },

//   show(type, amount) {
//     console.log("type: ", type + ", amount: ", amount);
//     console.log("this.balance: ", this.balance);
//     console.log("this.transactions: ", this.transactions);
//   },
//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     const type = Transaction.WITHDRAW;
//     if (amount > this.balance) {
//       alert("снятие такой суммы не возможно, недостаточно средств");
//       return;
//     }
//     this.balance -= amount;
//     this.transactions.push(this.createTransaction(amount, type));
//   },
//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },
//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(idx) {
//     for (const key of this.transactions) {
//       if (key.id == idx) {
//         return key;
//       }
//     }
//   },
//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const key of this.transactions) {
//       if (key.type == type) {
//         sum += key.amount;
//       }
//     }
//     return sum;
//   }
// };
// /*
// Проверка
// */

// account.deposit(50);
// account.deposit(500);
// account.withdraw(150);
// account.deposit(10);
// account.withdraw(100);
// console.log("transactions: ", account.transactions);
