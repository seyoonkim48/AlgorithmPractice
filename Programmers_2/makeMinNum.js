function solution(A,B){
    // 최솟값을 만드려면 최댓값 * 최솟값을 하면 된다
    // 한 배열은 오름차순, 다른 배열은 내림차순으로 정렬한 뒤
    // 같은 인덱스들 끼리 곱해준 값들을 더하면 완성!
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    let result = 0;
    A.forEach((el, i) => {
        result += (el * B[i]);
    });
    return result;
}
