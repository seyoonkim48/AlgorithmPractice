function solution(n, lost, reserve) {
    // 학생들이 가지고 있는 체육복을 배열로 정리를 한다.
    let students = new Array(n).fill(1);
    for(let el of lost) {
        students[el - 1]--;
    }
    for(let el of reserve) {
        students[el - 1]++;
    }
    for(let i = 0; i < students.length; i++) {
        if(students[i] === 0 && students[i - 1] === 2) {
            students[i - 1]--;
            students[i]++;
        } // 아니면 그 다음 학생의 체육복을 빌린다.
        if(students[i] === 0 && students[i + 1] === 2) {
            students[i + 1]--;
            students[i]++;
            
        }
    }
    return students.filter((el) => el > 0).length
}
