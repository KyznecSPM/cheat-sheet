/*
  Должен вернуть первую пару чисел 
  в массиве сумма которых равно нулю.

  time Complexity O(n)
  space Complexity O(n)
*/

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right -= 1
    } else {
      left += 1
    }
  }
}

console.log(sumZero([-3, -2, 0, 2, 4, 6, 7]))
