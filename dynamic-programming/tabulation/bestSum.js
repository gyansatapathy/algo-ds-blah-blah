const bestSum = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= table.length; i++) {
        if (table[i]) {
            for (let number of numbers) {
                if (i + number < table.length) {
                    const newVal = [...table[i], number];
                    if (!table[i + number] || table[i + number].length > newVal.length) {
                        table[i + number] = newVal;
                    }
                }
            }
        }
    }

    return table[target];
};

console.log(bestSum(7, [3, 4, 5, 7]));
console.log(bestSum(7, [3, 4, 5]));
console.log(bestSum(300, [7, 14]));
console.log(bestSum(100, [1, 2, 5, 25]));

/**
 * Complexities
 * m = target
 * n = length of numbers
 * Time O(n*m^2)
 * Space O(m^2)
 */
