function solution(n) {
    // 입력받은 n을 3진법으로 변환을 한다. -> 그 결과는 스트링
    // Reverse 하려면 배열로 해야하기 때문에 split으로 쪼개서 배열로 만든다
    let temp = n.toString(3).split('');
    // reverse 한 뒤 다시 합치기
    temp = temp.reverse().join('');
    // 3진법에서 10진법으로 바꿔야하기 때문에 parseInt에 두번째 인자로 3넘기기
    return parseInt(temp, 3);
}
