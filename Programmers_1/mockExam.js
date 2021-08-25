function solution(answers) {
    // 학생 세 명의 문제 찍는 방식 선언
    const mark1 = [1, 2, 3, 4, 5];
    const mark2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const mark3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // 총 몇 개의 문제를 맞춘건지 구하고
    const stu1 = answers.filter((e, i) => e === mark1[i % mark1.length]).length;
    const stu2 = answers.filter((e, i) => e === mark2[i % mark2.length]).length;
    const stu3 = answers.filter((e, i) => e === mark3[i % mark3.length]).length;
    
    // 그 중에서의 최댓값을 구해 최고점을 맞은 학생들을 정렬하여 출력
    const max = Math.max(stu1, stu2, stu3);
    const result = [];
    if(stu1 === max) result.push(1);
    if(stu2 === max) result.push(2);
    if(stu3 === max) result.push(3);
    
    return result;
}
