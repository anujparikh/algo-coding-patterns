import { Interval } from "../utils/Interval";
import Heap from 'collections/heap'; //http://www.collectionsjs.com

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

type EmployeeSchedule = {
    interval: Interval,
    employeeNumber: number,
    currentInterval: number
}

class EmployeeInterval {
    interval: Interval;
    employeeIndex: number;
    intervalIndex: number;

    constructor(interval, employeeIndex, intervalIndex) {
        this.interval = interval; // interval representing employee's working hours
        // index of the list containing working hours of this employee
        this.employeeIndex = employeeIndex;
        this.intervalIndex = intervalIndex; // index of the interval in the employee list
    }
}

const commonFreeTimeUsingMinHeap = (schedules: Array<Array<Interval>>): Array<Interval> => {
    let n = schedules.length;
    const result: Array<Interval> = [];
    if (schedules === null || n === 0) {
        return result;
    }
    const minHeap = new Heap([], null, ((a: EmployeeInterval, b: EmployeeInterval) => b.interval.start - a.interval.start));
    // insert the first interval of each employee to the queue
    for (let i = 0; i < n; i++) {
        minHeap.push(new EmployeeInterval(schedules[i][0], i, 0));
    }
    let previousInterval = minHeap.peek().interval;
    while (minHeap.length > 0) {
        const queueTop = minHeap.pop();
        // if previousInterval is not overlapping with the next interval, insert a free interval
        if (previousInterval.end < queueTop.interval.start) {
            result.push(new Interval(previousInterval.end, queueTop.interval.start));
            previousInterval = queueTop.interval;
        } else { // overlapping intervals, update the previousInterval if needed
            if (previousInterval.end < queueTop.interval.end) {
                previousInterval = queueTop.interval;
            }
        }
        // if there are more intervals available for(the same employee, add their next interval
        const employeeSchedule = schedules[queueTop.employeeIndex];
        if (employeeSchedule.length > queueTop.intervalIndex + 1) {
            minHeap.push(new EmployeeInterval(
                employeeSchedule[queueTop.intervalIndex + 1], queueTop.employeeIndex,
                queueTop.intervalIndex + 1,
            ));
        }
    }
    return result;
}