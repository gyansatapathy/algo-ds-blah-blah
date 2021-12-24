const insertionSort = (nums) => {

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (nums[j] < nums[j - 1]) {
                const temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
            } else {
                break;
            }
        }
    }

    return nums;
};

console.log(insertionSort([5, 1, 4, 2]));
console.log(insertionSort([0, 0, 0, 0, 0, 0, -1]));
console.log(insertionSort([0]));