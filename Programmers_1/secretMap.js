function solution(n, arr1, arr2) {
    const makingArr = (arr) => {
        return arr.map((el) => {
            let temp =  el.toString(2);
            while(temp.length < n) {
                temp = 0 + temp;
            }
            return temp.split('');
        });
    }
    arr1 = makingArr(arr1);
    arr2 = makingArr(arr2);
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(arr2[i][j] === '1') {
                arr1[i][j] = '1';
            }
        }
    }
    return arr1.map((el) => {
        return el.map((e) => {
            if(e === '1') return '#';
            else if(e === '0') return ' ';
        }).join('')
    })
}
