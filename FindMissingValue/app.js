var arr = [21,25,29,28,22,24,27,26,30];

const findMissing = arr => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    var missingNumber;

    for(var i=min;i<=max;i++) {
        if(!arr.includes(i)) {
            missingNumber = i;
        }
    }

    return missingNumber;
}

console.log(findMissing(arr));