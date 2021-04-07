// вспомогательная функция, мемоизирующая(запоминающая) аргументы вызываемой функции,
// что позволяет не вычислять заного функцию с повторяющимися аргументами
// однако приходится

function memoize(fn) {
  const cache = {}
  return (...args) => {
    const params = [...args]
    console.log(params)
    if (cache[params]) {
      console.log('cached')
      return cache[params]
    } else {
      let result = fn(...args)
      cache[params] = result
      console.log('not cached')
      return result
    }
  }
}
const makeFullName = (fName, lName) => `${fName} ${lName}`
const reduceAdd = (numbers, startValue = 0) => numbers.reduce((total, cur) => total + cur, startValue)

const memoizedFullName = memoize(makeFullName)
const memoizeReduceAdd = memoize(reduceAdd)

memoizedFullName('Marko', 'Polo')
memoizedFullName('Marko', 'Polo') // не выполнится

memoizeReduceAdd([1, 2, 3, 4], 5)
memoizeReduceAdd([1, 2, 3, 4], 5) // не выполнится
