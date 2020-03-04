import bs from './bs';

describe('bs', () => {
  it('bs', () => {
    expect(bs([1, 2, 3, 4], 1)).toBe(0);
    expect(bs([1, 2, 3, 4], -1)).toBe(0);
    expect(bs([1, 2, 3, 4], 3)).toBe(2);
    expect(bs([1, 2, 3, 4], 3.5)).toBe(3);
    expect(bs([1, 2, 3, 3, 4], 3)).toBe(2);
  });
});
