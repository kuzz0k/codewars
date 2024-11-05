// const str: string = "   ";
// let abc: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
// abc = abc.filter(char => {
//     if (str.includes(char)) {
//         return false;
//     } else {
//         return true;
//     }
// });
// console.log(abc)
// if (abc.length>0) {
//     console.log('false');
// } else {
//     console.log('true');
// }


export const isPangram = (phrase: string): boolean => {
    let abc: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    phrase = phrase.toLocaleLowerCase(); //
    abc = abc.filter(char => {
        if (phrase.includes(char)) {
            return false;
        } else {
            return true;
        }
    });
    if (abc.length>0) {
        return false;
    } else {
        return true;
    }
}
console.log(isPangram("otkl qubh aipcgxszrv f ewm"))
