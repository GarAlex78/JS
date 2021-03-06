"use strict";
/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/
//Event.preventDefault()- запрещяем браузеру выполнять действия по умолчанию
//debugger;
const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
inputText.addEventListener("input", addTextInSpan);
function addTextInSpan({ currentTarget }) {
  outputText.textContent =
    currentTarget.value.length !== 0 ? currentTarget.value : "незнакомец";
}
