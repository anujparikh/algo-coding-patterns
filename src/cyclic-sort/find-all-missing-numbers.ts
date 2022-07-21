const findAllMissingNumbers = (nums: Array<number>): Array<number> => {
    const result: Array<number> = [];
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] === j || nums[i] === nums[j]) {
            i++;
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 !== i) {
            result.push(i + 1);
        }
    }
    return result;
}