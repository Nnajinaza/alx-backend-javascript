export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== "function") {
        throw new Error(
          "Class extending Building must override evacuationWarningMessage"
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }
  set sqft(sqft) {
    this._sqft = sqft;
  }
  //   evacuationWarningMessage() {
  //     throw new Error(
  //       'Class extending Building must override evacuationWarningMessage'
  //     );
  //   }
}