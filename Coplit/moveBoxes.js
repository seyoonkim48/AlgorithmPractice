// 탐욕법으로 문제 해결
function movingStuff(stuff, limit) {
  // 무게 오름차순으로 정렬하기
  stuff.sort((a, b) => a - b);
  // 제일 가벼운 물건, 제일 무거운 물건을 가리키는 변수 생성
  let left = 0, right = stuff.length - 1;
  // 두 개를 한번에 옮기는 경우를 기록할 변수
  let double = 0;
  while(left < right) {
    // left, right이 가리키는 두 짐을 합친 값이 무게 제한을 넘지 않으면 한번에 싣고
    // left, rifht을 조정한다.
    if (stuff[left] + stuff[right] <= limit) {
      double++;
      left++;
      right--;
    } else {
      // 제일 무거운건 어떻게 해도 다른 짐들과 함께 담지 못하므로 rifht값만 조정한다.
      right--;
    }
  }
  // 짐 배열의 길이를 모든 짐을 하나씩 옮기는 방법의 수라고 생각했을 때,
  // 그 경우에서 한번에 싣는 경우의 수를 뺀 값을 출력하면 몇 번 짐을 나르는지 알 수 있다.
  return stuff.length - double;
}
