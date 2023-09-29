export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
  get newCode() {
    return this._code;
  }
  set newCode(newCode) {
    if (typeof code !== "string") {
      throw new Error("Code must be a string");
    }

    this._code = newCode;
  }

  get currencyName() {
    return this._name;
  }
  set currencyName(currencyName) {
    if (typeof currencyName !== "string") {
      throw new Error("Name must be a string");
    }

    this._name = currencyName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
