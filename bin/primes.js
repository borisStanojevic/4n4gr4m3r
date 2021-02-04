const isPrime = (number) => {
  if (number === 2 || number === 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  let divisor = 6;
  while (divisor * divisor - 2 * divisor + 1 <= number) {
    if (number % (divisor - 1) == 0) return false;

    if (number % (divisor + 1) == 0) return false;

    divisor += 6;
  }

  return true;
};

const generateNextPrime = (lastPrime) => {
  while (!isPrime(++lastPrime));

  return lastPrime;
};

module.exports = { generateNextPrime };
