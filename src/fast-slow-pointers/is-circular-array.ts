const circularArrayLoopExists = function (arr: Array<number>): boolean {
  for (let i = 0; i < arr.length; i++) {
    const isForwardMovement = arr[i] >= 0;
    let slowPointer = i;
    let fastPointer = i;
    while (true) {
      slowPointer = calculateNextIndex(slowPointer, isForwardMovement, arr);
      fastPointer = calculateNextIndex(fastPointer, isForwardMovement, arr);
      if (fastPointer !== -1) {
        fastPointer = calculateNextIndex(fastPointer, isForwardMovement, arr);
      }
      if (
        slowPointer === -1 ||
        fastPointer === -1 ||
        slowPointer === fastPointer
      )
        break;
    }
    if (slowPointer === fastPointer && fastPointer !== -1) return true;
  }
  return false;
};

const calculateNextIndex = (
  currentIndex: number,
  movement: boolean,
  array: Array<number>
): number => {
  if (movement !== array[currentIndex] >= 0) return -1;
  let nextIndex = (currentIndex + array[currentIndex]) % array.length;
  if (nextIndex < 0) {
    nextIndex += array.length;
  }
  if (nextIndex === currentIndex) return -1;
  return nextIndex;
};
