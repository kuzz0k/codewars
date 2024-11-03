let str = 'abcde';

if (str.length % 2 === 1) {
    str += '_';
}
let out = [];
for(let i = 0; i < str.length/2;i++) {
    out.push(str[i*2]+str[i*2+1])
}

console.log(out);
