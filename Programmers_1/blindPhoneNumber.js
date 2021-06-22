function solution(phone_number) {
    // var answer = '';
    // 뒤의 4자리만 취하는 배열
    let last4 = phone_number.slice(phone_number.length-4);
    // 나머지의 길이를 구해서 *로 채워진 배열
    let length = phone_number.slice(0, phone_number.length-4).length;
    let front = new Array(length).fill('*');
    //조인으로 합치기
    return front.concat(last4).join('');
}
