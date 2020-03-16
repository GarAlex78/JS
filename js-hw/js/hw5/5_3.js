/*
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих
// */

class Storage {
  constructor(items) {
    this._items = items;
  }

  //- возвращает массив текущих товаров

  getItems() {
    return this._items;
  }

  //- получает новый товар и добавляет его к текущим

  addItem(item) {
    this._items = [...this._items, item];
  }

  //- получет товар и, если он есть, удаляет его из текущих

  removeItem(item) {
    this._items = [this._items.filter(product => product != item)];
  }
}

const st = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);
/*
Проверка
*/
//console.log("storage: ", st);
st.addItem("метла");
console.log("storage: ", st);
st.removeItem("метла");
console.log("storage: ", st);
st.removeItem("Антигравитатор");
console.log("storage: ", st);
