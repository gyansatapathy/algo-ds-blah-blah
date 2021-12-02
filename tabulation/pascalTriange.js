/**
 * Visualize it here: https://algorithm-visualizer.org/dynamic-programming/pascals-triangle
 * Complexity :
 * Time: O(n^2)
 * Space; O(n^2
 */

const generate = function(numRows) {
    const result = [];
    for(let i = 0; i<numRows; i++){
        const resultRow = [1];
        for(let j = 1; j < i; j++){
            resultRow[j] = result[i-1][j] + result[i-1][j-1];
        }
        resultRow[i] = 1;

        result.push(resultRow);
    }

    return result;
};

console.log(generate(5))