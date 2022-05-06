const dutchFlagSort = (arr: Array<number>): void => {
  let low = 0;
  let i = 0;
  let high = arr.length - 1;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      i++;
      low++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    }
  }
};
