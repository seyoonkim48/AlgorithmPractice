function solution(price, money, count) {
    // 횟수에 따라 요금이 배가 됨
    // 횟수만큼의 총 요금을 구한다
    let pay = 0;
    for(let i = 1; i <= count; i++) {
        pay += (price * i);
    }
    // 필요한 금액을 출력하되, 금액이 부족하지 않는다면 0을 출력
    return (pay - money) > 0 ? pay - money : 0;
}
