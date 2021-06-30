function solution(s){
    s = s.toLowerCase().split('');
    let pLength = s.filter((char) => char === 'p').length;
    let yLength = s.filter((char) => char === 'y').length;
    return pLength === yLength
}
