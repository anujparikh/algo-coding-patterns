function isAnagram(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false;
    const charMap: { [key: string]: number } = {};
    for (let i = 0; i < s1.length; i++) {
        charMap[s1[i]] = (charMap[s1[i]] || 0) + 1;
        charMap[s2[i]] = (charMap[s2[i]] || 0) - 1;

        if (charMap[s1[i]] === 0) delete charMap[s1[i]];
        if (charMap[s2[i]] === 0) delete charMap[s2[i]];
    }
    return Object.keys(charMap).length === 0;
};