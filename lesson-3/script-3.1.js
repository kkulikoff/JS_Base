function simpleNum(num) {
    let i = 2;
    let arr = [];
    while (i <= num) {    
        let flag = 1;
        if (i > 2 && i % 2 != 0) {
            let j = 3;
            while (j * j <= i) {
                if (i % j == 0) {
                    flag = 0;
                    break;
                }
                j = j + 2;
            }
        }
        else if (i != 2) flag = 0;
        if (flag==1) 
            arr.push(i);
        i++;
    }
    return arr.join(', ');
}
console.log(simpleNum(100));
