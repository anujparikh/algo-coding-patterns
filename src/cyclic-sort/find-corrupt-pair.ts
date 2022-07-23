const findCorruptPair = (nums: Array<number>): Array<number> => {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 !== i) return [i + 1, nums[i]];
    }
    return [-1, -1];
}