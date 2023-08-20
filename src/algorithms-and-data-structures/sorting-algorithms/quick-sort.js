function swap(arr, indx1, indx2) {
  let temp = arr[indx1]
  arr[indx1] = arr[indx2]
  arr[indx2] = temp
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3])
