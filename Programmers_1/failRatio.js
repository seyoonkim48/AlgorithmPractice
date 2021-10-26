function solution(N, stages) {
    // 전체 인원
    let people = stages.length;
    let arr = [];
    // 스테이지만큼 반복을 돌며 arr에 [스테이지, 실패율]을 담는다.
    for(let i = 1; i <= N; i++) {
        // 현재 스테이지를 클리어 하지 못한 유저의 수
        let now = stages.filter((e) => e === i).length;
        // 실패율을 구해서 스테이지와 함께 배열에 담는다.
        arr.push([i, now / people]);
        // 스테이지를 고전중인 인원을 제외한다.
        people -= now;
    }
    // 실패율을 기준으로 내림차순 정렬을 한다.
    arr.sort((a, b) => b[1] - a[1]);
    // 스테이지값만 배열의 형태로 출력한다.
    return arr.map((e) => e[0]);
}
