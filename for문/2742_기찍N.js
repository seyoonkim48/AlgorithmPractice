let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let result = '';
for(let i = num; i > 0; i--) {
    result += (i + '\n');
};
console.log(result);
