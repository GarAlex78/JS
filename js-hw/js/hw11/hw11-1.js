const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];
/*
Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
warning Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
*/
const refs = {
  divBtn: document.querySelector("div.btn"),
  body: document.querySelector("body")
};
const { divBtn, body } = refs;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

divBtn.addEventListener("click", handleClickButton);

let timerId;
let flag;
function handleClickButton({ target }) {
  if (target.dataset.action === "start") {
    if (flag) {
      return;
    }
    timerId = setInterval(rndColorSelect, 1000, colors);
    console.log("timerId: ", timerId);
    flag = true;
  } else {
    clearInterval(timerId);
    flag = false;
    console.log("stop timerId: ", timerId);
  }
}

function rndColorSelect(color) {
  const idColors = randomIntegerFromInterval(0, color.length - 1);
  body.style.backgroundColor = `${colors[idColors]}`;
}
