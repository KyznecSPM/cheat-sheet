function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let currentVal = arr[i]
    let j = i - 1
    for (j; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

insertionSort([2, 1, 9, 76, 4])
