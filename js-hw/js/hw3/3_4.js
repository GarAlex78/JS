/*
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
*/

const countTotalSalary = employees => {
  let sumSalary = 0;
  const allSalary = Object.values(employees);
  allSalary.map(item => (sumSalary += item));
  return sumSalary;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 250,
    lux: 50,
    chelsy: 150
  })
); // 450
