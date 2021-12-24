/**
 * Given a matrix 0f m*n find the number of ways one come from (0,0) -> (m,n)
 *
 * One can move only in right direction or down direction.
 */

/*
Complexity -
Time O(2^(n+m))
Space O(n+m)
 */
const gridTraveller = (m, n) => {
    if (m === 1 && n === 1) {
        return 1;
    }
    if (m === 0 || n === 0) {
        return 0
    }

    return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
}

/*
Complexity -
Time O(n*m)
Space O(n)
 */
const gridTravellerWithMemoization = (m, n, memo = {}) => {
    if(m+""+n in memo) return memo[m+""+n]
    if (m === 1 && n === 1) {
        return 1;
    }
    if (m === 0 || n === 0) {
        return 0
    }
    memo[m+""+n] = gridTravellerWithMemoization(m - 1, n, memo) + gridTravellerWithMemoization(m, n - 1, memo);
    return memo[m+""+n];
}

console.log(gridTravellerWithMemoization(23, 12));
console.log(gridTravellerWithMemoization(3, 7));