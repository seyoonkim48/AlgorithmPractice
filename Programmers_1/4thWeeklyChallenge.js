function solution(table, languages, preference) {
    // table에 담겨있는 각 직군별 언어 점수를 객체형식으로 정리
    const ranking = {};
    table.forEach((el) => {
        let temp = el.split(' ')
        ranking[temp[0]] = temp.slice(1);
        // 마지막 최종 값을 담을 공간 확보
        ranking[temp[0]].push(0);
    });
    // 유저가 사용하는 언어를 순회
    //                 언어, 인덳스
    languages.forEach((lan, i) => {
        // 직군 객체도 반복을 돌며 유저의 언어가 있는지 확인
        for(let key in ranking) {
            let idx = ranking[key].indexOf(lan);
            // 없는 경우 {선호 점수 * 0} 이기 때문에 0을 더해줌
            if(idx === -1) ranking[key][5] += 0;
            // 있는 경우 {선호 점수 * (5 - 인덱스)} 만큼 더해줌
            else ranking[key][5] += preference[i] * (5 - idx);
        }
    });
    // 직군과 최종 점수만을 배열에 담는다.
    const result = [];
    for(let key in ranking) {
        result.push([key, ranking[key][5]]);
    };
    // 각 요소를 사전식으로 정렬
    result.sort();
    let max = 0;
    let answer = '';
    // 최종 점수의 최댓값과 그에 해당하는 직군을 출력
    for(let el of result) {
        if(el[1] > max) {
            max = el[1];
            answer = el[0];
        }
    }
    return answer;
}
