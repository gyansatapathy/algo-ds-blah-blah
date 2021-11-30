/**
 * Program to check if a target word can be created using group of strings
 *
 */

const canConstruct = (target, words) => {
  if (target === '') return true;

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const suffix = target.substring(word.length);

      return canConstruct(suffix, words);
    }
  }

  return false;
};

console.log(canConstruct('wayne', ['aw', 'yn', 'e']));
console.log(canConstruct('abcdef', ['f', 'ab', 'c', 'e', 'd']));
