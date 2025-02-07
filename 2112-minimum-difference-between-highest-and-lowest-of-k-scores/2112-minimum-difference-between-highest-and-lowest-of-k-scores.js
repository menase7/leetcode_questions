/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (k === 1) return 0; // If we pick only one student, the difference is always 0.

    nums.sort((a, b) => a - b); // Sort the scores in ascending order
    let minDiff = Infinity;

    // Iterate through the sorted array and find the minimum difference for any k-sized subarray
    for (let i = 0; i <= nums.length - k; i++) {
        minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i]);
    }

    return minDiff;
};