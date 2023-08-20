function power(base, exponent) {
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}

function factorial(x) {
  if (x < 0) return 0
  if (x <= 1) return 1
  return x * factorial(x - 1)
}

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1
  }
  return arr[0] * productOfArray(arr.slice(1))
}

function recursiveRange(x) {
  if (x === 0) return 0
  return x + recursiveRange(x - 1)
}

function fib(n) {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()]
  }
  let res = capitalizeWords(array.slice(0, -1))
  res.push(array.slice(array.length - 1)[0].toUpperCase())
  return res
}

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key])
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key]
    }
  }
  return sum
}

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)]
  }
  const res = capitalizeFirst(array.slice(0, -1))
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1)
  res.push(string)
  return res
}

function stringifyNumbers(obj) {
  var newObj = {}
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString()
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

function collectStringsRecursion(obj) {
  var stringsArr = []

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === 'string') {
        stringsArr.push(o[key])
      } else if (typeof o[key] === 'object') {
        return gatherStrings(o[key])
      }
    }
  }

  gatherStrings(obj)

  return stringsArr
}

function collectStrings(obj) {
  var stringsArr = []
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key])
    } else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]))
    }
  }

  return stringsArr
}
