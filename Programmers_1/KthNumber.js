function solution(array, commands) {
    // 최종 결과값을 담을 빈 배열 생성
    let result = [];
    // commands의 길이만큼 반복을 돈다.
    commands.forEach((el) => {
    // el의 0번 인덱스 값부터 1번 인덱스 값 까지 array를 slice 한후, 정렬한다.
        let cutArr = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b);
    // 정렬 된 배열의 el[2]값을 result에 push 한다.
        result.push(cutArr[el[2] - 1])
    })
    return result;
}
