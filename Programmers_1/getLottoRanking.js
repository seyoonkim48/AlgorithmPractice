function solution(lottos, win_nums) {
    // 정렬을 한 뒤 0의 갯수를 센다
    // 일치하는 수의 갯수를 센다
    // 위에서 구한 수 + 0의 수 => 최고 순위 구하기
    // 일치하는 수 => 최저순위
    lottos = lottos.sort((a, b) => a - b);
    win_nums = win_nums.sort((a, b) => a - b);
    const zero = lottos.filter((e) => e === 0).length;
    let count = 0;
    lottos.forEach((el) => {
        if(win_nums.includes(el)) count++;
    });
    return [(zero + count) >= 2? 7 - (zero + count) : 6,
            count >= 2? 7 - count : 6];
}
