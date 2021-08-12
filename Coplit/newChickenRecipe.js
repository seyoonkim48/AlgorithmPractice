function newChickenRecipe(stuffArr, choiceNum) {
  // 0이 3개 이상이면 빼야함
  // 각 요소가 숫자이기 때문에 문자형으로 바꿔주고, 각 문자에서 0의 갯수를 센 뒤 3개 미만만 필터링
  stuffArr = stuffArr.filter(e => e.toString().split('').filter(el => el === '0').length < 3);
  stuffArr.sort((a, b) => a - b);
  // 최종 결과값을 담을 배열
  const result =[];

  // 음식을 입력받은 choiceNum만큼 담는 함수
  const recipe = (fresh, food, bucket) => {
    // 탈출 조건 => 선택을 모두 한 경우
    if(food === 0) {
      // bucket에 모아둔 내용을 result에 넣은 후 함수를 끝내기 위해 return
      result.push(bucket.slice());
      return;
    }
    // 재귀 
    // 음식 배열을 순회하며 하나씩 bucket에 담아 재귀. 하나를 담았으므로 choiceNum을 하나씩 빼준다
    for(let i = 0; i < fresh.length; i++) {
      let now = fresh[i];
      let newArr = fresh.slice();
      // 중복이 아닌 순열이기 때문에 이미 넣은 음식은 제거한 후 재귀를 돌린다.
      newArr.splice(i, 1)
      recipe(newArr, food - 1, bucket.concat(now));
    }
  }

  recipe(stuffArr, choiceNum, [])
  return result;
}

