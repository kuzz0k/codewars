const n = 10
let sum = 0
for(let i = 1; i <= n; i++) {
  i<10 ?
    sum += i
  :
    i.toString().split('').forEach(k => sum+=parseInt(k))
}

console.log(sum)