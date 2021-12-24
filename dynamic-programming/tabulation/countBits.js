/**
 * author:
 * Leetcode problem: https://leetcode.com/problems/counting-bits
 * Time Complexity O(n)
 * Space Complexity O(n)
 */
const countBits = function(n) {
    let offSet = 1;
    const table = Array(n);
    table[0] = 0;

    for(let i = 1; i<=n; i++){
        if(offSet *2 === i){
            offSet = i;
        }
        table[i]=table[i-offSet]+1;
    }

    return table;

};

console.log(countBits(5));