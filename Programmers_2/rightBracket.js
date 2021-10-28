function solution(s){
    // 처음부터 닫는 괄호가 나오면 false!
    if(s[0] === ')') return false;
    // 스택배열을 하나 선언하고
    const stack = [];
    // 문자열 s를 순회하며 괄호 짝을 찾는다.
    for(let i = 0; i < s.length; i++) {
        // 여는 괄호면 스택에 넣고 닫는괄호면 스택에서 뺀다.
        if(s[i] === '(') {
            stack.push('(');
        } else if(s[i] === ')') {
            stack.pop();
        }
    }
    // 순회가 끝난 후 스택의 길이가 0이면 모든 짝이 맞는 경우니까 true를 출력하고
    if(stack.length === 0) return true;
    // 길이가 0이 아니면 여는 괄호가 남아있는거니까 false
    return false;
}
