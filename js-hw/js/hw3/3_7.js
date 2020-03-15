// /*Напиши скрипт управления личным кабинетом интернет банка. Есть объект 'account' в котором необходимо реализовать методы для работы с балансом и историей транзакций.
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw"
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length,
      type,
      amount
    };
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const type = Transaction.DEPOSIT;
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, type));
  },

  show(type, amount) {
    console.log("type: ", type + ", amount: ", amount);
    console.log("this.balance: ", this.balance);
    console.log("this.transactions: ", this.transactions);
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const type = Transaction.WITHDRAW;
    if (amount > this.balance) {
      alert("снятие такой суммы не возможно, недостаточно средств");
      return;
    }
    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, type));
  },
  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(idx) {
    for (const key of this.transactions) {
      if (key.id == idx) {
        return key;
      }
    }
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const key of this.transactions) {
      if (key.type == type) {
        sum += key.amount;
      }
    }
    return sum;
  }
};
/*
Проверка
*/

account.deposit(50);
account.deposit(500);
account.withdraw(150);
account.deposit(10);
account.withdraw(100);
console.log("transactions: ", account.transactions);
