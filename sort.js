'use strict';

function nativeSort(arr) {
  return arr.sort((a, b) => a - b);
}

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
    var left = split(subArr.slice(0, mid));
    var right = split(subArr.slice(mid));
    return merge(left, right);
  }

  function merge(left, right) {
    var merged = [];
    var ind1 = 0, ind2 = 0;
    while (ind1 in left || ind2 in right) {
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

function bubbleSort(arr) {
  var end = arr.length - 1;
  var madeSwap; // this will keep track of whether a sort was made. We can break early if its already sorted
  do {
    madeSwap = false;
    for (var i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        madeSwap = true;
      }
    }
  } while (end-- && madeSwap);
  return arr;
}

function selectionSort(arr) {
  var minVal, val, minIndex;
  for (var start = 0; start < arr.length - 1; start++) {
    minVal = arr[start];
    minIndex = start;
    for (var i = start; i < arr.length; i++) { // find the index of the minimum value
      val = arr[i];
      if (minVal > val) {
        minVal = val;
        minIndex = i;
      }
    }
    swap(arr, minIndex, start); // place this minimum at the left
  }
  return arr;
}


function heapSort(arr) {

  // build the heap
  var heapSize = arr.length;
  for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
    maxHeap(i);
  }

  function maxHeap(i) {
    var l = 2 * i;
    var r = l + 1;
    var largest;
    if (l < heapSize && arr[l] > arr[i]) {
      largest = l;
    } else {
      largest = i;
    }
    if (r < heapSize && arr[r] > arr[largest]) {
      largest = r;
    }
    if (largest != i) {
      swap(arr, i, largest);
      maxHeap(largest);
    }
  }

  for (i = arr.length - 1; i >= 1; i--) {
    swap(arr, 0, i); // place the max at the end
    heapSize--;      // no longer treat the maximum as part of the heap
    maxHeap(0);
  }
  return arr;
}


function bucketSort(arr) {
  var buckets = [];
  for (var elem of arr) {
    buckets[elem] = buckets[elem] || [];
    buckets[elem].push(elem);
  }
  arr.length = 0; // clear out the array elements
  for (var bucket of buckets) {
    [].push.apply(arr, bucket); // place the contents of the bucket in the array
  }
  return arr;
}


function swap(arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}


module.exports = {
  nativeSort, mergeSort, quickSort,
  heapSort, bucketSort, bubbleSort,
  insertionSort, selectionSort
};
