const removeDuplicates = (arr: Array<number>): number => {
  let firstPointer = 0;
  let secondPointer = 0;

  while (secondPointer < arr.length) {
    if (arr[firstPointer] !== arr[secondPointer]) {
      firstPointer++;
      arr[firstPointer] = arr[secondPointer];
    }
    secondPointer++;
  }

  return firstPointer + 1;
};
