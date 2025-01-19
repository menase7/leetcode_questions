/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let min = Infinity;
    let result = [];

    for (let i = 0; i < sorted.length - 1; i++) {
        let diff = sorted[i + 1] - sorted[i];
        min = Math.min(diff, min);
    }

    for (let i = 0; i < sorted.length - 1; i++) {
        let diff = sorted[i + 1] - sorted[i];
        if (diff === min) {
            result.push([sorted[i], sorted[i + 1]]);
        }
    }

    return result;
};
