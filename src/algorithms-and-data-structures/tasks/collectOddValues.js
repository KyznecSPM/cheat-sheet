// возвращает нечетные числа из массива

// использует helper метод для рекурсии
function collectOddValues(arr) {
  let result = []

  function helper(input) {
    if (input.length === 0) return

    if (input[0] % 2 !== 0) {
      result.push(input[0])
    }

    helper(input.slice(1))
  }

  helper(arr)

  return result
}

function collectOddValuesV2(arr) {
  let result = []

  if (arr.length === 0) {
    return result
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0])
  }

  return [...result, ...collectOddValues2(arr.slice(1))]
}
