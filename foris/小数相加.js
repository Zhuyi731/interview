// 假设是数字相加
function floatSum(a, b) {
  // 整数部分
  let [intergerA, floatA] = a.split(".");
  let [intergerB, floatB] = b.split(".");

  // 补齐整数位数
  if (floatA.length > floatB.length) {
    floatB += new Array(floatA.length - floatB.length).fill("0").join("");
  } else {
    floatA += new Array(floatB.length - floatA.length).fill("0").join("");
  }

  let resultFloat = [];
  for (let i = 0; i < floatA.length; i++) {
    resultFloat[i] = ~~floatA[i] + ~~floatB[i];
  }
  resultFloat.reverse().push(0);
  for (let i = 0; i < resultFloat.length; i++) {
    if (resultFloat[i] > 10) {
      resultFloat[i + 1] += 1;
      resultFloat[i] %= 10;
    }
  }

  // 补齐整数位数
  if (intergerA.length < intergerB.length) {
    intergerA =
      new Array(intergerB.length - intergetA.length).fill("0").join("") +
      intergerA;
  } else {
    intergerB =
      new Array(intergerA.length - intergerB.length).fill("0") + intergerB;
  }

  let resultInterger = [];
  for (let i = 0; i < intergerA.length; i++) {
    resultInterger[i] = ~~intergerA[i] + ~~intergerB[i];
  }
  resultInterger.reverse().push(0);
  if (resultFloat[resultFloat.length-1] !== 0) {
    // 小数需要进位
    resultInterger[0] += 1;
  }
  resultFloat.pop();
  resultFloat = resultFloat.reverse().join("");
  // 处理进位
  for (let i = 0; i < resultInterger.length; i++) {
    if (resultInterger[i] >= 10) {
      resultInterger[i + 1] += 1;
      resultInterger[i] = resultInterger[i] % 10;
    }
  }

  resultInterger = resultInterger.reverse().join("");
  return `${resultInterger}.${resultFloat}`;
}


console.log(floatSum("987654321.321", "236156789.1235678"));
console.log(floatSum("123.321", "999.897"));
