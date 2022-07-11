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

const commonFreeTimeUsingMinHeap = (schedules: Array<Array<Interval>>): Array<Interval> => {
    const commonIntervals: Array<Interval> = [];
    const minHeap = new Heap([], null, (a: EmployeeSchedule, b: EmployeeSchedule) => b.interval.start - a.interval.start)
    for (let i = 0; i < schedules.length; i++) {
        minHeap.push({ interval: schedules[i][0], employeeNumber: i, currentInterval: 0 })
    }
    while (minHeap.length !== 0) {
        let previous = minHeap.pop();
        let current = minHeap.peek() && minHeap.pop();
        if (previous.interval.end >= current.interval.start) {
            previous = current;
            minHeap.push(current);
        } else {
            commonIntervals.push(new Interval(previous.interval.end, current.interval.start));
            previous.currentInterval + 1 < schedules[previous.employeeNumber].length && minHeap.push({ interval: schedules[previous.employeeNumber][previous.currentInterval + 1], employeeNumber: previous.employeeNumber, currentInterval: previous.currentInterval + 1 });
            current.currentInterval + 1 < schedules[current.employeeNumber].length && minHeap.push({ interval: schedules[current.employeeNumber][current.currentInterval + 1], employeeNumber: current.employeeNumber, currentInterval: current.currentInterval + 1 });
        }
    }
    return commonIntervals;
}