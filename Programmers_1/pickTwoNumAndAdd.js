function solution(numbers) {
    var answer = [];
    // 이중for문으로 다 더한 뒤 answer 배열에 push 해준다!
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    answer = Array.from(new Set(answer));
    answer.sort((a, b) => a - b);
    // 중복을 제거한다!
    // 정렬한다!
    return answer;
}
