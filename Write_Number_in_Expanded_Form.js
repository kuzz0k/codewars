let n = 98762300;
let result = [];
let out = '';
let b = 1;
let a = n.toString().split('')
for(let i = a.length - 1; i>=0;i--){
    result.push(parseInt(a[i])*b);
    b*=10;
}
result = result.reverse();
for(let i = result.length; i>=0;i--){
    if (result[i]===0) {
        result.splice(i, 1);
    }
}
console.log(result.join(' + '));
