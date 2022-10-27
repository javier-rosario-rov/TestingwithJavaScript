test('comparing number', () => {
  const sim = 10 + 10;
  expect(sim).toBeGreaterThan(19);
  expect(sim).toBeGreaterThanOrEqual(20);
  expect(sim).toBeLessThan(21);
  expect(sim).toBeLessThanOrEqual(20);
});
test('comparing numbers with decimals', () => {
  const simd = 5.5 + 4.4;
  expect(simd).toBe(9.9);
  expect(simd).toBeCloseTo(9.9);
});
