function solution(participant, completion) {
    // 둘 다 정렬하고
    // 일치하지 않은걸 리턴
    participant.sort();
    completion.sort();
    // 결과가 담길 변수 선언
    let result = '';
    //참가자 기준으로 순회
    for(let i = 0; i < participant.length; i++) {
        // 완주자가 undefined면 === 완주자 모두 순회 했고 남은 한사람이 완주 못한사람
        if(completion[i] === undefined) {
            return participant[i];
            // 아니면 같은 인덱스에 참가자랑 완주자가 다른 경우
                // === 참가자중 누군가가 완주를 못한 상황
        } else if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    return result;
}

// 실패한 코드 (마지막 테스트 케이스 불통 및 효율성 테스트 0점..ㅠㅠ)
// 시간복잡도 n^2 => 필터내부에서 인덱스오브, 맵 내부에서 인클루드
/*
function solution(participant, completion) {
    // participant : 참여한 선수들
    // completion : 완주한 선수들
    // 완주하지 못한 선수의 이름을 리턴하라 -> 한명
    // 동명이인 있을 수 있음
    
    // 0. 중복값을 찾는다
    const dup = participant.filter((el, i, arr) => arr.indexOf(el) !== i)[0];
    // 1. 참여자 기준으로 map을 돌려서 completion에 있으면 ''
    const result = participant.map((el) => {
        if (completion.includes(el)) return '';
        else return el;
    }).join('');
    // 2. 최종값 join('')해서 공백인지 확인
    // 공백이면 중복값 리턴하고 아니면 최종값 리턴
    return result === ''? dup : result;
}
*/
