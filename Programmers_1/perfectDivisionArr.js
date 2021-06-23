function solution(arr, divisor) {
    let answer = arr.filter((el) => el % divisor === 0);
    if(answer.length === 0) {
        answer = [-1];
    }
    return answer.sort((a, b) => a - b);
}
