function solution(nums) {
    // 숫자 세 개를 더해서 만들 수 있는 수를 구한다.
    // 그 숫자들이 소수인지 판별한다.
    // 소수라면 count를 올려준다.
    let count = 0;
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) count++;
            }
        }
    }
    return count;
}
//소수 판별 함수
function isPrime(n) {
    //숫자 세 개를 더하기 때문에 2 이하가 나올 일이 없다. 그래서 조건 생략
    if(n % 2 === 0) return false;
    for(let i = 3; i <= Math.sqrt(n); i += 2) {
        if(n % i === 0) return false;
    }
    return true;
}
