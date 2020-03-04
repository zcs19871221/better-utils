import flatArray from './flatArray';

describe('flatArray', () => {
  it('flatArray', () => {
    expect(flatArray([1, 2, 3, 4, [5, [6, 7, [8, 9]]]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });
});
