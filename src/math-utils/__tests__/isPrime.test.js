import isPrime from '../isPrime';

test('tests isPrime function', () => {
  [
    -2,
    -999999,
    0,
    1,
    7.1,
  ].forEach((n) => {
    expect(isPrime(n)).toBe(false);
  });

  [
    2,
    3,
    5,
    7,
    4289,
    5179,
    7727,
    7919,
  ].forEach((n) => {
    expect(isPrime(n)).toBe(true);
  });
});
