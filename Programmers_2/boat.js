function solution(people, limit) {
    // 사람을 오름차순으로 정렬한다.
    people.sort((a, b) => a - b);
    // 가장 가벼운 사람과 가장 무거운 사람의 인덱스를 초기화하고, 보트의 수를 0으로 초기화한다.
    let left = 0, right = people.length - 1;
    let boat = 0;
    // 가장 가벼운 사람이 항상 왼쪽에 있는 조건으로 반복문을 돌린다.
    while(left <= right) {
        // 가장 가벼운 사람과 가장 무거운 사람을 더한 값이 무게 제한보다 작은 경우
        if (people[left] + people[right] <= limit) {
            // 보트 1개 추가하고 사람을 변동시킨다.
            boat++;
            left++;
            right--;
        } else {
            // 아닌 경우는 보트는 추가하고 두번째로 무거운 사람을 확인한다.
            boat++;
            right--;
        }
    }
    // 보트의 수를 출력한다.
    return boat;
}
