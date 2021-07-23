function solution(a, b) {
    // 목요일부터 시작하는 요일 배열 생성하기. (인덱스 기준으로 생각하기 쉽게)
    // 각 달이 며칠인지 기록해놓은 객체 생성하기
    // 입력된 달 - 1만큼의 날짜들과, 입력된 날짜를 더하기
    // 위에서 더한 값을 7로 나눈 나머지에 해당하는 요일을 출력
    const days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    const months = {
        1: 31, 2: 29, 3: 31, 4: 30,
        5: 31, 6: 30, 7: 31, 8: 31,
        9: 30, 10: 31, 11: 30, 12: 31
    };
    let total = 0;
    for(let i = 1; i < a; i++) {
        total += months[i];
    }
    total += b;
    return days[total % 7];
}
