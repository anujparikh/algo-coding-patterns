import { Interval } from "../utils/Interval";

const conflictingAppointments = (intervals: Array<Interval>): boolean => {
    const sortedIntervals = intervals.sort((a, b) => a.start - b.start);
    let i = 1;
    while (i < sortedIntervals.length) {
        const previousInterval = sortedIntervals[i - 1];
        const currentInterval = sortedIntervals[i];
        if (previousInterval.end > currentInterval.start) {
            return false;
        }
        i++;
    }
    return true;
}