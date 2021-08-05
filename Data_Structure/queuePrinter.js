function queuePrinter(bufferSize, capacities, documents) { // 10, 10, []
  // bufferSize : 작업목록의 크기
  // capacities : 최대 용량
  // documents : 문서 크기 배열
  // 첫번째 문서를 작업목록에 넣고 시간 1로 시작
  let printArr = new Array(bufferSize).fill(0); //[0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
  let sum = documents[0]; //sum = 10
  printArr[printArr.length - 1] = documents.shift(); 
  let time = 1; //time = 1
  while(sum > 0 || documents.length > 0) { //10 > 0 || false
    let now = documents[0];
    if(documents.length === 0) now = 0;
    if(printArr[0] !== 0) { // 맨 앞이 0이 아니면 최종 합에서 빼줘야함
      sum -= printArr[0];
    }
      printArr.shift();
    if(sum + now > capacities) { // 더해서 용량을 넘으면 뒤에 0을 넣어야함
      printArr.push(0);
    } else {// 더해서 용량을 넘지 않으면 뒤에 문서를 넣어줘야함.
      printArr.push(now);
      sum += now;
      documents.shift();
    }
    time++;
  }
  return time;
}
