const capitalize = require('../code/capital');

test('Capitalize string', () => {
    expect(capitalize('string')).toBe('String');
});

test('Capitalize single character', () => {
    expect(capitalize('c')).toBe('C');
});

test('Empty string', () => {
    expect(capitalize('')).toBe('');
});