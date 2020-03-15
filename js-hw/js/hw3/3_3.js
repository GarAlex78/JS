/*
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".
*/
const findBestEmployee = function(employees) {
  const array = Object.keys(employees);
  let numberOfTasks = 0;
  let bestEmployeeName;
  /*
================================= первый вариант==============================
*/
  for (let item of array) {
    let key = item;
    if (employees[item] > bestEmployees) {
      numberOfTasks = employees[item];
      bestEmployeeName = item;
    }
  }
  /*
========================= второй вариант================================
*/

  for (const key in employees) {
    if (employees[key] > numberOfTasks) {
      numberOfTasks = employees[key];
      bestEmployeeName = key;
    }
  }
  console.log(
    `вот он лучший работник ${bestEmployeeName}: ${employees[bestEmployeeName]}`
  );
  /*
=======================третий вариант=====================================
*/
  const arrayEmployees = Object.entries(employees);

  arrayEmployees.map(items => {
    if (items[1] > numberOfTasks) {
      (numberOfTasks = items[1]), (bestEmployeeName = items[0]);
    }
  });
  console.log(bestEmployeeName);
};
findBestEmployee({
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
}); // lorence

findBestEmployee({
  poly: 12,
  mango: 17,
  ajax: 4
}); // mango

findBestEmployee({
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38
}); // lux
