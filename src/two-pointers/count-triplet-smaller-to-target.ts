/**
 * https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO
 * @param input
 * @param target
 * @returns
 */
const countTripletSmallerThanTarget = (
  input: Array<number>,
  target: number
): number => {
  let result = 0;
  input.sort((a, b) => a - b);

  for (let i = 0; i < input.length - 2; i++) {
    let left = i + 1;
    let right = input.length - 1;

    while (left < right) {
      const currentSum = input[i] + input[left] + input[right];
      if (target - currentSum > 0) {
        result += right - left;
        left++;
      } else if (target - currentSum <= 0) {
        right--;
      }
    }
  }

  return result;
};
