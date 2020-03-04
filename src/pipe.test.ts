import pipe from './pipe';

describe('pipe', () => {
  it('pipe with first two args', () => {
    const a = (value1: any, value2: any) => `${value1}a${value2}`;
    const b = (value: any) => `${value}b`;
    const c = (value: any) => `${value}c`;
    const fn = pipe(a, b, c);
    expect(fn('start', 'end')).toBe('startaendbc');
  });

  it('pipe with first one args', () => {
    const a = (value1: any) => `${value1}a`;
    const b = (value: any) => `${value}b`;
    const c = (value: any) => `${value}c`;
    const fn = pipe(a, b, c);
    expect(fn('start')).toBe('startabc');
  });
});
