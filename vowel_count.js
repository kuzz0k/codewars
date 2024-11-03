let str = 'abracadabra';
console.log(str.split('').filter((value) => ['a', 'o', 'u', 'i', 'e'].includes(value)).length);