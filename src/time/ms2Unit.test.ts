/* eslint-disable no-plusplus,id-length,max-lines-per-function */

import ms2Unit from './ms2Unit';

describe('ms2Unit', () => {
  it('ms2Unit', () => {
    expect(ms2Unit(0.3)).toBe('0.3毫秒');
    expect(ms2Unit(15)).toBe('15毫秒');
    expect(ms2Unit(1000)).toBe('1秒');
    expect(ms2Unit(1002)).toBe('1秒又2毫秒');
    expect(ms2Unit(60 * 1000)).toBe('1分钟');
    expect(ms2Unit(69999)).toBe('1分钟又9秒又999毫秒');
    expect(ms2Unit(69999, '', '毫秒')).toBe('1分钟9秒');
    expect(ms2Unit(69999, '', '分钟')).toBe('1分钟');
    expect(ms2Unit(69999, '', '小时')).toBe('1分钟');
    expect(ms2Unit(60001)).toBe('1分钟又1毫秒');
    expect(ms2Unit(60001)).toBe('1分钟又1毫秒');
    expect(ms2Unit(120001)).toBe('2分钟又1毫秒');
    expect(ms2Unit(60 * 60 * 1000)).toBe('1小时');
    expect(ms2Unit(60 * 60 * 1000 * 24)).toBe('1天');
    expect(ms2Unit(60 * 60 * 1000 * 24 * 365)).toBe('1年');
    expect(ms2Unit(60 * 60 * 1000 * 24 * 365, '', '小时')).toBe('1年');
    expect(ms2Unit(60 * 60 * 1000 * 24 * 365 + 24 * 60 * 60 * 1000)).toBe(
      '1年又1天',
    );
    expect(ms2Unit(60 * 60 * 1000 * 24 * 365 * 100)).toBe('1世纪');
    expect(ms2Unit(10 * 100 * 365 * 24 * 60 * 60 * 1000)).toBe('1千年');
  });
});
