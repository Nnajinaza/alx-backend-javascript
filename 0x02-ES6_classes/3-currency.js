export default class Currency {
  constructor(code, name) {
    if (typeof code !== "string" || typeof name !== "string") {
      throw new Error("Attribute must be a string");
    }

    this._code = code;
    this._name = name;
  }
  get newCode() {
    return this._code;
  }
  set newCode(newCode) {
    this._code = newCode;
  }

  get currencyName() {
    return this._name;
  }
  set currencyName(currencyName) {
    this._name = currencyName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
