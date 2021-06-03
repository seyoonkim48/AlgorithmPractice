let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = input[0];
let numbers = [];

for(let i = 1; i < input.length; i++) {
    if(input[i].length !== 0) {
        numbers.push(input[i].spilit(' '));
    }
}

for(let i = 0; i < numbers.length; i += 1) {
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);
    
    console.log(num1 + num2);
}
