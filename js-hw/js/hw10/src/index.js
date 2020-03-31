import "./styles.css";
import menuJson from "./menu.json";
import temlatMenuItem from "./templates/menu-item.hbs";

const refs = {
  switchInput: document.querySelector(".js-switch-input"),
  tegBody: document.querySelector("body"),
  menuFood: document.querySelector("ul.js-menu"),
  currentTheme: "light-theme",
  Theme: {
    LIGHT: "light-theme",
    DARK: "dark-theme"
  },
  getCurrentThemaLocalStorage() {
    return localStorage.getItem("theme");
  },
  setCurrentTheme(theme) {
    localStorage.setItem("theme", `${theme}`);
    return (this.currentTheme = theme);
  }
};
const {
  switchInput,
  tegBody,
  menuFood,
  Theme: { LIGHT, DARK }
} = refs;
menuFood.insertAdjacentHTML("beforeend", temlatMenuItem(menuJson));
valueAtBoot();
function valueAtBoot() {
  const valuaLocalStorage = refs.getCurrentThemaLocalStorage();
  refs.currentTheme = valuaLocalStorage ? valuaLocalStorage : refs.currentTheme;
  tegBody.classList.add(`${refs.currentTheme}`);
  refs.switchInput.checked = refs.currentTheme === DARK ? true : false;
}
switchInput.addEventListener("click", handleCheckBox);
function handleCheckBox({ target }) {
  tegBody.classList.remove(`${refs.currentTheme}`);
  if (target.checked) {
    refs.setCurrentTheme(DARK);
  } else {
    refs.setCurrentTheme(LIGHT);
  }
  tegBody.classList.add(`${refs.currentTheme}`);
}
