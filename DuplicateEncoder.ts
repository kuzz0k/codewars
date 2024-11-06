let str: string[] = "Success".toLocaleLowerCase().split('');
let c: string[] = str.map(char => {
    if(str.filter(item => item === char).length > 1) {
        return ')';
    } else {
        return '(';
    }
});
console.log(c.join(''))