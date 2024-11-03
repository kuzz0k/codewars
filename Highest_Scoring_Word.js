let str = 'man i need a taxi up to ubud'.split(' ');
let key = 'abcdefghijklmnopqrstuvwxyz'.split('');
let count = 0;
let word = '';
str.forEach(value => {
    let len = 0;
    value.split('').forEach(element => {
        len+=key.indexOf(element)+1;
    });
    if(len>count){
        count=len;
        word=value;
    }
});
console.log(word, count)