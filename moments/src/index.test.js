const { sum } = require('./index.js')

test('properly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})