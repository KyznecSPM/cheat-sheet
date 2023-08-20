function factorialIter(num) {
  let total = 1
  for (let i = num; i > 1; i -= 1) {
    total *= i
  }
  return total
}

function factorialRecursive(num) {
  if (num === 1) {
    return 1
  }
  return num * factorialRecursive(num - 1)
}
