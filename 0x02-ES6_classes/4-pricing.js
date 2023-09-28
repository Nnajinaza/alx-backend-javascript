// const Currency = require("./3-currency");
import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get newAmount() {
    return this._amount;
  }
  set newAmount(newAmount) {
    if (typeof newAmount !== "number") {
      throw new Error("Amount must be a number");
    }
        this._amount = newAmount;
  }
  get currency() {
    return this._currency;
  }
  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    }
  }

  displayFullPrice() {
    const { currencyName, newCode } = this._currency;
    return `${this._amount} ${currencyName} (${newCode})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== "number" || typeof conversionRate !== "number") {
      throw new Error("Amount and conversionRate must be numbers");
    }
    return amount * conversionRate;
  }
}
