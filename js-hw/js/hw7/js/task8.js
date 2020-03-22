"use strict";
/*
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
Каждый созданный div:
Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.
*/

const boxRgb = {
  divControl: document.querySelector("#controls"),
  inputNumber: document.querySelector("input"),
  divParent: document.querySelector("#boxes"),
  boxes: [],
  creatArrayWithDiv(boxes) {
    return boxes.map((item, idx) => creatDiv(idx));
  },
  render: function createBoxes(amount) {
    this.boxes.length = amount;
    this.boxes.fill(0);
    this.divParent.prepend(...this.creatArrayWithDiv(this.boxes));
  },
  destroy: function destroyBoxes() {
    inputNumber.value = 0;
    this.boxes.length = 0;
    this.divParent.innerHTML = "";
  }
};
const { divControl, inputNumber } = boxRgb;
divControl.addEventListener("click", handledivControl);
function handledivControl() {
  if (event.target.dataset.action) {
    boxRgb[event.target.dataset.action](inputNumber.value);
  }
}
const creatDiv = idx => {
  const divRgb = document.createElement("div");
  const num = idx * 10 + 30;
  divRgb.style.backgroundColor = randomColor();
  divRgb.style.width = `${num}px`;
  divRgb.style.height = `${num}px`;
  return divRgb;
};
const randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};
