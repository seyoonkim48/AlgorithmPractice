function solution(nums) {
    const unique = [...new Set(nums)]; // 중복을 제거한 배열
    const pickCount = nums.length / 2; // 뽑을 수 있는 포켓몬의 수
    // 중복을 제거한 배열의 길이가 뽑을 수 있는 포켓몬의 수 보다 짧으면
    // 그냥 그만큼을 가져갈 수 있음
    // 아니면 뽑을 수 있는 만큼만 가져갈 수 있음
    return pickCount <= unique.length? pickCount : unique.length;
}
