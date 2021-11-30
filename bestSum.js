const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestResult = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = bestSum(remainder, numbers, memo);
    if (result !== null) {
      const currentResult = [...result, num];
      if (
        shortestResult === null ||
        currentResult.length < shortestResult.length
      ) {
        shortestResult = currentResult;
      }
    }
  }
  memo[targetSum] = shortestResult;
  return shortestResult;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(100, [5, 3, 4, 7]));
