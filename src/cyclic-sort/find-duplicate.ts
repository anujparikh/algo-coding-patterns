const findDuplicate = (nums: Array<number>): number => {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] === j) {
            i++;
        } else if (nums[i] === nums[j]) {
            return nums[i];
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    return -1;
}