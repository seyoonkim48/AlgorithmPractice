function solution(left, right) {
    let result = 0;
    
    function calc(num) {
        let count = 0;
        for(let i = 1; i <= num; i++) {
            if(!(num % i)) count++;
        }
        return count;
    }
    
    for(left; left <= right; left++) {
        if(calc(left) % 2 === 0) {
            result += left;
        } else {
            result -= left;
        }
    }
    return result;
}
