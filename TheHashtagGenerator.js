let str = "code       wars";
//console.log(str.split('').filter(i => i!=' ')!=0 && str.split('').filter(i => i!=' ').length<140 ? '#' + str.split(' ').filter(i => i!='').map(value => {let b = value.split('');b[0] = b[0].toUpperCase();return b.join('');}).join('') : false)





let str1 = str.split(' ').filter(i => i!='');
let str2 = str1.map(value => {
    let b = value.split('');
    b[0] = b[0].toUpperCase();
    return b.join('');
});
let result = str.split('').filter(i => i!=' ')!=0 
&& str.split('').filter(i => i!=' ').length<140 
? '#' + str2.join('') : false;
console.log(result)