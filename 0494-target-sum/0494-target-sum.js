/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let memo = new Map();

    function dfs(index, currentSum) {
        if (index === nums.length) {
            return currentSum === target ? 1 : 0;
        }
        
        let key = `${index},${currentSum}`;
        if (memo.has(key)) return memo.get(key);

        let add = dfs(index + 1, currentSum + nums[index]);
        let subtract = dfs(index + 1, currentSum - nums[index]);

        memo.set(key, add + subtract);
        return memo.get(key);
    }

    return dfs(0, 0);
};