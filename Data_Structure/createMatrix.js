function createMatrix(edges) {
	// 최대값  = 인접행렬의 최대 인덱스
  // 입력받은 2차원 배열엔 일방향인지, 양방향인지 여부가 있기 때문에 flat으로 1차로 만들어준 후
  // 타입이 숫자인 요소를 필터로 걸러서 그 중 최댓값을 구한다.
  let maxIdx = Math.max(...edges.flat().filter((el) => typeof el === 'number'));
  // 최댓값을 인덱스로 포함하는 배열을 만들어야하기 때문에 그 인덱스보다 1 큰 수만큼의, 0으로 채워진 배열을 만들고
  // 각 요소(0)를 또 0으로 최대인덱스 +1 크기만큼의 배열로 바꿔준다.
  let matrix = new Array(maxIdx + 1).fill(0).map((el) => el = new Array(maxIdx + 1).fill(0));
  // 입력받은 2차원 배열을 순회하며 인접행렬을 채워준다.
  for(let el of edges) {
    if(el[2] === "directed"){
      matrix[el[0]][el[1]] = 1;
    } else {
      // undirected
      matrix[el[0]][el[1]] = 1;
      matrix[el[1]][el[0]] = 1;
    }
  }
  return matrix;
}
