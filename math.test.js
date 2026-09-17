const sum = require('./math');

test('Phep cong 1 + 2 phai bang 3', () => {
  expect(sum(1, 2)).toBe(3);
});