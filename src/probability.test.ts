import probability from './probability';

const helper = (num: number) => {
  const base = 99999;
  let hit = 0;
  for (let i = 0; i < base; i++) {
    if (probability(num)) {
      hit++;
    }
  }
  return hit / base;
};
it('error number', () => {
  expect(() => probability(-1)).toThrow();
  expect(() => probability(0)).toThrow();
  expect(() => probability(100)).toThrow();
  expect(() => probability(101)).toThrow();
});
it('probability 40%', () => {
  expect(Math.abs(helper(40) - 0.4) <= 0.1).toBe(true);
});

it('probability 30%', () => {
  expect(Math.abs(helper(30) - 0.3) <= 0.1).toBe(true);
});

it('probability 20.111%', () => {
  expect(Math.abs(helper(20.111) - 0.20111) <= 0.01).toBe(true);
});
