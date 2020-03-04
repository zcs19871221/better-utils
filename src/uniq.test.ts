import uniq from './uniq';

describe('uniq', () => {
  it('uniq', () => {
    expect(uniq([1, 1, 2, 3, 4, 5, 2, 3])).toEqual([1, 2, 3, 4, 5]);
    const foo = {};
    expect(uniq([foo, foo, foo, '1', '2', 1, 2, 1])).toEqual([
      foo,
      '1',
      '2',
      1,
      2,
    ]);
  });
});
