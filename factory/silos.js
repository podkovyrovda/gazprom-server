const Indicator = require('./indicator.js');

module.exports = class Silos {
  constructor(quantity) {
    this._quantity = quantity;
    this._data = [];

    this.generate();
  }

  generate() {
    for (let i = 1; i <= this._quantity; i++) {
      const indicator = new Indicator(i);
      this._data.push(indicator);
    }
  }

  get data() {
    return this._data;
  }
};
