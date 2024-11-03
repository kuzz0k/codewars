let array = [160, 3, 1719, 19, 11, 13, -21];
let odd_count = 0;
let even = 0;
array.forEach(value => {
    if (value%2===0) {
        odd_count++;
    } else {
        even = value;
    }
});
if (odd_count === 1) {
    console.log(array.filter((value) => {
        if(value%2===0){
            return true;
        }
    })[0]);
} else {
    console.log(even)
}
