/**
 *
 * @param numbers to be sorted
 * @returns sorted array
 */

const bubbleSort = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        let swapped = false;
        for (let j = numbers.length - 1; j > i; j--) {
            if (numbers[j] < numbers[j - 1]) {
                swapped = true;
                const temp = numbers[j - 1];
                numbers[j - 1] = numbers[j];
                numbers[j] = temp;
            }
        }

        if(!swapped){
            break;
        }
    }

    return numbers;
}
console.log(bubbleSort([5, 1, 4, 2]));
console.log(bubbleSort([0,0,0,0,0,0,-1]));
console.log(bubbleSort([0]));