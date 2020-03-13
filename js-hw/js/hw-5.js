//=================================homework-05-03==========
// /*
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих
// */

// class Storage {
//   constructor(items) {
//     this._items = items;
//   }

//   getItems() {
//     return this._items;
//   } //- возвращает массив текущих товаров
//   addItem(item) {
//     this._items = [...this._items, item];
//   } //- получает новый товар и добавляет его к текущим
//   removeItem(item) {
//     for (let i = 0; i < this._items.length; i += 1) {
//       if (this._items[i] === item) {
//         this._items.splice(i, 1);
//         return;
//       }
//     }
//     this._items.push(item);
//   } //- получет товар и, если он есть, удаляет его из текущих
//   //findNew(item)
//   removeItem(item) {
//     //let arr = [...this._items];
//     //console.log("arr: ", arr);
//     this._items.find(str => str === item)
//       ? (this._items = this._items.filter(items => items != item))
//       : (this._items = [...this._items, item]);
//     return this._items;
//   }
// }

// const st = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор"
// ]);
// /*
// Проверка
// */
// console.log("storage: ", st);
// st.addItem("метла");
// console.log("storage: ", st);
// st.removeItem("метла");
// console.log("storage: ", st);

//===================================================

// const numbers = [1, 7, 5, 3, 2, 9, 4, 6];
// const sor = numbers.find(num => num === 8);
// console.log(sor);
// Функциональный forEach
//numbers.forEach(num => console.log("forEach: ", num));

// Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// let tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }
// ];
//const f = tweets.map(tweet => tweet.likes);
//console.log(tweets);
//const f = (tweets, id, likes) => tweets.filter(tweet => tweet.tags);
// const add = (id, tweet) => {
//   tweets = [...tweets, { id, ...tweet }];
// };
// add("005", { likes: 100, tags: ["jso", "nodejs", "react"] });
// console.log(tweets);
//const f = tweets.map(tweet => tweet.tags);
//const r = tweets => tweets.map(tweet => tweet.tags);

//const f = tweets.find(tweet => tweet.id === "003");
//console.log("map-original: ", tweets);
//console.log("f: ", f);
//console.log("getLikes: ", getLikes());
//=====================hw-5-4=========================

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }
//   get getValue() {
//     return this._value;
//   }
//   append(str) {
//     this._value = this._value + str;
//   }
//   prepend(str) {
//     this._value = str + this._value;
//   }
//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder);
// builder.append("^");
// console.log(builder.getValue); // '.^'

// builder.prepend("^");
// console.log(builder.getValue); // '^.^'

// builder.pad("=");
// console.log(builder.getValue); // '=^.^='

//===============================hw-5-5=====================
// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */
//   static getSpecs(car) {
//     console.log("car: ", car);
//     console.log(
//       `maxSpeed: ${car._maxSpeed} км/ч, speed: ${car._speed} км/ч, isOn: ${car._isOn}, distance: ${car._distance} км,  price: ${car._price} тыс.$`
//     );
//   }
//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */

//   constructor({ maxSpeed, speed = 0, isOn, distance = 0, price }) {
//     (this._maxSpeed = maxSpeed),
//       (this._speed = speed),
//       (this._isOn = isOn),
//       (this._distance = distance),
//       (this._price = price);
//   }

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */
//   get price() {
//     return this._price;
//   }
//   set price(price) {
//     this._price = price;
//   }
//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this._isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this._isOn = false;
//     this._speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     this._maxSpeed > this._speed + value
//       ? (this._speed = this._speed + value)
//       : console.log("Вы превысели скорость");
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     this._speed - value >= 0
//       ? (this._speed = this._speed - value)
//       : console.log("Вы остановились");
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     this._isOn
//       ? (this._distance = hours * this._speed + this._distance)
//       : (this._distance = this._distance);
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang);
// mustang.accelerate(20);
// console.log(mustang);
// mustang.accelerate(100);
// console.log(mustang);
// mustang.decelerate(80);
// console.log(mustang);
// mustang.decelerate(41);
// console.log(mustang);
// mustang.turnOn();
// mustang.drive(10);
// console.log(mustang);
// mustang.turnOff();
// mustang.drive(10);
// console.log(mustang);
// Car.getSpecs(mustang);
