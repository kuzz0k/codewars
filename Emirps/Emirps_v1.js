let n = 50;
// let array = [];
// for(let i = 2; i<n;i++){
//     let fun = true;
//     for(let k = 2;k < i;k++){
//         if (i%k==0){
//             fun = false;
//             break;
//         }
//     }
//     if(fun){
//         array.push(i);
//     }
// }


const primes = new Array(n + 1).fill(true);
primes[0] = primes[1] = false;

console.log(primes)

for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
        for (let j = i * i; j <= n; j += i) {
            primes[j] = false;
        }
    }
}

const array = [];
for (let i = 2; i <= n; i++) {
    if (primes[i]) {
        array.push(i);
    }
}




for (let i = array.length - 1; i >= 0; i--) {
    let value = array[i];
    let reversed = parseInt(value.toString().split('').reverse().join(''));
    let isPrime = true;
    if(array[i].toString().length === 1 || array[i].toString().split('').reverse().join('') == array[i].toString()){
        array.splice(i, 1);
    }
    for (let k = 2; k < reversed; k++) {
        if (reversed % k === 0) {
            isPrime = false;
            break;
        }
    }

    if (!isPrime) {
        array.splice(i, 1);
    }
}
let count = 0;
let maxnum = 0;
array.forEach((value) => {
    count += value;
    if (value>maxnum){
        maxnum=value;
    }
})
console.log(array.length, maxnum, count)