function solution(n) {
    let numArr = n.toString().split('');
    numArr.sort((a, b) => b - a);
    return Number(numArr.join(''))
}
