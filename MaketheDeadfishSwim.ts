let str3: string = "iiisxxxdoso";
let output: number[] = [];
let result: number = 0;

let correctlist:string[] = str3.split('').filter(i => ['i', 's', 'd', 'o'].includes(i))
console.log(correctlist)
for(let i: number = 0; i < correctlist.length; i++) {
  if(correctlist[i] === 'i') {
    result += 1
  } else if (correctlist[i] === 'd') {
    result -= 1
  } else if (correctlist[i] === 'o') {
    output.push(result)
  } else {
    result *= result
  }
}

console.log(output)