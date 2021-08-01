function solution(s) {
    // 기존의 sort는 사전식 정렬(오름차순)
    // sort 함수 내에서 순서를 바꿔주는 작업 필요!
   return s.split('').sort((a, b) => {
       if(a < b) return 1;
       if(b < a) return -1;
   }).join('');
}
