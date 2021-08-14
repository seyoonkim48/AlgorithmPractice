function solution(scores) {
    let answer = '';
    // score[row][col]
    // 2차 배열의 열에 해당하는 인덱스들을 기준으로 평균을 구하게 됨(col)
    // 행과 열이 같은 값이 유일한 최고점이거나 최저점인 경우 평균에서 제외
    const students = scores.length;
    for(let i = 0; i < students; i++) {
        let temp = [];
        for(let j = 0; j < students; j++) {
            temp.push(scores[j][i]);
        }
        if((Math.max(...temp) === scores[i][i]) ||
           (Math.min(...temp) === scores[i][i])) {
            if(temp.filter(e => e === scores[i][i]).length === 1) {
                temp.splice(i, 1);
            }
        }
        let avg = temp.reduce((acc, cur) => acc + cur, 0) / temp.length;
        answer += getScore(avg);
    }
    return answer;
}
// 각 평균 점수를 가지고 학점 구하는 함수
function getScore (score) {
    if(score >= 90) return 'A';
    else if(score >= 80) return 'B';
    else if(score >= 70) return 'C';
    else if(score >= 50) return 'D';
    else return 'F';
}
