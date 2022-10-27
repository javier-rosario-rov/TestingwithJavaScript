// matchers
test('test object', () => {
  const data = { name: 'Javier' };
  data.lastname = 'Rosario';
  expect(data).toEqual({ name: 'Javier', lastname: 'Rosario' });
});
// For null data
test('For null values', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('For booleans values', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});
test('For strings', () => {
  expect('Imagination').toMatch(/Ima/);
  expect('Imagination').toMatch(/tion/);
});
test('For list and arrays', () => {
  const family = ['mom', 'dad', 'son', 'daughter'];
  expect(family).toContain('dad');
  const numb = [10, 20, 30, 40, 50];
  expect(numb).toContain(30);
});
// the most used are .toEqual and .toBe and in some cases we used .toBeFalsy
