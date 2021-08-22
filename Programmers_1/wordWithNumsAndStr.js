function solution(s) {
    const numbers = {
        0 : 'zero', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four',
        5 : 'five', 6 : 'six', 7 : 'seven', 8: 'eight', 9 : 'nine'
    };
    let result = ''; // 결과를 담을 변수
    while(s.length > 0) {
        // 첫 글자가 숫자인 경우 -> 바로 결과에 담고 그만큼을 s 에서 빼기
        if(!isNaN(s[0])) {
            result += s[0];
            s = s.slice(1);
            continue;
        }
        for(let key in numbers) {
            // 문자인 경우
            // 미리 선언한 객체를 순회하며 같은지 확인하기
            // 각 키에 해당하는 값의 길이만큼 slice로 자른 뒤 같은지 확인
            let temp = s.slice(0, numbers[key].length);
            if(temp === numbers[key]) {
                // 같은 경우 결과에 키(숫자)를 담고
                // s의 길이를 그 길이만큼을 자른 이후로 설정
                result += key
                s = s.slice(numbers[key].length);
                break;
            }
        }
    }
    return Number(result); // string 형태로 받았기 때문에 숫자로 변환하는 과정 필요
}
