function solution(num) {
    // 횟수를 세어줄 변수와 재귀적으로 돌아갈 함수 필요
    // 숫자가 1이면 횟수를 리턴한다.
    // 횟수가 500이 넘어간다면 -1 반환
    // 입력된 수가 짝수면 2로 나누고 횟수 + 1
    // 홀수면 3을 곱하고 1을 더한다 횟수 + 1
    let count = 0;
    let calc = function(n, count) {
        if(n === 1) return count;
        if(count >= 500) return -1;
        
        if(n % 2 === 0) {
            n /= 2;
            count++;
        }
        else {
            n = n * 3 + 1;
            count++;
        }
        return calc(n, count)
    }
    
    return calc(num, 0);
}
