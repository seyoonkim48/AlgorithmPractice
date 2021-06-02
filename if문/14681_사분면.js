const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    let positionX = parseInt(input[0]);
    let positionY = parseInt(input[1]);
    let result = 0;
    function getQudrant(x, y) {
    // x>0.  ;; y>0 --->1 ;; y<0 ---->4
    // x<0.  ;; y>0 --->2 ;; y<0 ---->3
    if(x > 0) {
        if(y > 0) {
            result = 1;
        } else result = 4;
    } else {
        if(y > 0) {
            result = 2;
        } else result = 3;
    }
    return result;
}
console.log(getQudrant(positionX, positionY));

  process.exit();
});
