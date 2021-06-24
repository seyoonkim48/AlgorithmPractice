function solution(absolutes, signs) {
    let newArr = [];
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] === false) {
            newArr.push(absolutes[i] * (- 1));
        } else {
            newArr.push(absolutes[i])
        }
    }
    return newArr.reduce((acc, cur) => acc + cur, 0);
}
