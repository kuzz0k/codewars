let input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
console.log(input.map(value => {
    if (value[0]>54 && value[1]>7) {
        return "Senior";
    } else {
        return "Open";
    }
}))