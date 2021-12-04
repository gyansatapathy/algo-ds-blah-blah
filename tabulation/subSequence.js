/**
 * leet code problem: https://leetcode.com/problems/is-subsequence
 * Time Complexity O(size of t)
 * Space Complexity O(1)
 */

const isSubsequence = function(s, t) {
    let subIndex = 0;

    for(let i = 0; i < t.length; i++){
        if(subIndex === s.length) return true;
        if(t.charAt(i) === s.charAt(subIndex)){
            subIndex++;
        }
    }

    return subIndex === s.length;

};

console.log(isSubsequence("abc", "ahbjdsc")); //true
console.log(isSubsequence("haj", "ahbjdsc")); //false;