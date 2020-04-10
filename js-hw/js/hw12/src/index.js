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
  duration: 3000
});

const refs = {
  inputCountry: document.querySelector(".input"),
  divContainer: document.querySelector(".container"),
  url: `https://restcountries.eu/rest/v2/all`
};
const { inputCountry, divContainer } = refs;
divContainer.addEventListener("click", handlerCountryChoice);
inputCountry.addEventListener("input", debounce(handleInputSearch, 500));
function handleInputSearch(e) {
  if (e.data === undefined || e.target.value.length < 2) {
    clearListCountries();
    return;
  }
  const searchInput = e.target.value;
  refs.url = `https://restcountries.eu/rest/v2/name/${searchInput}`;
  if (searchInput.length > 1) {
    dataProcessing();
  }
}
function handlerCountryChoice({ target }) {
  refs.url = `https://restcountries.eu/rest/v2/name/${target.textContent}`;
  dataProcessing();
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
    const data = await getRestCountries();
    const countries = data.map(item => item.name);
    if (data.length > 1 && data.length <= 10) {
      showLiCoutries(countries);
      notyf.success("Выберите из списка нужную страну ");
    } else if (data.length === 1) {
      showCoutrie(data);
    } else {
      clearListCountries();
      notyf.warning("Под ваш запрос подходит больше 10 стран");
    }
  } catch (error) {
    notyf.error("Такой страны нет");
  }
};
//отрисовка динамического списка стран
const showLiCoutries = countries => {
  divContainer.innerHTML = `${liCountries({ countries })}`;
};
//отрисовка карточки страны
const showCoutrie = todo => (divContainer.innerHTML = `${cartCountries(todo)}`);
//очистка списка
const clearListCountries = () => (divContainer.innerHTML = "");
