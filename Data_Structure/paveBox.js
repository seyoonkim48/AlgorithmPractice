/**
 * < 문제 >
 * 마트에서 장을 보고 박스를 포장하려고 합니다.
 * 박스를 포장하는 데는 폭이 너무 좁아서, 한 줄로 서 있어야 하고, 들어온 순서대로 한 명씩 나가야 합니다.
 * ....
 * 뒷사람이 포장을 전부 끝냈어도 앞사람이 끝내지 못하면 기다릴 수밖에 없는 환경입니다.
 * 앞사람이 포장을 끝나면, 포장을 마친 뒷사람들과 함께 한 번에 나가게 됩니다.
 * 
 * < 입력 >
 * Number 타입을 요소로 갖는, 포장해야 하는 박스가 담긴 배열
 * 
 * < 출력 >
 * Number 타입을 리턴해야 합니다.
 */

function paveBox(boxes) {
  // boxes 자체가 큐. 큐니까 while문으로 돌기
  // 첫번째 요소를 저장해두고 있다가, 그거보다 작은것들은 카운트를 올리면서 shift()
  // 큰 숫자가 나오는 순간 카운트를 결과 배열에 푸시하고 0으로 리셋
  let result = [];
  let count = 0;
  let now = boxes[0];
  while(boxes.length > 0) {
    if(now >= boxes[0]) {
      boxes.shift();
      count++;
    } else {
      result.push(count);
      count = 0;
      now = boxes[0];
    }
  }
  result.push(count)
  return Math.max(...result);
}
