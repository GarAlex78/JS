import galleries from "./gallery-items.js";
const refs = {
  ulGallery: document.querySelector(".js-gallery"),
  divLightbox: document.querySelector(".js-lightbox"),
  buttonCloseModal: document.querySelector(
    "button[data-action='close-lightbox']"
  ),
  divLightboxContent: document.querySelector("div.lightbox__content"),
  imgLightbox: document.querySelector(".lightbox__image"),
  urlBigImg: "url",
  setUrl(ur) {
    return (this.urlBigImg = `${ur}`);
  },
  activId: 0,
  setId(id) {
    this.activId = Number(id);
  }
};
const {
  ulGallery,
  divLightbox,
  imgLightbox,
  buttonCloseModal,
  divLightboxContent
} = refs;
//Создание и рендер разметки
const creatMarkup = galleries => {
  return galleries
    .map(({ preview, original, description }, idx) =>
      templateLi(preview, original, description, idx)
    )
    .join("\n");
};
const allMarkup = creatMarkup(galleries);
function templateLi(pr, or, des, idx) {
  const li = `
  <li class="gallery__item">
      <a class="gallery__link" href="#" >
        <img class="gallery__image" id ="${idx}" src=${pr} data-source=${or} alt=${des}/>
      </a>
    </li>
        `;
  return li;
}
ulGallery.insertAdjacentHTML("afterbegin", allMarkup);
//Реализация делегирования
ulGallery.addEventListener("click", handleClickFoto);
function handleClickFoto({ target }) {
  refs.setId(target.id);
  divLightbox.classList.add("is-open");
  imgLightbox.setAttribute("src", refs.setUrl(target.dataset.source));
}
//обработка пролистывания фото
document.addEventListener("keyup", handleKeyup);
function handleKeyup({ code }) {
  if (code === "Escape") {
    closeModal();
  }
  if (code === "ArrowRight") {
    console.log("refs.activId: ", refs.activId);
    refs.activId += 1;
    if (refs.activId === galleries.length) {
      refs.activId -= 1;
    }
    flipping(refs.activId);
  } else if (code === "ArrowLeft") {
    refs.activId -= 1;
    if (refs.activId === -1) {
      refs.activId += 1;
    }
    flipping(refs.activId);
  }
}
// закрытие модального окна  по button[data-action="close-lightbox"] и div.lightbox__content
document.addEventListener("click", handleCloseModal);
function handleCloseModal({ target }) {
  if (target === divLightboxContent || target === buttonCloseModal) {
    closeModal();
  }
}
// пролистывание фото
function flipping(activId) {
  const geturl = galleries[activId].original;
  imgLightbox.removeAttribute("src", refs.urlBigImg);
  imgLightbox.setAttribute("src", geturl);
}
//реализация закрытие модального окна
function closeModal() {
  divLightbox.classList.remove("is-open");
  imgLightbox.removeAttribute("src", refs.urlBigImg);
}
