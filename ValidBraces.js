function validBraces(braces) {
  let arr = []

  const openBraces = ["[", "(", "{"]
  const closeBraces = ["]", ")", "}"]
  const book = {
    "[": "]",
    "(": ")",
    "{": "}",
  }
  braces.split("").forEach((i) => {
    if (openBraces.includes(i)) {
      arr.push(i)
    } else if (closeBraces.includes(i)) {
      console.log(arr[arr.length - 1])
      if (book[arr[arr.length - 1]] == i) {
        arr.pop()
      } else {
        return arr.push(0)
      }
    }
  })
  return arr.length == 0 ? true : false
}

console.log(validBraces("()))"))
// console.log(validBraces("([{}])"))
// console.log(validBraces("(}"))
// console.log(validBraces("[(])"))
// console.log(validBraces("[({})](]"))
