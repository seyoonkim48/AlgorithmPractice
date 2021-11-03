// 최대공약수 구하는 함수 (유클리드 호제법)
const gcd = (a, b) => b? gcd(b, a % b) : a;

function solution(arr) {
    // reduce를 이용해서 차례대로 최소공배수를 찾는다
    return arr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur));
}
