let str2list:string[] = "Hey fellow warriors".split(' ')
console.log(str2list.map((word:string) => word.length>4 ? word.split('').reverse().join('') : word).join(' '))