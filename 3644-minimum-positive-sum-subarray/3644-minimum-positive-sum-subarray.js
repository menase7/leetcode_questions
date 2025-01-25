/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
    
var minimumSumSubarray = function(nums, l, r) {
    let n = nums.length;
    let minSum = Infinity;

    // Iterate over all possible starting points of the subarray
    for (let start = 0; start < n; start++) {
        let currentSum = 0;

        // Expand the subarray from the current starting point
        for (let end = start; end < n; end++) {
            currentSum += nums[end];

            // Calculate the current window size
            let windowSize = end - start + 1;

            // Check if the window size is within bounds and the sum > 0
            if (windowSize >= l && windowSize <= r && currentSum > 0) {
                minSum = Math.min(minSum, currentSum);
            }

            // If the window size exceeds the maximum range, break
            if (windowSize > r) break;
        }
    }

    // Return the result: minimum sum or -1 if no valid subarray exists
    return minSum === Infinity ? -1 : minSum;
};

