import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import * as basicLightbox from "basiclightbox";
import cart from "./templates/cart.hbs";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import makeDivGrid from "./makeDivGrid";
import "./styles.css";
import "basiclightbox/dist/basicLightbox.min.css";
const notyf = new Notyf({
  duration: 2500,
  position: {
    x: "right",
    y: "top"
  }
});
const refs = {
  key: "16000908-7761bac350ef0ad961c25a132",
  url: `https://pixabay.com`,
  setUrl(page, search, key) {
    return (this.url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=12&key=${key}`);
  },
  divGallery: document.querySelector(".gallery"),
  input: document.querySelector(".js-search-form"),
  page: 1,
  setPage(num) {
    return (this.page = num);
  },
  searchText: "",
  setSearchText(value) {
    return (this.searchText = value);
  },
  sentinal: document.querySelector(".sentinal")
};
const { divGallery, input, key, sentinal } = refs;
//=====================submit=====================================

input.addEventListener("submit", handlerInputSeach);
function handlerInputSeach(e) {
  e.preventDefault(); // отключаем submit по умолчанию
  divGallery.innerHTML = "";
  //очистка блока после изминения поиска
  const text = e.target.elements[0].value;
  if (text.length < 2) {
    notyf.error("Not enough data to request");
    return;
  }
  if (refs.searchText === text) {
    refs.setPage(1);
  }
  refs.setSearchText(text); // запись в переменную значения поиска
  refs.setPage(1); //зброс номера страници запроса
  divGallery.appendChild(makeDivGrid());

  getFoto();
  infinitiSkroll();
}
//======================выбор фото для basicLightbox(модалки)===============
function handlerChoiceFoto(e) {
  if (e.target.className !== "photo-card__img") {
    return;
  }
  const urlFoto = e.target.dataset.url;
  const instance = basicLightbox.create(`
      <img src=${urlFoto} width="800" height="600">
  `);
  instance.show();
}
//========================infinite scroll=================
function infinitiSkroll(value) {
  const options = {
    rootMargin: "0px 0px 100px 0px",
    threshold: 0.2
  };
  const onEntry = (entries, observer) => {
    console.log("entries: ", entries);
    if (entries[0].isIntersecting === true) {
      console.log("isIntersecting: ", entries[0].isIntersecting);
      handleClickLoadMore();
    }
    console.log("isIntersecting: ", entries[0].isIntersecting);
    // if (value.length < 1 || refs.page === 1) {
    //   return;
    // }
    // тут можно писать логику для проверки вхождения

    //handleClickLoadMore();
  };
  const observer = new IntersectionObserver(onEntry, options);
  observer.observe(sentinal);
  //console.log("observer: ", observer);
}
//======================дозагрузка фото=========
function handleClickLoadMore() {
  refs.setPage((refs.page += 1)); //увеличеваем номер страницы для загрузкиследующей страницы
  getFoto();
}
//==================создаем Url и делаем запрос ============
function getFoto() {
  refs.setUrl(refs.page, refs.searchText, key);
  dataProcessing();
  console.log("page: ", refs.page);
}
//====================запрос============
const getPromis = async () => {
  try {
    const response = await fetch(refs.url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
//======================обработка запроса===================
const dataProcessing = async () => {
  try {
    const dataPromis = await getPromis();
    const arrayFoto = dataPromis.hits;
    //console.log("dataPromis: ", arrayFoto);
    if (arrayFoto.length === 0 && refs.page !== 1) {
      notyf.success("At your request that's all");
      return;
    }
    if (arrayFoto.length === 0) {
      notyf.error("Sorry, but there are no results for your search");
      return;
    }
    showGallerys(arrayFoto);
    //infinitiSkroll(arrayFoto);
  } catch (error) {
    console.log(error);
  }
};
//======================masonry==========================
function funcMasonry() {
  const masonryInstance = new Masonry(".gallery", {
    columnWidth: ".grid-sizer",
    itemSelector: ".grid-item",
    gutter: 10,
    transitionDuration: "0.4s",
    stagger: 3
  });
  const imagesLoadedInstans = imagesLoaded(".gallery");
  imagesLoadedInstans.on("progress", () => {
    masonryInstance.layout();
  });
}
//=======================creat marcup ===============
const showGallerys = arrayFoto => {
  divGallery.insertAdjacentHTML("beforeend", `${cart({ arrayFoto })}`);
  funcMasonry();
  divGallery.addEventListener("click", handlerChoiceFoto);
};
