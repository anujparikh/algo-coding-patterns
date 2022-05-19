function trap(height: number[]): number {
  let output = 0;
  let maxLeft = -Infinity;
  let maxRight = -Infinity;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxLeft = Math.max(maxLeft, height[left]);
    maxRight = Math.max(maxRight, height[right]);

    if (maxLeft <= maxRight) {
      if (left !== 0) {
        output += maxLeft - height[left];
      }
      left++;
    } else {
      if (right !== height.length - 1) {
        output += maxRight - height[right];
      }
      right--;
    }
  }
  return output;
}
