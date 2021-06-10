let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let hour = Number(input[0]);
let minute = Number(input[1]);

if(minute >= 45) {
    minute -= 45;
} else {
    minute += 15;
    hour--;
}
if(hour < 0) {
    hour += 24;
}
console.log(`${hour} ${minute}`);
