const cyclicSort = (nums: Array<number>): Array<number> => {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] !== i + 1) {
            const j = nums[i] - 1;
            [nums[j], nums[i]] = [nums[i], nums[j]];
        } else {
            i++;
        }
    }
    return nums;
}