let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let sum = 0;

for(let i = num; i > 0; i--) {
    sum += i;
}
console.log(sum);
