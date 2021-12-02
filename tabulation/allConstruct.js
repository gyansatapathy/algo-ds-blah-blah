const allConstruct = (targetWord, wordBank) => {
    const table = Array(targetWord.length + 1).fill().map(() => []);
    table[0].push([]);

    for(let i = 0; i < table.length; i++){
        if(table[0].length > 0){
            for(let word of wordBank){
                if(targetWord.slice(i,word.length+i) === word){
                    const newCombo = table[i].map(subArray => [...subArray, word]);
                    table[i+word.length].push(...newCombo);
                }
            }
        }
    }
    return table[targetWord.length];
}

console.log(allConstruct("gyan", ["gy", "an", "a", "g"]));