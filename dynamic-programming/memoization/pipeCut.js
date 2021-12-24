/*
 Problem from Coremen
 The rod-cutting problem is the following.
 Given a rod of length n inches and a table of prices p,
 determine the maximum revenue rn obtain-able by cutting up the rod and selling the pieces.
 Note that if the price pn for a rod of length n is large enough, an optimal solution may require no cutting at all.

 */
const pipeCost = (n, p, memo = {}) => {
    if (n in memo) return memo[n];
    let maxCost = 0;
    for (let i = 1; i < n; i++) {
        const price = p[n - 1] ? p[n - 1] : 0; //default to zero for invalid size;
        maxCost = Math.max(maxCost, price, pipeCost(i, p, memo) + pipeCost(n - i, p, memo))
    }

    memo[n] = maxCost;
    return memo[n];
}

console.log(pipeCost(4, [1, 5, 8, 9, 10, 17, 20, 24, 30])); //10
console.log(pipeCost(45, [1, 5, 8, 9, 10, 17, 20, 24, 30, 42])); //131