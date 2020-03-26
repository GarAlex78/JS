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
// хорошей практикой считается Важные переменные и методы обработки их скрывать в обьект.
const rest = {
  counter: { value: 0 },
  incr() {
    this.counter.value += 1;
  },
  decr() {
    this.counter.value -= 1;
  },
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  spanValue: document.querySelector("#value")
};
const { buttonIncrement, buttonDecrement, spanValue } = rest;

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);

function increment() {
  rest.incr();
  spanValue.textContent = rest.counter.value;
}

function decrement() {
  if (rest.counter.value === 0) {
    return;
  }
  rest.decr();
  spanValue.textContent = rest.counter.value;
}

//=============================II вариант ============================
// const refs = {
//   counter: document.querySelector("#counter"),
// сылка на блок в котором находятся наши кнопки. Присрабатывание события на любой кнопке мы его можем отследить на слушателе через свойство target дальше dataset( мы прописали в теге кождой кнопке data-action="decrement" и дальше action
//   value: document.querySelector("#value")
// };

// const actions = {
//   state: {
//     counter: 0
//   },
//   decrement() {
//     this.state.counter -= 1;
//   },
//   increment() {
//     this.state.counter += 1;
//   }
// };
// //const counter = document.querySelector("#counter");
// в фун-цию changeValue передаем event потом деструктуризируем его { target }.
//
// const changeValue = ({ target }) => {
// в зависимости от полученого значения из [target.dataset.action] (decrement или increment) вызывается ода из функий и ее ретерн записываем в span через его свойство textContent
// actions[target.dataset.action]();
//   refs.value.textContent = actions.state.counter;
// };
// refs.counter.addEventListener("click", changeValue);
