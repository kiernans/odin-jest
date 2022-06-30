const reverseString = require('../code/reverseString');

test('Reverse string', () => {
    expect(reverseString('string')).toBe('gnirts');
});

test('Reverse character', () => {
    expect(reverseString('S')).toBe('S');
});

test('Empty string', () => {
    expect(reverseString('')).toBe('');
});