function solution(strings, n) {
    // 입력되는 인덱스(n)를 기준으로 정렬하기
    strings.sort((a, b) => {
        if(a[n] > b[n]) return 1;
        else if(a[n] < b[n]) return -1;
        // 두 인덱스 자리 글자가 같은 경우는 사전순으로 정렬
        else if(a[n] === b[n]) {
            if(a > b) return 1;
            else if(a < b) return -1;
        }
    })
    return strings
}
