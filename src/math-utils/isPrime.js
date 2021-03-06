function isPrime(num) {
  if (!Number.isInteger(num)) return false;

  if (num <= 3) return num > 1;

  if ((num % 2 === 0) || (num % 3 === 0)) return false;

  let count = 5;

  while (count ** 2 <= num) {
    if (num % count === 0 || num % (count + 2) === 0) return false;
    count += 6;
  }

  return true;
}

export default isPrime;
