function swap(arr, indx1, indx2) {
  let temp = arr[indx1]
  arr[indx1] = arr[indx2]
  arr[indx2] = temp
}

function bubbleSort(arr) {
  // первый цикл движется в обратную сторону
  // чтобы отбрасывать последний элемент как отсортированный

  for (let i = arr.length; i > 0; i -= 1) {
    for (let j = 0; j < i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }

  return arr
}

function bubbleSortOptimizer(arr) {
  let noSwaps

  for (let i = arr.length; i > 0; i -= 1) {
    noSwaps = true
    for (let j = 0; j < i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }

  return arr
}
