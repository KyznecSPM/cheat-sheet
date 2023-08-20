/*

Принимает два массива. 
Ф-я должно возвращать true если каждое значение массива
имеет соответствующее квадратное значение 
во втором массиве.

сложность O(n)

три цикла подряд, без вложенных циклов O(n^2)
*/

function sameFnc(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  const counter1 = {}
  const counter2 = {}

  // {1: 1, 2: 1, 3: 2}

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1
  }

  // {1: 1, 2: 1, 3: 2}

  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1
  }

  for (let key in counter1) {
    // есть ли во втором объекте ключ первого объекта в квадрате
    if (!(key ** 2 in counter2)) {
      return false
    }
    // совпадает ли кол-во вхождений
    if (counter2[key ** 2] !== counter1[key]) {
      return false
    }
  }

  return true
}
