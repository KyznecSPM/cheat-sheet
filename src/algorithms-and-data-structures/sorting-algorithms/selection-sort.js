// за проход находим наименьшее значение
// и перемещаем в начало

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] = temp
  }

  return arr
}

console.log(selectionSort([34, 22, 10, 19, 17]))
