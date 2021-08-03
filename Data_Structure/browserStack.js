function browserStack(actions, start) {
  // start로 시작해서 actions 배열에 하나씩 들어오는대로 페이지가 변한다.
  // 1이 들어오면 앞으로가기, -1이 들어오면 뒤로가기
  // 앞으로가거나 뒤로 갈 때, 스택이 비어있으면 이동하지 못한다.
  // actions에서 들어오는게 1인 경우, -1인경우, 문자열인경우를 나눈다.
  let prev = [], next = [];
  for(let el of actions) {
    if(el === -1 && prev.length !== 0) {
      // 그 상태에서 -1이 들어오면 현재 페이지가 다음페이지 스택에 푸시하고
      next.push(start);
      start = prev.pop();
    } else if(el === 1 && next.length !== 0) {
      // 1이 들어오면 이전 페이지 스택에서 뽑아서 현재 페이지로 만든다.
      prev.push(start);
      start = next.pop();
    } else {
      // 문자열이 들어오면 지금 있는 페이지가 이전페이지 스택에 푸시한다.
      prev.push(start);
      start = el;
      next = [];
    }
  }
  return [prev, start, next];
}
