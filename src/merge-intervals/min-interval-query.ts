// timing out for big input on leetcode
function minInterval(intervals: number[][], queries: number[]): number[] {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    const queriesWithIndex = queries.map((q, i) => [q, i]);

    queriesWithIndex.sort((a, b) => a[0] - b[0]);

    const intervalSizes: number[] = [];
    for (let i = 0; i < intervals.length; i++) {
        intervalSizes.push(calculateSize(intervals[i]));
    }

    const result = new Array(queries.length);
    for (let i = 0; i < queriesWithIndex.length; i++) {
        const searchedIndexSize = intervalSizes[searchSmallestContainingInterval(intervals, queriesWithIndex[i][0], intervalSizes)] || -1;
        result[queriesWithIndex[i][1]] = searchedIndexSize;
    }

    return result;
};

const calculateSize = (interval: number[]): number => {
    return interval[1] - interval[0] + 1;
}

const searchSmallestContainingInterval = (intervals: number[][], input: number, intervalSizes: number[]): number => {
    let foundIndex = -1;
    let counter = 0;
    while (counter < intervals.length && intervals[counter][0] <= input) {
        if (intervals[counter][0] <= input && intervals[counter][1] >= input) {
            foundIndex = foundIndex === -1 ? counter : intervalSizes[counter] < intervalSizes[foundIndex] ? counter : foundIndex;
        };
        counter++;
    }
    return foundIndex;
}