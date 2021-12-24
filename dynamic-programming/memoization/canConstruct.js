/**
 * Program to check if a target word can be created using group of strings
 *
 */

const canConstruct = (target, words, memo = {}) => {
  // console.log('memo' + JSON.stringify(memo));
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const suffix = target.substring(word.length);
      memo[suffix] = canConstruct(suffix, words, memo);
      /*
      You might be thinking why this if block is required instead we can directly return 
      because the base case will handle it. Without this if statement proper branching will not happen
      i.e. it will not try all the options in the array.
      */
      if (canConstruct(suffix, words, memo)) {
        memo[suffix] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

console.log(canConstruct('wayne', ['aw', 'yn', 'e']));
console.log(canConstruct('abcdef', ['f', 'ab', 'c', 'e', 'd']));
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
);
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
