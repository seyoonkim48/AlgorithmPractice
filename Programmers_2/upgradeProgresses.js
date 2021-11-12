function solution(progresses, speeds) {
    // (100(완성) - 현재 진행) / 속도 => 완성까지 걸리는 날
    const workPerDays = progresses.map((el, i) => Math.ceil((100 - el) / speeds[i]));
    let result = [];
    // 첫번째 일을 now에 담는다.
    let now = workPerDays[0];
    let count = 1;
    while(workPerDays.length) {
        // 맨 앞부터 하나씩 빼가며 비교한다.
        workPerDays.shift();
        if (workPerDays.length === 0) {
            result.push(count);
            break;
        }
        if (now < workPerDays[0]) {
            result.push(count);
            count = 1;
            now = workPerDays[0];
        } else {
            count++;
        }
    }
    return result;
}
