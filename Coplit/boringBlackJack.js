function boringBlackjack(cards) {
  // 소수 판별 함수
  const isPrime = (num) => {
    if(num % 2 === 0) return false;
    for(let i = 3; i <= Math.sqrt(num); i += 2) {
      if(num % i === 0) return false;
    }
    return true;
  }

  let result = 0; // 소수인 수들을 세어 줄 변수

  const DFS = (count, bucket, cartSet) => {
    // 탈출 조건
    // 3개를 다 고르면
    if(count === 0) {
      // 고른 카드들을 다 더하고
      let sum = bucket.reduce((acc, cur) => acc + cur, 0);
      // 그 수들이 소수면 카운트 변수를 올려준다
      if(isPrime(sum)) result++;
      return;
    }
    // 반복조건
    // 카드들을 순회하며 한장씩 조합을 한다.
    for(let i = 0; i < cartSet.length; i++) {
      // 순열이 아닌 조합이기때문에 한번 쓴 카드는 제외한다.
      DFS(count - 1, bucket.concat(cartSet[i]), cartSet.slice(i + 1));
    }
  }

  DFS(3, [], cards);
  return result;
}

