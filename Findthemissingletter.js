let list = ['b', 'c', 'e', 'f', 'g']

let new_list = list.map(i => i.toLocaleLowerCase())
const key = 'abcdefghijklmnopqrstuvwxyz'.split('')
let new_key = key.map(char => {
  if (new_list.includes(char)) {
    return char
  } else {
    return '*'
  }
})
for(let i = 1; i<new_key.length;i++) {
  if(new_key[i] === '*' && new_key[i-1] !== '*' && new_key[i+1] !== '*') {
    if(list[0]===new_list[0]){
      console.log(key[i])
    } else {
      console.log(key[i].toUpperCase())
    }
  }
}