# Kadane's Algorithm

## The maximum sub array at an index i of an array is either the item at index i or the sum of the items of sub-array till the index i-1 and item at index i


// numbers = [-1,2,0,5,6]


    const maxSubArray = (numbers) => {

        let maxGlobal = numbers[0], maxCurrent = numbers[0]

        for(let i = 0; i < numbers.length; i++){
            maxCurrent = Math.max(numbers[i], maxCurrent+ numbers[i]);
            if(maxCurrent > maxGlobal) maxGlobal = maxCurrent;
        }
        return maxGlobal;
    }
