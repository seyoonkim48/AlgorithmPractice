function solution(x) {
    // 각 자리수를 더하고 그 값을 입력받은 수 x로 나누어 떨어지면 하샤드 수
    // 각 자리를 더하기 위해 string으로 변환하고 배열로 쪼갠다
    // 배열의 각 요소를 더하고 그 수를 x로 나눈다.
    let sum = x.toString().split('')
                .reduce((acc, cur) => acc + Number(cur), 0);
    return x % sum === 0;
    
}
