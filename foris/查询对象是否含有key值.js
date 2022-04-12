// 查询对象是否含有key值  key可能为a.b这种形式
const hasKey = (obj, key) => {
  return !!key.split(".").reduce((a, b) => {
    if (a && Object.hasOwnProperty.call(a, b)) {
      return a[b];
    }
    return false;
  }, obj);
};

const testObj = {
  a: {
    b: 1,
    eee: {
      ff: 2,
    },
  },
  d: 33,
};
console.log(hasKey(testObj, "a"));
console.log(hasKey(testObj, "b"));
console.log(hasKey(testObj, "c"));
console.log(hasKey(testObj, "a.b"));
console.log(hasKey(testObj, "a.bb"));
console.log(hasKey(testObj, "a.eee"));
console.log(hasKey(testObj, "a.eee.ff"));
console.log(hasKey(testObj, "a.d"));
console.log(hasKey(testObj, "a.ddd"));
