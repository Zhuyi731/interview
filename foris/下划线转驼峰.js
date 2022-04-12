function underLine2camalCase(str) {
  return str.replace(/_(\w)/g, (match) => {
    return match ? match[1].toUpperCase() : "";
  });
}

// 驼峰转下划线
const camelCase2underline = (str) =>
  str.replace(/[A-Z]/g, (match) => {
    return `_${match.toLowerCase()}`;
  });

console.log(camelCase2underline("testFunction123"));
