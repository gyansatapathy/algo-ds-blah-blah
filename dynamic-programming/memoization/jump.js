/*
leet code problem: https://leetcode.com/problems/jump-game-ii/
 */
const jump = (nums) => {
    let jumps = 0;
    let currentPosition = -1;
    let currentPositionAtIndex = 0;

    for(let i = 0; currentPositionAtIndex < nums.length-1; i++){
        if(i > currentPosition){
            jumps++;
            currentPosition = currentPositionAtIndex;
        }

        currentPositionAtIndex  = Math.max(currentPositionAtIndex, i+nums[i]);
    }

    return jumps;
};
console.log(jump([2,3,4,1,2,3,1,5]))
console.log(jump([2,3,1]))
console.log(jump([3,2,1]))
console.log(jump([1, 2, 3]))