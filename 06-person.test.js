const Person = require('./06-person');

describe('Test for 1.75 m tall', () => {
  let person;
  beforeEach(() => {
    person = new Person('Samuel J.', 0, 1.75);
  });
  // for each test case we would be creating a new object
  test('shoul return down', () => {
    person.weight = 40;
    // person.height = 1.75;
    // the test passes when the height is included in the test and left at 0 in the original object
    const imc = person.calcIndMas();
    expect(imc).toBe('down');
  });
  test('should return normal', () => {
    person.weight = 66.5;
    const imc = person.calcIndMas();
    expect(imc).toBe('normal');
  });
  test('should return overweight', () => {
    person.weight = 76;
    const imc = person.calcIndMas();
    expect(imc).toBe('overweight');
  });
});
