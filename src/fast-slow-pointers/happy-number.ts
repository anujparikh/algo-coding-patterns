const happyNumber = (input: number): boolean => {
  const uniqueNumbers = new Set();
  while (input !== 1) {
    input = squareOfDigits(input);
    if (uniqueNumbers.has(input)) {
      return false;
    }
    uniqueNumbers.add(input);
  }
  return true;
};

const squareOfDigits = (input: number): number => {
  let sum = 0;
  while (input > 0) {
    const lastDigit = input % 10;
    sum += Math.pow(lastDigit, 2);
    input = ~~(input / 10);
  }
  return sum;
};
