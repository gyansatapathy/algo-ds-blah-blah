/**
 * leetcode problem: https://leetcode.com/problems/get-maximum-in-generated-array/
 * Time complexity O(n)
 * Space Complexity O(n)
 */
const getMaximumGenerated = function (n) {

    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    const table = Array(n + 1);
    table[0] = 0;
    table[1] = 1;
    let max = 1;

    for (let i = 2; i <= n; i++) {
        let offset = i % 2;

        if (offset === 0) {
            table[i] = table[i / 2];
        } else {
            const index = (i - 1) / 2;
            table[i] = table[index] + table[index + 1];
        }

        max = Math.max(table[i], max);
    }

    return max;
};

console.log(getMaximumGenerated(7));
console.log(getMaximumGenerated(10000));