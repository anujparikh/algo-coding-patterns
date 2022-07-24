const findFirstKMissingNumber = (nums: Array<number>, k: number): Array<number> => {
    const result: Array<number> = [];
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }
    i = 0;
    while (i < nums.length && k > 0) {
        if (nums[i] !== i + 1) {
            result.push(i + 1);
            k--;
        }
        i++;
    }
    while (k > 0) {
        if (nums.indexOf(i + 1) === -1) {
            result.push(i + 1);
            k--;
        }
        i++;
    }
    return result;
}