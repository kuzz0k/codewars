const xs: number[] = [1,2,2,3,3,3,4,3,3,3,2,2,1];
const nums: number[] = [...new Set(xs)];
let total: number = 0;
nums.forEach((num: number) => {
    if (xs.filter((i:number) => num===i).length % 2 ===1) {
        total = num;
    }
});
console.log(total)



//использует XOR, ПОБИТНЫЙ оператор исключающего ИЛИ
//XOR ищет числа, которые встречаются нечетное количество раз
console.log(xs.reduce( (a,b)=> a^b))