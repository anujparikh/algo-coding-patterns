function groupAnagrams(strs: string[]): string[][] {
    const result: string[][] = [];
    const grouping: { [key: string]: string[] } = strs.map((str: string) => {
        return [str.split('').sort().join(''), str]
    }).reduce((p, c) => {
        p[c[0]] = p[c[0]] ? [...p[c[0]], c[1]] : [c[1]]
        return p;
    }, {});
    Object.keys(grouping).forEach(k => result.push(grouping[k]))
    return result;
};