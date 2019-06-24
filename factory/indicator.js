module.exports = class Indicator {
  constructor(id) {
    this.id = id;
    this.title = `Уровень карналита в силосной башне №${this.id}`;
    this.minValue = Math.floor((Math.random() * 1000));
    this.maxValue = Math.floor((Math.random() + 0.5) * 2000);
    this.value = Math.floor(Math.random() * (this.maxValue * 0.9 + 1));
  }

  changeValue() {
    this.value = Math.floor(Math.random() * (this.maxValue * 0.9 + 1));
  }

};
