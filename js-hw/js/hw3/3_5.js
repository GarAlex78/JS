/*
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
*/

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];
/*
  =====================первый метод===============================
  */
const getAllPropValues = function(inputArray, key) {
  let outputArray = [];
  for (const item of inputArray) {
    Object.keys(item).includes(key) ? outputArray.push(item[key]) : [];
  }
  return outputArray;
};
/*
  =====================второй метод===============================
  */
const getAllPropValues = (arr, prop) => {
  let r = [];
  for (const iterator of arr) {
    if (prop in iterator) {
      r = arr.map(item => item[prop]);
    } else continue;
  }
  return r;
};
/*
  =====================третий метод===============================
  */
const getAllPropValues = (arr, prop) => {
  let r = [];
  r = arr.map(item => (prop in item ? item[prop] : []));
  return r;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
