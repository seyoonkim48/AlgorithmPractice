function boardGame(board, operation) {
  // 상하좌우를 미리 선언해둔다.
  const dir = {
    'U' : [-1, 0],
    'D' : [1, 0],
    'L' : [0, -1],
    'R' : [0, 1]
  }
  const LEN = board.length;
  // 범위를 벗어나는 경우 바로 OUT을 출력해야하기 때문에 유효한 범위인지 확인해주는 함수생성
  const isValid = (r, c) => r >= 0 && c >= 0 && r < LEN && c < LEN;
  let result = 0;
  let row = 0, col = 0;
  // 입력으로 받은 방향 지시문자열을 따라 하나하나 이동한다. => for of 문 사용
  for(let el of operation) {
    // dir 객체에 방향을 담아뒀기 때문에 입력받은 문자열과 일치하는 방향으로 이동한다.
    row += dir[el][0];
    col += dir[el][1];
    // 범위 유효성 검사를 해주고, 벗어난 경우 OUT 출력
    if(!isValid(row, col)) return 'OUT';
    // 벗어나지 않은 경우 보드판에 해당하는 숫자를 더해준다.
    result += board[row][col]
  }
  return result;
};
