const mergeSort = (nums) => {
    if (nums.length === 1) {
        return;
    }
    const subSize = Math.floor(nums.length / 2);
    const subArray = Array(subSize);
    const subArray2 = Array(nums.length - subSize);
    for (let i = 0; i < nums.length; i++) {
        if (i < subSize) {
            subArray[i] = nums[i];
        } else {
            subArray2[i - subSize] = nums[i];
        }
    }
    mergeSort(subArray);
    mergeSort(subArray2);

    sortAndMerge(nums, subArray, subArray2);

    return nums;

};

const sortAndMerge = (nums, subArray, subArray2) => {
    const arraySize = nums.length;
    const subArraySize = subArray.length;
    const subArray2Size = subArray2.length;
    let mainIndex = 0;
    let subIndex = 0;
    let subIndex2 = 0;

    while (mainIndex < arraySize && subIndex < subArraySize && subIndex2 < subArray2Size) {
        if (subArray[subIndex] < subArray2[subIndex2]) {
            nums[mainIndex] = subArray[subIndex];
            subIndex++;
        } else {
            nums[mainIndex] = subArray2[subIndex2];
            subIndex2++;
        }

        mainIndex++;
    }

    while (subIndex < subArraySize) {
        nums[mainIndex++] = subArray[subIndex++];
    }

    while (subIndex2 < subArray2Size) {
        nums[mainIndex++] = subArray2[subIndex2++];
    }
};

console.log(mergeSort([42, 26, 34, 37, 15]));
console.log(mergeSort([5,3,2,1]));
console.log(mergeSort([100000,99856,945732,932154,554425]));