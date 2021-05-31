// 90 ~ 100점은 A
// 80 ~ 89점은 B
// 70 ~ 79점은 C
// 60 ~ 69점은 D
// 나머지 점수는 F

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

function getGrade(score) {
    let grade ='';
    switch(Math.floor(score / 10)){
        case 10:
        case 9:
            grade = 'A';
            break;
        case 8:
            grade = 'B';
            break;
        case 7:
            grade = 'C';
            break;
        case 6:
            grade = 'D';
            break;
        default:
            grade = 'F';
           }
    return grade;
}
console.log(getGrade(input));
