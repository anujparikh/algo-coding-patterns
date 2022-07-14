const meetingRooms = (intervals: number[][]): boolean => {
    if (intervals.length === 1) return true;
    intervals.sort((a, b) => a[0] - b[0]);
    let counter = 1;
    while (counter < intervals.length) {
        const previous = intervals[counter - 1];
        const current = intervals[counter];
        if (previous[1] > current[1]) return false;
        counter++;
    }
    return true;
}