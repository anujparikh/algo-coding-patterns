function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) {
        return 0;
    }
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });
    console.log(intervals)

    let previousPointer = 0;
    let currentPointer = 1;
    let result = 0;

    while (currentPointer < intervals.length) {
        const previous = intervals[previousPointer];
        const current = intervals[currentPointer];
        if (previous[1] <= current[0]) {
            previousPointer = currentPointer;
        } else {
            result++;
        }
        currentPointer++;
    }
    return result;
};