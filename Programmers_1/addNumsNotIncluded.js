function solution(numbers) {
    // 0 ~ 9 까지 다 더한 수를 저장하고
    const total =
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, cur) => acc + cur, 0);
    // 입력받은 숫자 배열의 합을 더해
    const nums = numbers.reduce((acc, cur) => acc + cur, 0);
    // 그 차를 출력한다.
    return total - nums;
}
