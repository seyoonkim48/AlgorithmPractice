// 윤년이면 1, 아니면 0
// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
// 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다.
// 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var year = parseInt(input[0]);

let result = 0;
if(year % 4 === 0) {
    result = 1;
}
if(year % 100 === 0) {
    result = 0;
}
if(year % 400 === 0) {
    result = 1;
}

console.log(result);
