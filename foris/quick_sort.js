function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function _quickSort(arr, l, r) {
  let originl = l;
  let originr = r;
  let pivot = arr[l];
  if (l > r) {
    return [];
  }
  if (l == r) {
    return [arr[l]];
  }

  while (l < r) {
    while (l < r && arr[r] >= pivot) {
      r--;
    }
    while (l < r && arr[l] <= pivot) {
      l++;
    }
    if (l < r) {
      swap(arr, l, r);
    }
  }
  // 退出后 交换初始位置
  swap(arr, originl, l);

  return [
    ..._quickSort(arr, originl, l - 1),
    pivot,
    ..._quickSort(arr, l + 1, originr),
  ];
}

function quickSort(arr) {
  return _quickSort(arr, 0, arr.length - 1);
}

console.log(quickSort([3, 2, 1, 5, 6, 4]));
console.log(quickSort([3, 2, 3, 1, 2, 4, 5, 5, 6]));
