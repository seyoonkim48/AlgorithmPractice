function solution(s) {
    // 공백을 기준으로 배열을 만듦
    let arr = s.split(' ');
    // 배열 요소를 조건에 맞게 변화시키기
    arr = arr.map((el) => {
        // 첫 글자가 숫자가 아니라면 대문자로 바꾸고 뒤를 소문자로 바꿔야함
        if(isNaN(el[0]) && el !== '') {
            return el[0].toUpperCase() + el.slice(1).toLowerCase();
        } else if(!isNaN(el[0])) {
            // 첫 글자가 숫자면 그 단어는 전부 소문자로
            return el.toLowerCase();
        } else return el;
        // 공백이 여러개 들어온 경우 그대로 출력해줘야한다.
    });
    // 공백이 추가된 형태로 함수의 결과값을 출력한다.
    return arr.join(' ');
}
