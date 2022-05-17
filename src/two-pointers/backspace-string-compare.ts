/**
 * https://leetcode.com/problems/backspace-string-compare/
 */
function backspaceCompare(s: string, t: string): boolean {
  return finalString(s) === finalString(t);
}

const finalString = (str: string): string => {
  const strArr = str.split("");
  let p1 = -1;
  let p2 = 0;

  while (p2 < strArr.length) {
    if (p1 < -1) {
      p1 = -1;
    }
    if (strArr[p2] !== "#") {
      p1++;
      strArr[p1] = strArr[p2];
      p2++;
    } else {
      p1--;
      p2++;
    }
  }
  return strArr.join("").substring(0, p1 + 1);
};
