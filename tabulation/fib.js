const fib = (n) => {
  const table = Array(n + 2).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n + 1; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
};

console.log(fib(6));
console.log(fib(50));
