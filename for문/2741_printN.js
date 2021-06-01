let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

for(let i = 1; i <= Number(input); i++) {
    console.log(i);
}
