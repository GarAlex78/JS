"use strict";
/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/
const rest = {
  counterValue: 0,
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  spanValue: document.querySelector("#value")
};
const { buttonIncrement, buttonDecrement, spanValue } = rest;

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);

function increment() {
  rest.counterValue += 1;
  spanValue.innerText = rest.counterValue;
}

function decrement() {
  if (rest.counterValue === 0) {
    return;
  }
  rest.counterValue -= 1;
  spanValue.innerText = rest.counterValue;
}
