function solution(n, m) {
    // 최대공약수
    let gcd = (a, b) => {
        if(a % b === 0) return b;
        return gcd(b, a % b);
    }
    // 최소공배수
    let lcm = (a, b) => {
        return a * b / gcd(a, b);
    }
    return [gcd(n, m), lcm(n, m)]
}
