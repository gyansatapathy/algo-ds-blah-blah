/**
 * Complexities:
 * Time: O(2^n)
 * Space: O(n)
 */
const fibonacci = (n) => {
    if (n <= 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * 
 * Here with this approach if we visualize the fibonacci is basically an overlapping sub problems i.e
 * most of the computations are basically done in previous recusion so to avoid that we cache computation for terms
 * hence check in the cache if the term is present or not, it solves the complexity dramitically
 * Complexities:
 * Time: O(n)
 * Space: O(n)
 */

const fibonacciWithMemoization = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) {
        return 1;
    }
    memo[n] = fibonacciWithMemoization(n - 1, memo) + fibonacciWithMemoization(n - 2, memo);
    return memo[n];
}


// This will be dramatically slow because of 2^n complexity
//console.log(fibonacci(50));

console.log(fibonacciWithMemoization(50));