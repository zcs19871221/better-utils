import pipe from './pipe';

describe('pipe', () => {
  it('pipe with first two args', () => {
    const a = (value1, value2) => `${value1}a${value2}`;
    const b = value => `${value}b`;
    const c = value => `${value}c`;
    const fn = pipe(a, b, c);
    expect(fn('start', 'end')).toBe('startaendbc');
  });

  it('pipe with first one args', () => {
    const a = value1 => `${value1}a`;
    const b = value => `${value}b`;
    const c = value => `${value}c`;
    const fn = pipe(a, b, c);
    expect(fn('start')).toBe('startabc');
  });
});
