function solution(a, b) {
    // 두 배열의 같은 인덱스끼리 곱하고 그 결과들을 더한다.
    let result = 0;
    // 한 배열을 기준으로 순회하면서 같은 인덱스끼리 곱한 값을 그 때 그 때 더한다.
    a.forEach((_, i) => result += (a[i] * b[i]))
    return result;
}
