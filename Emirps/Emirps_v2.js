let n = 50;

const primes = new Array(n + 1).fill(true);
primes[0] = primes[1] = false;

// Решето Эратосфена
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

// Функция для проверки простоты числа (оптимизированная до корня)
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

const result = [];
for (let i = 0; i < array.length; i++) {
    let value = array[i];
    let reversed = parseInt(value.toString().split('').reverse().join(''));

    // Пропускаем числа, если они палиндромы или однозначные
    if (value.toString().length === 1 || value === reversed) continue;

    // Проверяем, является ли перевёрнутое число простым
    if (reversed <= n && primes[reversed] || reversed > n && isPrime(reversed)) {
        result.push(value);
    }
}

// Подсчёт суммы и максимального значения
let count = 0;
let maxnum = 0;
result.forEach((value) => {
    count += value;
    if (value > maxnum) {
        maxnum = value;
    }
});
console.log(result.length, maxnum, count)