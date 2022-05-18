/**
 * https://leetcode.com/problems/valid-palindrome/
 */
function isPalindrome(s: string): boolean {
  const convertedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let start = 0;
  let end = convertedString.length - 1;
  while (start <= end) {
    if (convertedString[start] !== convertedString[end]) return false;
    start++;
    end--;
  }
  return true;
}
