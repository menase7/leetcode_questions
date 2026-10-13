/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen = new Map();
    for(let i=0; i<nums.length; i++){
        let difference = target - nums[i];
        if(seen.has(difference)){
            return [i,seen.get(difference)];
        }
        seen.set(nums[i], i);
    }
};