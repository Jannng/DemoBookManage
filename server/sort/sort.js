let arr = [5, 4, 3, 2, 1];

insertion(arr);
// seletion(arr);
// shell(arr);
// arr = merge_sort(arr);
// quicksort(arr,0,arr.length);

print(arr);

/**
 * 插入排序，将 i 索引的数据放在合适的位置
 * @param {} arr
 */
let insertion = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      exch(arr, j - 1, j);
    }
  }
};

/**
 * 选择排序
 * @param {} arr
 */
let seletion = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        exch(arr, j, min);
      }
    }
  }
};

/**
 * 希尔排序
 * @param {} arr
 */
let shell = function(arr) {
  // 设置步长
  let n = 1;
  while (n < arr.length / 3) n = n * 3 + 1;
  for (n; n > 0; n = Math.floor(n / 3)) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j >= n && arr[j] < arr[j - n]; j -= n) {
        exch(arr, j - n, j);
      }
    }
  }
};

/**
 * 并归排序
 * @param {} arr
 */
function merge_sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var middle = parseInt(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);

  return merge(merge_sort(left), merge_sort(right));
}
function merge(left, right) {
  var result = [];
  var i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      result.push(right[j++]);
    } else {
      result.push(left[i++]);
    }
  }
  while (i < left.length) {
    result.push(left[i++]);
  }
  while (j < right.length) {
    result.push(right[j++]);
  }

  return result;
}

/**
 * 快速排序
 * @param {} arr 
 * @param {*} lo 
 * @param {*} hi 
 */
let quicksort = function(arr, lo, hi) {
  if (lo >= hi) return;
  let j = partition(arr, lo, hi);
  quicksort(arr, lo, j - 1);
  quicksort(arr, j + 1, hi);
};

let partition = function(arr, lo, hi) {
  let i = lo,
    j = hi + 1,
    random = arr[lo];
  while (true) {
    while (arr[++i] < random) if (i == hi) break; // 寻找左边大于 random 的元素
    while (arr[--j] > random) if (j == lo) break; // 寻找右边小于 random 的元素
    if (i >= j) break;
    exch(arr, i, j);
  }
  exch(arr,j,lo);
  return j;
};

/**
 * 打印数组
 * @param {输入数组} arr
 */
let print = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
/**
 * 交换数组两个索引位置上的元素
 * @param {*} arr
 * @param {*} i
 * @param {*} j
 */
let exch = function(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
