// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone number test for 123-456-7890', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('Phone number test for (123) 456-7890', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Phone number test for 123-456', () => {
    expect(functions.isPhoneNumber('123-456')).toBe(false);
});

test('Phone number test for hello', () => {
    expect(functions.isPhoneNumber('hello')).toBe(false);
});

test('Email test for ejoa@ucsd.edu', () => {
    expect(functions.isEmail('ejoa@ucsd.edu')).toBe(true);
});

test('Email test for ejoa@gmail.com', () => {
    expect(functions.isEmail('ejoa@gmail.com')).toBe(true);
});

test('Email test for hello', () => {
    expect(functions.isEmail('hello')).toBe(false);
});

test('Email test for @gmail.com', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

test('Strong password test for this_password', () => {
    expect(functions.isStrongPassword("this_password")).toBe(true);
});

test('Strong password test for Another_123456', () => {
    expect(functions.isStrongPassword('Another_123456')).toBe(true);
});

test('Strong password test for thispasswordistoolong', () => {
    expect(functions.isStrongPassword('thispasswordistoolong')).toBe(false);
});

test('Strong password test for rej', () => {
    expect(functions.isStrongPassword('rej')).toBe(false);
});

test('Date test for 05/25/2023', () => {
    expect(functions.isDate('05/25/2023')).toBe(true);
});

test('Date test for 5/5/2023', () => {
    expect(functions.isDate('5/5/2023')).toBe(true);
});

test('Date test for 5/25/23', () => {
    expect(functions.isDate('5/25/23')).toBe(false);
});

test('Date test for today', () => {
    expect(functions.isDate('today')).toBe(false);
});

test('Hex color test for aaa', () => {
    expect(functions.isHexColor('aaa')).toBe(true);
});

test('Hex color test for abcabc', () => {
    expect(functions.isHexColor('abcabc')).toBe(true);
});

test('Hex color test for abcd', () => {
    expect(functions.isHexColor('abcd')).toBe(false);
});

test('Hex color test for zzz', () => {
    expect(functions.isHexColor('zzz')).toBe(false);
});