const climbStairs = function (n) {
    if (n < 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }


    const sum1 = climbStairs(n - 1)
    const sum2 = climbStairs(n - 2)
    console.log(sum1);
    console.log(sum1)
    return sum1 + sum2;

};

console.log(climbStairs(1));