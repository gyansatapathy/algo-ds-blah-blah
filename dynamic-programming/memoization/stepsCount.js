const climbStairs = function (n, memo={}) {
    if(n in memo) return memo[n];
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    const sum1 = climbStairs(n - 1);
    const sum2 = climbStairs(n - 2);
    memo[n] = sum1+sum2;
    return sum1 + sum2;

};

console.log(climbStairs(6));