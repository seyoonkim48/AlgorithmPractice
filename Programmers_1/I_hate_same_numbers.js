function solution(arr)
{
    // 연속적으로 나오는 숫자만 제거를 해야한다. 전체 중복을 삭제하는 Set은 X
    // 중복되지 않은 숫자를 담을 빈 배열을 만든다.
    let newArr = [];
    // 입력받은 arr를 for문으로 순회를 돌며
    for(let i = 0; i < arr.length; i++) {
        // 지금과 이 다음이 동일한지 여부를 확인한다.
        if(arr[i] !== arr[i + 1]) {
            // 동일하지 않으면 현재 요소를 추가한다.
            newArr.push(arr[i]);
        }
    }
    // 최종적으로 연속으로 중복이 아닌 요소들만 담긴 배열을 출력한다.
    return newArr;
}
