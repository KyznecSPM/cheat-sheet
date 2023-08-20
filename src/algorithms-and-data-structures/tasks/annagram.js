/*
Совпадает ли у двух строк количество символов,
порядок не важен.
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  const counter = {}

  for (let char of str1) {
    counter[char] = (counter[char] || 0) + 1
  }

  for (letter of str2) {
    if (!counter[letter]) {
      return false
    } else {
      counter[letter] -= 1
    }
  }

  return true
}

validAnagram('str', 'tsr')
validAnagram('str1', 'tsr2')
