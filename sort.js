function quickSort(arr) {

  pickPivot(0, arr.length - 1);

  function pickPivot(left, right) {
    if (left >= right) return;
    var pivot = Math.ceil((left + right) / 2);
    var newPivot = partition(pivot, left, right);
    pickPivot(left, newPivot - 1);
    pickPivot(newPivot + 1, right);
  }

  function partition(pivot, left, right) {
    var storeIndex = left;
    var pivotValue = arr[pivot];
    swap(arr, pivot, right);
    for (var i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, storeIndex++);
      }
    }
    swap(arr, right, storeIndex);
    return storeIndex;
  }

  return arr;

}

function mergeSort(arr) {

  return split(arr);

  function split(subArr) {
    if (subArr.length < 2) return subArr;
    var mid = Math.floor(subArr.length / 2);
    return merge(split(subArr.slice(0, mid)), split(subArr.slice(mid)));
  }

  function merge(left, right) {
    var merged = [];
    var ind1 = 0, ind2 = 0;
    while (left[ind1] !== undefined || right[ind2] !== undefined) {
      if (left[ind1] < right[ind2])
        merged.push(left[ind1++]);
      else if (left[ind1] >= right[ind2])
        merged.push(right[ind2++]);
      else
        merged.push(left[ind1++] || right[ind2++]);
    }
    return merged;
  }

}


function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j, --j);
    }
  }
  return arr;
}

function bubbleSort(array) {
  var end = array.length - 1;
  var madeSwap;
  do {
    madeSwap = false;
    for (var i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        madeSwap = true;
      }
    }
  } while (end-- && madeSwap);
  return array;
}


function swap(arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}


module.exports = { mergeSort, quickSort, bubbleSort, insertionSort };
