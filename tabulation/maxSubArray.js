/**
 * Complexity -
 * Time O(n)
 * Space O(2) for sum & max variables
 */
const maxSubArray = (numbers) => {
    // you can replace this table array with a single sum since we are only bothered about the previous sum.
    // this is just to demonstrate tabulation here.
    let table = Array(numbers.length).fill(0);
    table[0] = numbers[0];
    let max = -32222222222222;

    //replace table usage with sum;
    for (let i = 1; i < numbers.length; i++) {
        table[i] = numbers[i] + (table[i - 1] < 0 ? 0 : table[i - 1]);
        max = Math.max(table[i], max);
    }

    console.log(table)
    return max;
}

console.log(maxSubArray([-1,-2,-3]));