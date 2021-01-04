const addOne = require('./submodule.js')

const sum = (a, b) => a + addOne(b)

try { module.exports = sum } catch { }
