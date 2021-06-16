function solution(s) {
    var answer = '';
    // 홀짝 구분
    if(s.length % 2 !== 0) {
        answer += s[Math.floor(s.length / 2)];
    } else {
        answer += s[s.length / 2 - 1] + s[s.length / 2];
    }
    return answer;
}
