class Person {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }

  calcIndMas() {
    const result = Math.round(this.weight / (this.height * this.height));
    if (result < 0) {
      return 'no found';
    }
    if (result >= 0 && result < 18) {
      return 'down';
    }
    if (result >= 18 && result <= 24) {
      return 'normal';
    }
    if (result >= 25 && result <= 26) {
      return 'overweight';
    }
    if (result >= 27 && result <= 29) {
      return 'overweight LEVEL 1';
    }
    if (result >= 30 && result >= 39) {
      return 'overweight LEVEL 2';
    }
    if (result >= 40) {
      return 'overweight LEVEL 3';
    }
    return 'not found';
  }
}
module.exports = Person;
