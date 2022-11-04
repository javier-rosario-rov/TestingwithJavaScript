const Person = require('./06-person');

test('shoul return down', () => {
  const personA = new Person('Sam', 50, 1.72);
  const imc = personA.calcIndMas();
  expect(imc).toBe('down');
});

test('should return normal', () => {
  const personB = new Person('Javier', 66.5, 1.72);
  const imc = personB.calcIndMas();
  expect(imc).toBe('normal');
});
test('should return overweight', () => {
  const personC = new Person('Luan', 76, 1.72);
  const imc = personC.calcIndMas();
  expect(imc).toBe('overweight');
});
