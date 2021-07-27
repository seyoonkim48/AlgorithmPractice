function solution(a, b) {
    let max = a, min = b;
    if(a < b) {
        max = b;
        min = a;
    }
    var answer = 0;
    for(let i = min; i <= max; i++) {
        answer += i;
    }
    return answer;
}
