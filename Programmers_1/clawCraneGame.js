// 두 가지 버전으로 풀어봤다. (두 개가 크게 다르진 않음.)
  // 두 방법으로 푼 이유 : 1, 2번이 자꾸 통과가 안되었다.
// 1, 2번 문제 실패 이유
  // (추측) 시간초과인 듯 하다.
  // 다른 사람들이 테스트 해보라고 했던 부분은 다 통과하는데 자꾸 실패떠서 오래걸렸다.ㅠㅠ
// 1, 2번 문제 해결 방법
  // 뽑을 레일에 인형이 하나도 없다면 아무것도 하면 안된다.....
  // 내 코드에서는 움직임 지시대로 순회해서 행동을 하면서
  // 그 때 그 때 같은 인형을 없애주는 로직이었는데, 
  // 그 자리가 0이 아니면 모든 아무런 행동을 하지 않는 조건은 있었지만,
  // 같은 인형을 없애주는 내용은 각 움직임 지시마다 중복으로 실행되었기 때문에 시간초과로 추측한다.
  // 따라서 뽑을 레일에 인형이 하나도 없다면 continue로 다음 지시로 넘어가도록 추가했다.
    // 하다가 의문점. forEach 내부에선 continue가 적용이 안됐다.
    // 당연히 된다고 생각했는데 에러가 나서 당황했다.
    // 그래서 forEach문을 for.. of 문으로 변경해서 적용했다..

/*
// 1번 방법 => 각 레일별 뽑을 수 있는 인형들만 정리해서 새 배열에 담고 shift를 하며 진행했다.
// 세부적인 방법은 2번과 같다.
function solution(board, moves) {
    moves = moves.map((e) => e - 1);
    const LEN = board.length;
    const newBoard = new Array(LEN).fill(0).map((e) => e = []);
    for(let i = 0; i < LEN; i++) {
        for(let j = 0; j < LEN; j++) {
            if(board[j][i] !== 0) {
                newBoard[i].push(board[j][i]);
            }
        }
    }
    const popArr = [];
    let result = 0;
    let top = 0;
    for(let lane of moves) {
        if(newBoard[lane].length === 0) continue;
        if(newBoard[lane].length > 0) {
            let tmp = newBoard[lane].shift();
            popArr.push(tmp);
            top++;
        }
        if(popArr[top - 1] === popArr[top - 2]) {
            popArr.pop();
            popArr.pop();
            top -= 2;
            result += 2;
        }
    }
    return result;
}
*/

// 2번 방법 => 각 레일을 그대로 두면서, 뽑으면 0으로 바꾸며 진행했다.
function solution(board, moves) {
    const popArr = [];
    let result = 0;
    let top = 0;
  // 각 레인 번호는 1부터 시작하는데 배열 인덱스는 0부터 시작하기 때문에
  // 헷갈림을 방지하기 위해 moves의 모든 값을 1씩 뺐다.
    moves = moves.map((e) => e - 1);
  // moves의 지시대로 각 레인별로 인형을 뽑는다.
    for(let lane of moves) {
      // 1, 2번 문제를 통과할 수 있도록 추가한 코드
      // 해당 레인의 맨 밑에있는 숫자가 0이면 그 레인은 비어있는 레인이기 때문에
      // 아무런 행동을 하지 않고 continue로 다음 지시로 넘어간다.
        if(board[board.length - 1][lane] === 0) continue;
      // 인형판을 한줄씩 보며 해당 lane에 인형이 있는지 탐색하고
        // 있다면 인형을 뽑아두는 배열에 넣고 스택의 길이를 가리키는 변수를 늘려주고, 그 자리를 0으로 바꾼다.
        // 일련의 과정을 마치면 더이상 반복을 할 필요가 없기 때문에 인형판 탐색 반복을 멈춘다.
        for(let el of board) {
            if(el[lane] !== 0) {
                popArr.push(el[lane]);
                top++;
                el[lane] = 0;
                break;
            }
        }
      // 인형을 뽑고 나면 각 배열에 중복된 인형이 있는지 탐색한다.
        // 인형이 있다면 그 만큼을 뽑고 top과 result를 조정한다.
        if(popArr[top - 1] === popArr[top - 2]) {
            popArr.pop();
            popArr.pop();
            top -= 2;
            result += 2;
        }
    }
    
    return result;
}
