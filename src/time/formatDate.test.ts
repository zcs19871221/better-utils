import formatDate from './formatDate';

describe('formatDate', () => {
  // 2019-11-29T14:42:24.765Z
  const value = 1575009744765;
  const smalValue = 1561917722000;
  it('formatDate', () => {
    expect(formatDate(value, 'YYYY')).toBe('2019');
    expect(formatDate(value, 'YYYY-MM')).toBe('2019-11');
    expect(formatDate(value, 'YYYY-MM-DD')).toBe('2019-11-29');
    expect(formatDate(value, 'YYYY-MM-DD/hh')).toBe('2019-11-29/14');
    expect(formatDate(value, 'YYYY-MM-DD/hh:mm')).toBe('2019-11-29/14:42');
    expect(formatDate(value, 'YYYY-MM-DD/hh:mm:ss')).toBe(
      '2019-11-29/14:42:24',
    );
    expect(formatDate(smalValue, 'YYYY-MM-DD/hh:mm:ss')).toBe(
      '2019-07-01/02:02:02',
    );
    expect(formatDate(smalValue, 'YY-M-D/h:m:s')).toBe('19-7-1/2:2:2');
  });
});
