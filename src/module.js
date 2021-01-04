import { addOne } from './submodule.js'

const sum = (a, b) => a + b

try { module.exports = sum } catch { }
