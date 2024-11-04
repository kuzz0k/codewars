const num: number = 10;
let sum: number = 0;
for (let i:number = 0; i < 10; i++) {
    if (i%5===0 || i%3===0) {
        sum+=i;
    }
}
console.log(sum);