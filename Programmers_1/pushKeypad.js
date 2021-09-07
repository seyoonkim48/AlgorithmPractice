function solution(numbers, hand) {
    let left = '*'; // 왼손 시작점
    let right = '#'; // 오른손 시작점
    const getDistance = (thumb, target) => { // 손가락과 타겟사이의 거리 구하는 함수
        const pad = { // 숫자패드를 2차배열 위치로 매칭을 시켰다.
            1 : [0, 0], 2 : [0, 1], 3 : [0, 2],
            4 : [1, 0], 5 : [1, 1], 6 : [1, 2],
            7 : [2, 0], 8 : [2, 1], 9 : [2, 2],
            '*' : [3, 0], 0 : [3, 1], '#' : [3, 2]
        }
        // 0번째 인덱스와 1번째 인덱스 각각의 거리를 구하고(거리니까 절댓값)
        // 그 값들을 더해서 최종적인 거리를 리턴한다.
        return Math.abs(pad[thumb][0] - pad[target][0])
            + Math.abs(pad[thumb][1] - pad[target][1])
    }
    // 입력하는 숫자들을 차례로 순회한다.
    let result = numbers.map((el) => {
        if(el === 1 || el === 4 || el === 7) { // 왼손엄지로 누르는 경우
            left = el; // 왼손엄지의 현재 위치 업데이트
            return 'L'; // 왼손으로 눌렀기 때문에 L을 리턴한다.
        }
        else if(el === 3 || el === 6 || el === 9) { // 오른손도 마찬가지
            right = el;
            return 'R';
        }
        else { // 가운데 숫자패드의 경우 길이를 구해서 더 가까운 손가락이 눌러야 한다.
            let leftDistance = getDistance(left, el);
            let rightDistance = getDistance(right, el);
            if(leftDistance > rightDistance) {
                right = el;
                return 'R';
            } else if(leftDistance < rightDistance) {
                left = el;
                return 'L';
            } else { // 양 엄지가 타겟과의 거리가 같은 경우
                if(hand === 'right') { // 오른손잡이는 오른엄지로
                    right = el;
                    return 'R';
                } else if(hand === 'left') { // 왼손잡이는 왼엄지로 누른다.
                    left = el;
                    return 'L';
                }
            }
        }
    })
    return result.join(''); // 배열로 되어있기 때문에 string으로 join한다.
}
