function solution(s, n) {
    let sArr = s.split('');
    sArr = sArr.map((el) => {
        // 공백이 아니면 글자를 숫자로 바꾸고
        // 숫자를 더한 뒤
        // 다시 글자로 바꾼다.
        if(el !== ' ') {
            let code = el.charCodeAt(0);
            // 소문자 z보다 작은데 더하면 z를 넘어가는 경우 다시 a부터 시작
            if(code <= 122 && code + n > 122) {
                code = code + n - 26;
                // 대문자 Z보다 작은데 더하면 Z를 넘어가는 경우 다시 A부터 시작
            } else if(code <= 90 && code + n > 90) {
                code = code + n - 26;
                // 다 아닌경우 n만큼만 더한다
            } else {
                code += n;
            }
            // 더해진 값들을 이용해 다시 글자로 변환
            el = String.fromCharCode(code);
        }
        return el;
    });
    return sArr.join('')
}
