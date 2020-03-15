class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs(car) {
    console.log("car: ", car);
    console.log(
      `maxSpeed: ${car._maxSpeed} км/ч, speed: ${car._speed} км/ч, isOn: ${car._isOn}, distance: ${car._distance} км,  price: ${car._price} тыс.$`
    );
  }
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */

  constructor({ maxSpeed, speed = 0, isOn, distance = 0, price }) {
    (this._maxSpeed = maxSpeed),
      (this._speed = speed),
      (this._isOn = isOn),
      (this._distance = distance),
      (this._price = price);
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this._isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    this._speed =
      this._maxSpeed > this._speed + value
        ? this._speed + value
        : this._maxSpeed;
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    this._speed = this._speed - value >= 0 ? this._speed - value : 0;
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    this._distance = this._isOn
      ? hours * this._speed + this._distance
      : this._distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);
mustang.accelerate(20);
console.log(mustang);
mustang.accelerate(190);
console.log(mustang);
mustang.decelerate(280);
console.log(mustang);
mustang.decelerate(41);
console.log(mustang);
mustang.turnOn();
mustang.drive(10);
console.log(mustang);
mustang.turnOff();
mustang.drive(10);
console.log(mustang);
Car.getSpecs(mustang);
