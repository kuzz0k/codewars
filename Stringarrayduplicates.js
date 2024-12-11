let list = ["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]
let newlist = list.map(word => {
  word = word.split('')
  for(let i = 0; i<word.length; i++) {
    let k = 1
    while(true){
      if(word[i]===word[i+k]){
        word[i+k]='*'
        k+=1
      } else {
        break
      }
    }
  }
  return word.filter(b => b!=='*').join('')
})
console.log(newlist)