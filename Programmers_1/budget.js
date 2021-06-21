function solution(d, budget) {
    var answer = 0;
    // budget을 오름차순으로 정렬한다.
    // for문을 이용해서 하나씩 더한다. answer도 더한다.
    // 더한 값이 d 이하까지 오케이. 넘는 순간 break;
    let sum = 0;
    d.sort((a, b) => a - b);
    for(let el of d) {
        if((sum + el) <= budget) {
            sum += el;
            answer++;
        }
    }
    return answer;
}
