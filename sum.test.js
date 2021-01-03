"use strict";

const requireEms = require('esm')(module);
const sum = requireEms('./sum.js')

test('properly adds two numbers', () => {
    expect(sum.sum(1, 2)).toBe(3)
})