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

test("should subtract all values", () => {
  expect(calculator.subtract(10, 20, 30, -15)).toBe(45);
})

test("should subtract values even when negative", () => {
  expect(calculator.subtract(-20, -30, -5, -2)).toBe(-57)
})

});

describe('multiply', () => {
  test("should multiply all values", () =>{
    expect(calculator.multipley(2, 3, 5)).toBe(30)
  })

  test("should multiply all values even negatives", () =>{
    expect(calculator.multiply(-2, -3, -5)).toBe(-10)

});

describe('divide', () => {
  test("should divide all values", () =>{
    expect(calculator.divide(200, 2, 5)).toBe(20)
  })

  test("should divide all values even negatives", () =>{
    expect(calculator.divide(-200, -2, -5)).toBe(-207)

});

describe('modulus', () => {
  test("should .... all values", () =>{
    expect(calculator.subtract(2, 3, 5)).toBe()
  })

  test("should .... all values even negatives", () =>{
    expect(calculator.modulus(-2, -3, -5)).toBe(-)

});

describe('even', () => {
  test("All values should be even", () =>{
    expect(calculator.even(2, 4, 6)).toBe()
  })

  test("should multiply all values even negatives", () =>{
    expect(calculator.even(-2, -4, -6)).toBe()

});

describe('odd', () => {

  test("should ..... all values", () =>{
    expect(calculator.odd(1, 3, 5)).toBe()
  })

  test("should .... all values even negatives", () =>{
    expect(calculator.odd(-1, -3, -5)).toBe()

});
