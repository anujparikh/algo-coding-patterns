import { Interval } from "../utils/Interval";

const intervalsIntersection = (intervalsA: Array<Interval>, intervalsB: Array<Interval>): Array<Interval> => {
    const intersection: Array<Interval> = [];
    let pointerA = 0;
    let pointerB = 0;

    while (pointerA < intervalsA.length && pointerB < intervalsB.length) {
        const aOverlapsB = intervalsA[pointerA].start <= intervalsB[pointerB].start && intervalsA[pointerA].end >= intervalsB[pointerB].start;
        const bOverlapsA = intervalsB[pointerB].start <= intervalsA[pointerA].start && intervalsB[pointerB].end >= intervalsA[pointerA].start;
        if (aOverlapsB || bOverlapsA) {
            intersection.push(new Interval(Math.max(intervalsA[pointerA].start, intervalsB[pointerB].start), Math.min(intervalsA[pointerA].end, intervalsB[pointerB].end)));
        }
        intervalsA[pointerA].end < intervalsB[pointerB].end ? pointerA++ : pointerB++;
    }
    return intersection;
}