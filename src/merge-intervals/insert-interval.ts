import { Interval } from "../utils/Interval";

const insertInterval = (intervals: Array<Interval>, newInterval: Interval): Array<Interval> => {
    const output: Array<Interval> = [];
    let i = 0;
    while (i < intervals.length && intervals[i].end < newInterval.start) {
        output.push(intervals[i]);
        i++;
    }
    output.push(newInterval);

    while (i < intervals.length) {
        const previousInterval = output[output.length - 1];
        const currentInterval = intervals[i];
        if (previousInterval.end >= currentInterval.start) {
        output[output.length - 1].start = Math.min(output[output.length - 1].start, currentInterval.start);
            output[output.length - 1].end = Math.max(output[output.length - 1].end, currentInterval.end);
        } else {
            output.push(currentInterval);
        }
        i++;
    }
    return output;
}