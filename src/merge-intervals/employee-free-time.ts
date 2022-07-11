import { Interval } from "../utils/Interval";

const commonFreeTime = (schedules: Array<Array<Interval>>): Array<Interval> => {
    const commonIntervals: Array<Interval> = [];
    const combinedSchedules: Array<Interval> = schedules.reduce((previous: Array<Interval>, current: Array<Interval>): Array<Interval> => [...previous, ...current], [])
    combinedSchedules.sort((a, b) => a.start - b.start);
    let counter = 1;
    while (counter < combinedSchedules.length) {
        let previous = combinedSchedules[counter - 1];
        let current = combinedSchedules[counter];
        if (previous.end < current.start) {
            commonIntervals.push(new Interval(previous.end, current.start));
        }
        counter++;
    }
    return commonIntervals;
}