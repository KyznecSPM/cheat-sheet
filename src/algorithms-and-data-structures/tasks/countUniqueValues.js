// на входе может быть НЕ отсортированный массив

function countUniqueValuesUnSort(arr) {
  const uniq = {}
  for (let val of arr) {
    if (!uniq[val]) {
      uniq[val] = true
    }
  }
  return Object.keys(uniq).length
}

// на входе должен быть отсортированный массив

// [1,1,1,2,2,3,4,5,6]

function countUniqueValuesSort(arr) {
  var i = 0
  for (var j = 1; j < arr.length; j += 1) {
    if (arr[i] !== arr[j]) {
      i += 1
      arr[i] = arr[j]
    }
  }
  return i + 1
}
