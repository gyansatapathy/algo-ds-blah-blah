/**
 * Program to check if a target word can be created using group of strings
 *
 */

const allConstruct = (target, words, memo) => {
  // console.log('memo' + JSON.stringify(memo));
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  let result = [];
  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const suffix = target.substring(word.length);
      const subResult = allConstruct(suffix, words, memo);
      const newResult = subResult.map((res) => [word, ...res]);
      result.push(...newResult);
    }
  }
  memo[target] = result;
  return result;
};

console.log(allConstruct('wayne', ['aw', 'yn', 'e']));
console.log(allConstruct('abcdef', ['f', 'ab', 'c', 'e', 'd']));
console.log(
  allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
);
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
