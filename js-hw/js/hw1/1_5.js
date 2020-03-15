/*
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.
Ниже приведен список стран и стоимость доставки.
    Китай - 100 кредитов
    Чили - 250 кредитов
    Австралия - 170 кредитов
    Индия - 80 кредитов
    Ямайка - 120 кредитов
*/
const PRINT_COUNTRY =
  "Напишите название страны в которую нужно доставить товар";
const CANCEL_BY_USER = "Отменено пользователем!";
const NOT_DELIVERY = "В вашей стране доставка не доступна";
const CNINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
const SOUTH_AMERICA = "Южная америка";

let message = prompt(PRINT_COUNTRY);
let priсe = 0;
let countryName;

if (message === null) {
  message = CANCEL_BY_USER;
} else {
  countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();

  switch (countryName) {
    case CNINA:
      priсe = 100;
      break;

    case SOUTH_AMERICA:
      priсe = 250;
      break;

    case AUSTRALIA:
      priсe = 170;
      break;

    case INDIA:
      priсe = 80;
      break;
    case JAMAICA:
      priсe = 120;
      break;
    default:
      message = NOT_DELIVERY;
  }
}

if (priсe > 0) {
  const PRICE_DELIVERY = `Доставка в ${countryName} будет стоить ${priсe} кредитов`;
  message = PRICE_DELIVERY;
}
alert(message);
