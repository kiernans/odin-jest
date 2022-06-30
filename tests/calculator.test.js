const Calculator = require('../code/calculator');

const calculator = Calculator();

test('1+1', () => {
    expect(calculator.add(1,1)).toBe(2);
});

test('2-4', () => {
    expect(calculator.subtract(2,4)).toBe(-2);
});

test('3*3', () => {
    expect(calculator.multiply(3,3)).toBe(9);
});

test('22/2', () => {
    expect(calculator.divide(22,2)).toBe(11);
});