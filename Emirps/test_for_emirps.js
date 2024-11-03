let n = 16;
let arr = [];
for(let i = 0;i < n; i++){
    arr.push(i);
}

// Создание массива с простыми числами с использованием алгоритма Эратосфена
let isPrime = new Array(n).fill(true); // Изначально считаем все числа простыми
isPrime[0] = isPrime[1] = false; // 0 и 1 не простые

for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false; // Убираем составные числа
        }
    }
}

console.log(isPrime)
console.log(arr)