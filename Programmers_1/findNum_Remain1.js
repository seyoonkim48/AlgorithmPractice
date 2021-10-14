function solution(n) {
    let temp = n - 1;
    // 나머지가 1이 되는 수 중에서 가장 큰 수는 n - 1
    // n - 1이 소수라면 그 자체가 정답이 되고
    // 소수가 아니라면 그 수의 약수 중에서 (1을 제외하고) 가장 작은 수가 정답이 된다.
    for(let i = 2; i <= Math.sqrt(temp); i++) {
        if(temp % i === 0) {
            return i;
        }
    }
    return temp;
}
