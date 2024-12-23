let list = [12,13,14]

list = replace(list).sort((a, b) => a - b)
console.log(replace(list))
function replace(list) {
  return list.map(n => {
    return parseInt(
      n.toString().split('').map(i => {
        if(i==3) {
          return '7'
        } else if(i==7) {
          return '3'
        } else {
          return i
        }
      }).join('')
    )
  })
}




