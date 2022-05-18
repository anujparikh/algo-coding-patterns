/**
 * https://leetcode.com/problems/container-with-most-water/
 */
function maxArea(height: number[]): number {
  let maxVolume = -Infinity;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (height[left] > height[right]) {
      maxVolume = Math.max(maxVolume, (right - left) * height[right]);
      right--;
    } else {
      maxVolume = Math.max(maxVolume, (right - left) * height[left]);
      left++;
    }
  }

  return maxVolume;
}
