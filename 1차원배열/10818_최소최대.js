let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let newArr = input[1].split(' ');
let numArr = [];
for(let el of newArr) {
    numArr.push(Number(el));
}

let min = numArr[0], max = numArr[0];

for(let el of numArr) {
    if(min > el) {
        min = el;
    }
    if(max < el) {
        max = el;
    }
}
console.log(`${min} ${max}`);
