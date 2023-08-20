// принимает строку и возвращает количество символов в строке

function charCount(str) {
  var obj = {}

  for (var char of str) {
    if (/[a-z0-9]/.test(char.toLowerCase())) {
      if (obj[char] > 0) {
        obj[char] += 1
      } else {
        obj[char] = 1
      }
    }
  }
  return obj
}

// O(n)
