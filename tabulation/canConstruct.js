const canConstruct = (targetWord, wordBank) => {
    const table = Array(targetWord.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i < targetWord.length; i++) {
        if (table[i]) {
            for (let word of wordBank) {
                if (targetWord.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[targetWord.length];
}

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

/**
 * complexities
 * m = length of target word
 * n = length of word bank array
 * Time: O(m^2 * n)
 * space: O(m)
 */