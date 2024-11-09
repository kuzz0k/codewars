let n: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let str1: string = `(${n.slice(0,3).join('')}) ${n.slice(3,6).join('')}-${n.slice(-4).join('')}`;
console.log(str1)