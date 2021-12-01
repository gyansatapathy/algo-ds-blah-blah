const howSum = (target, numbers) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= table.length; i++) {
    if (table[i]) {
      for (let number of numbers) {
        if (i + number < table.length) {
          table[i + number] = [...table[i], number];
        }
      }
    }
  }

  return table[target];
};

console.log(howSum(7, [3, 4, 5]));
console.log(howSum(7, [3, 4, 5, 7]));
console.log(howSum(300, [7, 14]));

/**
 * Complexities
 * m = target
 * n = length of numbers
 * Time O(n*m^2)
 * Space O(m^2)
 */
