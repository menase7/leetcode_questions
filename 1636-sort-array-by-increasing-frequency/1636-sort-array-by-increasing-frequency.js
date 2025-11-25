/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const freq = new Map();

    for (let n of nums) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }

    nums.sort((a, b) => {
        const fa = freq.get(a);
        const fb = freq.get(b);

        if (fa !== fb) return fa - fb;

        return b - a;
    });

    return nums;
};