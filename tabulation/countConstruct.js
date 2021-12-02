const countConstruct = (targetWord, wordBank) => {
    const table = Array(targetWord.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i < targetWord.length; i++) {
        if (table[i]) {
            for (let word of wordBank) {
                if (targetWord.slice(i, i + word.length) === word) {
                    table[i + word.length] +=table[i];
                }
            }
        }
    }

    return table[targetWord.length];
}

console.log(countConstruct('wayne', ['aw', 'yn', 'e']));
console.log(countConstruct('purple', ['p', 'purp', 'le', "ur", "purpl"]));
console.log(countConstruct('abcdef', ['f', 'ab', 'c', 'e', 'd']));
console.log(
    countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
        'e',
        'ee',
        'eee',
        'eeee',
        'eeeee',
        'eeeeee',
    ])
);
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));

/**
 * complexities
 * m = length of target word
 * n = length of word bank array
 * Time: O(m^2 * n)
 * space: O(m)
 */