function solution(lottos, win_nums) {
    // 일치하는 수의 갯수를 센다
    // 위에서 구한 수 + 0의 수 => 최고 순위 구하기
    // 일치하는 수 => 최저순위
    const zero = lottos.filter((e) => e === 0).length;
    let count = 0;
    lottos.forEach((el) => {
        if(win_nums.includes(el)) count++;
    });
    return [(zero + count) >= 2? 7 - (zero + count) : 6,
            count >= 2? 7 - count : 6];
}
