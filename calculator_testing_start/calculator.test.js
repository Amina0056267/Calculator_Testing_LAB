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
    expected = -20;
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
  expect = 5;
  actual = subtract(5, 10)
  expect(actual).toBe(expected);

});

test("should subtract values even when negative", () => {
  expect = -57;
  actual = subtract(-20, -30, -5, -2)
  expect(actual).toBe(expected);

});




describe('multiply', () => {

  test("should multiply all values", () =>{
    expect = 30;
    actual = subtract(2, 3, 5);
    expect(actual).toBe(expected);
    
  });

  test("should multiply all values even negatives", () =>{
    expect = -10;
    actual = subtract(-2, -3, -5);
    expect(actual).toBe(expected);
    

});


describe('divide', () => {

  test("should divide all values", () =>{
    expect = 20;
    actual = subtract(200, 2, 5);
    expect(actual).toBe(expected);
   
  });

  test("should divide all values even negatives", () =>{
    expect = -207;
    actual = subtract(-200, -2, -5);
    expect(actual).toBe(expected);

});


describe('modulus', () => {

  test('modulus with no remainder returns 0', () => {
    expected = 0;
    actual = modulus(10, 5);
    expect(actual).toBe(expected);
  });

  test('modulus with remainder returns remainder', () => {
    expected = 4;
    actual = modulus(10, 6);
    expect(actual).toBe(expected);
  });



describe('even', () => {

  test("All even values should return true", () =>{
    actual = even(12);
    expect(actual).toBeTruthy();
  });

  test('odd number returns false', () => {
    actual = even(3);
    expect(actual).toBeFalsy();
  });



describe('odd', () => {

  test('odd number returns true', () => {
    actual = odd(1);
    expect(actual).toBeTruthy();
  });

  test('even number returns false', () => {
    actual = odd(16);
    expect(actual).toBeFalsy();
  });
});
