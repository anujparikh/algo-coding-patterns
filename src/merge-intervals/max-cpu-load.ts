import Heap from 'collections/heap'; //http://www.collectionsjs.com
export class Job {
    start: number;
    end: number;
    cpuLoad: number;

    constructor(start: number, end: number, cpuLoad: number) {
        this.start = start;
        this.end = end;
        this.cpuLoad = cpuLoad;
    }
}

const maxCpuLoad = (jobs: Array<Job>): number => {
    if (jobs.length === 0) return 0;
    if (jobs.length === 1) return jobs[0].cpuLoad;

    const sortedJobs = jobs.sort((a: Job, b: Job) => a.start - b.start);
    let maxLoad = sortedJobs[0].cpuLoad;
    let currentLoad = sortedJobs[0].cpuLoad;
    const loadHeap = new Heap([], null, (a: Job, b: Job) => b.end - a.end);
    let counter = 1;
    loadHeap.push(jobs[0]);
    while (counter < jobs.length) {
        while (loadHeap.length > 0 && loadHeap.peek().end <= sortedJobs[counter].start) {
            const popedLoad = loadHeap.pop();
            currentLoad -= popedLoad.cpuLoad;
        }
        loadHeap.push(sortedJobs[counter]);
        currentLoad += sortedJobs[counter].cpuLoad;
        counter++;
        maxLoad = Math.max(maxLoad, currentLoad);
    }

    return maxLoad;
}