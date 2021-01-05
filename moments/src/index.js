// index.js
var moment = require('moment');

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());

const sum = (a, b) => a + b
window.sum = sum

console.log(sum(3, 2))

module.exports = { sum }
