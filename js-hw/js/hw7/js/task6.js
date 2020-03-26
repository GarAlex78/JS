"use strict";
/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.*/

const validation = {
  inputText: document.querySelector(".validation-input"),
  validationYes: "valid",
  validationNow: "invalid",
  checkValidation(e) {
    const validationClass =
      e.target.value.length < 6 ? this.validationNow : this.validationYes;
    return validationClass;
  }
};
const { inputText } = validation;
inputText.addEventListener("blur", handleInputFocus);
function handleInputFocus(e) {
  inputText.classList.remove("invalid", "valid");
  //const validation = e.target.value.length < 6 ? "invalid" : "valid";
  inputText.classList.add(validation.checkValidation(e));
}
