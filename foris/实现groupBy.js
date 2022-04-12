// group 起来并且加上count
const list = [
  { brand: "apple" },
  { brand: "apple" },
  { brand: "huawei" },
  { brand: "huawei" },
  { brand: "huawei" },
  { brand: "oppo" },
];

function groupBy(list) {
  const hashMapper = {};
  return list.reduce((a, b) => {
    if (hashMapper.hasOwnerProperty(b.brand)) {
      a[hashMapper[b.brand]].count++;
    } else {
      hashMapper[b.brand] = a.length;
      a.push(Object.assign(b, { count: 1 }));
    }
  }, []);
}
