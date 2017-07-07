/**
 * 获取两个数组的交集
 * 
 * @param {any} arrA 
 * @param {any} arrB 
 * @returns 
 */

// double for
function handleDuplicate(arrA, arrB) {
    if (arrA.length <=0 || arrB.length <= 0) {
        return [];
    }

    var result = [];
    for (let i = 0, lengthi = arrA.length; i < lengthi; i++) {
        let current = arrA[i];
        for (let j = 0, lengthj = arrB.length; j < lengthj; j++) {
            if (current === arrB[j]) {
                result.push(current);
                break;
            }
        }
    }
    return result;
};

// set && ES6
function handleDuplicate(arrA, arrB) {
    var result =[];
    arrA.map(a => {
        if (b.has(a)) {
            result.push(a);
        }
    });
    return result;
}
