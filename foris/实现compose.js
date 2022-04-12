const assert = require("assert");
const fn1 = (val) => val + 1;
const fn2 = (val) => val + 2;
const fn3 = (val) => val * 3;

function compose() {
  const fns = Array.prototype.slice.call(arguments);
  return (val) => fns.reduce((a, b) => b(a), val);
}

assert.equal(compose(fn1, fn2, fn3)(3), 18);
assert.equal(compose(fn1, fn2)(1), 4);
assert.equal(compose(fn3, fn2)(5), 17);
