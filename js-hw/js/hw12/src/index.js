// подключение модуля всплывающих подсказок
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
//подключение модуля задержки для поля input
import debounce from "lodash/debounce";
// подключение шаблонов
import cartCountries from "./templates/cart-countries.hbs";
import liCountries from "./templates/li-countries.hbs";
import "./styles.css";
// создаем экземпляр обьекта Notyf
const notyf = new Notyf({
  duration: 1500
});

const refs = {
  inputCountry: document.querySelector(".input"),
  divContainer: document.querySelector(".container"),
  liCountrie: "list_countries__item", // это название классов которые лежат в target.className, уменьшаю площадь срабатывания клика
  ulCounrtie: "list_counrties",
  url: `https://restcountries.eu/rest/v2/all`,
  dataCountries: {},
  flag: true
};
const { inputCountry, divContainer, liCountrie, ulCounrtie } = refs;
inputCountry.addEventListener("input", debounce(handleInputSearch, 500));

function handleInputSearch({ target, data }) {
  if (data === undefined || target.value.length < 2) {
    clearListCountries();
    return;
  }
  const searchInput = target.value;
  refs.url = `https://restcountries.eu/rest/v2/name/${searchInput}`;
  if (searchInput.length > 1) {
    dataProcessing();
  }
}
function handlerCountryChoice({ target }) {
  if (
    target.className === liCountrie ||
    target.className === ulCounrtie ||
    target === divContainer
  ) {
    return;
  }
  const countri = refs.dataCountries.find(
    item => item.name === target.textContent
  );
  showCoutrie({ countri });
}

const getRestCountries = async () => {
  try {
    const response = await fetch(refs.url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const dataProcessing = async () => {
  try {
    refs.dataCountries = await getRestCountries();
    const countries = refs.dataCountries.map(item => item.name);
    if (refs.dataCountries.length > 1 && refs.dataCountries.length <= 10) {
      showLiCoutries(countries);
      if (refs.flag) {
        notyf.success("Select your country from the list.");
        refs.flag = false;
      }
    } else if (refs.dataCountries.length === 1) {
      showCoutrie(refs.dataCountries);
    } else {
      clearListCountries();
      notyf.warning("Too many matches found. Please enter more characters!");
    }
  } catch (error) {
    clearListCountries();
    notyf.error("No country with such name");
  }
};
//отрисовка динамического списка стран
const showLiCoutries = countries => {
  divContainer.innerHTML = `${liCountries({ countries })}`;
  divContainer.addEventListener("click", handlerCountryChoice);
};
//отрисовка карточки страны
const showCoutrie = todo => {
  divContainer.innerHTML = `${cartCountries(todo)}`;
  divContainer.removeEventListener("click", handlerCountryChoice);
};
//очистка списка и изминение флага на срабатывание notyf.success
const clearListCountries = () => {
  divContainer.innerHTML = "";
  refs.flag = true;
};
