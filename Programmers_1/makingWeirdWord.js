function solution(s) {
    s = s.toUpperCase();
    let strArr = s.split(' ');
    strArr = strArr.map((word) => word = word.split(''));
    for(let word of strArr) {
        for(let i = 1; i < word.length; i += 2) {
            word[i] = word[i].toLowerCase();
        }
    }
    strArr = strArr.map((word) => word = word.join(''))
    return strArr.join(' ');
}
