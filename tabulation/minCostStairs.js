/**
 *
 * problem: https://leetcode.com/problems/min-cost-climbing-stairs
 * Time complexity O(n)
 * Space Complexity O(1)
 */
const minCostClimbingStairs = function(cost) {
    let a = cost[0];
    let b = cost[1];

    for(let i = 2; i < cost.length; i++){
        let temp = b;
        b = cost[i] + Math.min(a,b);
        a = temp;
    }

    return Math.min(a,b);

};

console.log(minCostClimbingStairs([10,15,20])); // 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); //6