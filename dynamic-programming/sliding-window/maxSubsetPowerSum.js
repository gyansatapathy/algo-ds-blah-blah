/*
    problem: https://www.geeksforgeeks.org/maximize-sum-of-each-element-raised-to-power-of-its-frequency-in-k-sized-subarray/
 */
const maxSubsetPowerSum = (nums, k) => {
    const powerTracker = new Map();
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        setDigitOccurrence(powerTracker, nums[i]);
    }
    powerTracker.forEach((value, key) => {
        maxSum += Math.pow(key, value);
    });

    let sum = maxSum;

    for (let i = 1; i <= nums.length - k; i++) {
        sum -= Math.pow(nums[i - 1], powerTracker.get(nums[i - 1]));
        removeDigit(powerTracker, nums[i - 1]);
        if (powerTracker.get(nums[i - 1]) > 0)
            sum += Math.pow(nums[i - 1], powerTracker.get(nums[i - 1]));
        if (powerTracker.get(nums[i + k-1])>0) {
            sum -= Math.pow(nums[i + k-1], powerTracker.get(nums[i + k-1]))
        }
        setDigitOccurrence(powerTracker, nums[i + k-1]);
        if (powerTracker.get(nums[i + k-1]) > 0)
            sum += Math.pow(nums[i + k-1], powerTracker.get(nums[i + k-1]))

        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
}

const setDigitOccurrence = (powerTracker, num) => {
    if (powerTracker.has(num)) {
        powerTracker.set(num, powerTracker.get(num) + 1);
    } else {
        powerTracker.set(num, 1);
    }
}

const removeDigit = (powerTracker, num) => {
    powerTracker.set(num, powerTracker.get(num) - 1);
}

console.log(maxSubsetPowerSum([2, 1, 2, 3, 3], 3));