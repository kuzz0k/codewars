let num2: number = 942
while ( num2 > 10) {
    let num2s: number = 0;
    num2.toString().split('').forEach(i => {
        num2s += parseInt(i)
    })
    num2 = num2s
}
console.log(num2)