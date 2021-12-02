/**
 * Complexity
 * time: O(n^m)
 * space: o(m+n)
 */
const canSum = (targetSum, numbers) => {
    if (targetSum === 0) {
        return true;
    }
    if (targetSum < 0) {
        return false;
    }

    for (let num of numbers) {
        const remaining = targetSum - num;

        if (canSum(remaining, numbers)) {
            return true;
        }
    }

    return false;
}

/**
 * Complexity
 * time: O(n*m)
 * space: o(m+m)
 */
const canSumMemoized = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if (targetSum === 0) {
        return true;
    }
    if (targetSum < 0) {
        return false;
    }
    for (let num of numbers) {
        const remaining = targetSum - num;

        if (canSumMemoized(remaining, numbers, memo)) {
            memo[remaining] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}

console.log(canSum(1, [3, 4, 6]));
console.log(canSumMemoized(300, [7, 14]));
console.log(canSum(4, [3, 4, 6]));
console.log(canSum(7, [3, 4, 6]));
console.log(canSum(9, [3, 4, 6]));
