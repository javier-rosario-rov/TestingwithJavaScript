const { sum, multiply, divide, average } = require('./02-math');

test("adds 5 + 5 should be 10", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});

test("adds 5 + -5 should be 0", () => {
  const result = sum(5, -5);
  expect(result).toBe(0);
});

test("multiply 5 * 10 should be 500", () => {
  const result = multiply(5, 10);
  expect(result).toBe(50);
});

test("multiply 5 * 0 should be 0", () => {
  const result = multiply(5, 0);
  expect(result).toBe(0);
});

test("divide 10 / 5 should be 2", ()=> {
const result = divide (10,5);
expect(result).toBe(2);
});

test("divide 5 / 0 should null", ()=>{
const result = divide(5,0);
expect(result).toBeNull();

});

test("average 6, 8 y 1 should be 5", ()=> {
 const result = average(6,8,1);
 expect(result).toBe(5);

});






