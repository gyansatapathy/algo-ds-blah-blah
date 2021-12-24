const shellSort = (nums) => {
    console.log(this);

    const helper = (interval) => {
        for (let i = 0; i < nums.length; i += interval) {
            for (let j = i + interval; j > 0; j -= interval) {
                if (nums[j] < nums[j - interval]) {
                    const temp = nums[j];
                    nums[j] = nums[j - interval];
                    nums[j - interval] = temp;
                } else {
                    break;
                }
            }
        }
    }

    let interval = Math.floor(nums.length / 2);
    while (interval > 0) {
        helper(interval);
        interval = Math.floor(interval / 2);
    }

    return nums;
}

console.log(shellSort([5, 1, 4, 2]));
console.log(shellSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(shellSort([0, 0, 0, 0, 0, 0, -1]));
console.log(shellSort([0]));