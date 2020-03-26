"use strict";
const inputRange = document.querySelector("#font-size-control");
const spanInput = document.querySelector("#text");
inputRange.addEventListener("input", handleinputRange);
function handleinputRange() {
  spanInput.style.fontSize = `${event.target.value}px`;
}
