/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) { 
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }
    }

    let maxFreq = 0;
    let value = -1;

    for (let key in map) {
        let num = parseInt(key); 
        if (map[key] > maxFreq || (map[key] === maxFreq && num < value)) {
            maxFreq = map[key];
            value = num;
        }
    }

    return value;
};