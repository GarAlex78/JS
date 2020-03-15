// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get getValue() {
    return this._value;
  }
  append(str) {
    this._value = this._value + str;
    return this;
  }
  prepend(str) {
    this._value = str + this._value;
    return this;
  }
  pad(str) {
    this.append(str).prepend(str);
    // this.append(str);
    // this.prepend(str);
  }
}
const builder = new StringBuilder(".");
// console.log(builder);
builder.append("^");
// console.log(builder.getValue); // '.^'

builder.prepend("^");
// console.log(builder.getValue); // '^.^'

builder.pad("=");
console.log(builder);
//console.log(builder.getValue); // '=^.^='
