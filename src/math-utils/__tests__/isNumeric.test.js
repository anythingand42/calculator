import isNumeric from '../isNumeric';

test('tests isNumeric function', () => {
  [
    '',
    '123,123',
    '123 123',
    ' 123',
    '123.',
    '123 ',
  ].forEach((str) => {
    expect(isNumeric(str)).toBe(false);
  });

  [
    '123',
    '-123',
    '123.123',
    '-123.0',
  ].forEach((str) => {
    expect(isNumeric(str)).toBe(true);
  });
});
