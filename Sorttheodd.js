let a = [ 16, -45, -2, -1, -38, 12, -9, 14, 34, -18 ]
let oddlist = a.filter(n => n%2).sort((a, b) => a - b)
// let i = 0
// for(let b = 0; b<a.length; b++){
//   if(Math.abs(a[b])%2===1){
//     a[b]=oddlist[i]
//     i++
//     console.log(a[b])
//   }
// }
// console.log(a)
console.log(a.map(x => {
  if(x%2){
    return oddlist.shift()
  } else {
    return x
  }
}))