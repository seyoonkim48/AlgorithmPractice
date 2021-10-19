function solution(sizes) {
    // 최댓값을 한 인덱스로 몰아놓는다.
    sizes.forEach((el) => el.sort((a, b) => a - b));
    // 같은 인덱스중에서 최댓값들을 찾는다.
    const first = Math.max(...sizes.map((e) => e[0]));
    const second = Math.max(...sizes.map((e) => e[1]));
    return first * second;
}
