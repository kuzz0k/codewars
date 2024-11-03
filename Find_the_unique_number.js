let list = [ 0, 0, 0.55, 0, 0 ];
let num = [...new Set(list)];

//...new распаковывает list 

console.log(num);

if(list[0]===list[1] || list[0]===list[2]){
    console.log(num[1]);
} else {
    console.log(num[0]);
}