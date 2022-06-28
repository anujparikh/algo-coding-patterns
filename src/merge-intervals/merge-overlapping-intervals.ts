import { Interval } from "../utils/Interval";

const mergeOverlappingIntervals = (intervals: Array<Interval>): Array<Interval> => {
    intervals.sort((a, b) => a.start - b.start);
    const mergedIntervals: Array<Interval> = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const previousInterval = mergedIntervals[mergedIntervals.length - 1];
        const currentInterval = intervals[i];
        if (previousInterval.end >= currentInterval.start) {
            mergedIntervals[mergedIntervals.length - 1].end = Math.max(mergedIntervals[mergedIntervals.length - 1].end, currentInterval.end);
        } else {
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
}