const findMissingNumber = (nums: Array<number>): number => {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] === 0 || i === j) {
            i++;
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) return i + 1;
    }
    return -1;
}