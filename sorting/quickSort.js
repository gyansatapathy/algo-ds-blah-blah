const quickSort = (nums) => {
    sort(nums, 0, nums.length - 1);

    return nums;
}

const partition = (nums, low, high) => {
    let l = low;
    let h = high;
    const pivot = nums[low];
    while (l < h) {
        while (nums[l] <= pivot && l < h) {
            l++;
        }
        while (nums[h] > pivot) {
            h--;
        }
        if (l < h) {
            const temp = nums[l];
            nums[l] = nums[h];
            nums[h] = temp;
        }
    }

    const temp = nums[low];
    nums[low] = nums[h];
    nums[h] = temp;

    return h;
}

const sort = (nums, low, high) => {
    if (low >= high) {
        return;
    }

    const pivot = partition(nums, low, high);

    sort(nums, low, pivot - 1);
    sort(nums, pivot + 1, high);
}

console.log(quickSort([5, 1, 4, 2]));