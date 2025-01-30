/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let totalSum = 0;
    let prefixSum = [0];

    for (let i = 0; i < nums.length; i++) {
        let start = Math.max(0, i - nums[i]);
        let subarraySum = prefixSum[i] - (prefixSum[start] || 0) + nums[i];
        
        totalSum += subarraySum;
        prefixSum.push(prefixSum[i] + nums[i]);
    }
    
    return totalSum;
};