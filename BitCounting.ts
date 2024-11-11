let num1: number = 1234

let bitnum: string = ''
while(num1>0) {
    bitnum += (num1%2).toString()
    num1 = Math.floor(num1/2)
}

console.log(bitnum.split('').filter(i => i!=='0').length)
// console.log(num1.toString(2).split('').filter(i => i!=='0').length)

// console.log(num1.toString(2).replace(/0/g, '').length)