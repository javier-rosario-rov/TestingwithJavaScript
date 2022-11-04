describe('Set 1.0', () => {
  beforeAll(() => {
    console.log('Before all cases');
    // uses when we need, for ex. to do a set up or up a db before run the Set
  });
  afterAll(() => {
    console.log('After all cases');
    // when the tests end, for ex. down db
  });
  beforeEach(() => {
    console.log('Before each case');
  });
  afterEach(() => {
    console.log('After each case');
  });
  test('Case 1', () => {
    console.log('Case 1');
    expect(10 + 15).toBe(25);
  });
  test('Case 2', () => {
    console.log('Case 2');
    expect(14.999 + 20.002).toBeCloseTo(35);
  });
  describe('Set 2.0', () => {
    beforeAll(() => {
      console.log('Before Set 2.0 Cases');
    });
    test('Case 3', () => {
      console.log('Case 3 - 2.0');
      expect(25 + 30).toBe(55);
    });
    test('Case 4', () => {
      console.log('Case 4 - 2.0');
    });
  });
});
