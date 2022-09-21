const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 300;
    actual = sum(200, 100);
    expect(actual).toBe(expected);
    
  });

  test('can add two negative numbers', () => {
    expected = -20
    actual = sum(-10, -10);
    expect(actual).toBe(expected)
  });

  test('can add zero', () => {
    expected = 0
    actual = sum(0, 0);
    expect(actual).toBe(expected)
  });

});

describe('subtract', () => {
//2 tests for each
});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
