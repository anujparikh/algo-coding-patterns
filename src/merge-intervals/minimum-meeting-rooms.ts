import Heap from 'collections/heap'; //http://www.collectionsjs.com
import { Interval } from '../utils/Interval';

const minimumMeetingRooms = (meetTimings: Array<Interval>): number => {
    let result = 1;
    if (meetTimings.length <= 1) {
        return meetTimings.length;
    }
    const sortedMeetTimings = meetTimings.sort((a, b) => a.start - b.start);
    const minHeap = new Heap([], null, (a: Interval, b: Interval) => {
        return b.end - a.end;
    });
    minHeap.push(sortedMeetTimings[0]);
    let counter = 1;
    while (counter < sortedMeetTimings.length) {
        while (minHeap.length > 0 && minHeap.peek().end <= sortedMeetTimings[counter].start) {
            minHeap.pop();
        }
        minHeap.push(sortedMeetTimings[counter]);
        counter++;
        result = Math.max(result, minHeap.length);
    }
    return result;
}