"use strict";
/*
Напиши скрипт для создания галлереи изображений по массиву данных.
В HTML есть список ul#gallery.
<ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().
Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.*/
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];
const oneImg = {
  url:
    "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "White and Black Long Fur Cat"
};
const rest = {
  buttonNext: document.querySelector("button.next"),
  buttonPrev: document.querySelector("button.prev"),
  ulGallery: document.querySelector("ul#gallery")
};
const { buttonNext, buttonPrev, ulGallery } = rest;
buttonNext.addEventListener("click", handleNextFoto);
buttonPrev.addEventListener("click", handlePrevFoto);

function creatOneLi(img) {
  const li = `<li class="foto_cat"><img src=${img.url} alt=${img.alt}></li>`;
  return li;
}
function creatAllLi(base, func) {
  return base.map(item => func(item)).join("\n");
}
const allLis = creatAllLi(images, creatOneLi);

ulGallery.insertAdjacentHTML("afterbegin", allLis);
// получаем ссылку на масив тегов img
const arrayImg = [...document.querySelectorAll("img")];
// обнуляем счетчик и обьявляем maxQuantityImg
const maxQuantityImg = arrayImg.length - 1;
let counter = 0;
//показываем первое фото
arrayImg[counter].classList.toggle("active");
//перелистываем назад
function handlePrevFoto() {
  counter -= 1;
  arrayImg[counter + 1].classList.remove("active");
  if (counter < 0) {
    arrayImg[counter + 1].classList.remove("active");
    counter = 2;
  }
  arrayImg[counter].classList.add("active");
}
//перелистываем вперед
function handleNextFoto() {
  counter += 1;
  arrayImg[counter - 1].classList.remove("active");
  if (counter > maxQuantityImg) {
    arrayImg[counter - 1].classList.remove("active");
    counter = 0;
  }
  arrayImg[counter].classList.add("active");
}
