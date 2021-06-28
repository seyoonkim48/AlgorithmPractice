function solution(n) {
    let result;
    if(n % 2) {
        result = new Array(Math.floor(n / 2)).fill('수박');
        result.push('수');
    } else {
        result = new Array(n / 2).fill('수박');
    }
    return result.join('');
}
