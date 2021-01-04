var addOne = require('./submodule.js');

var sum = function sum(a, b) {
  return a + addOne(b);
};

try {
  module.exports = sum;
} catch (_unused) {}
//# sourceMappingURL=module.esm.js.map
