let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = parseInt(input);
let result ='';
for(let i = 1; i <= num; i++) {
    result += i + '\n';
}
console.log(result);
for(let i = 1; i <= Number(input); i++) {
    console.log(i);
}
