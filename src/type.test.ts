import * as typeModule from './type';

const {
  isInteger,
  isString,
  isDate,
  isObject,
  isNumber,
  isBoolean,
  isFunction,
  isArray,
  isAsyncFunction,
  notEmptyStr,
  isRegExp,
  notEmptyArray,
  notEmptyObject,
  isEmptyStr,
  isEmptyArray,
  isEmptyObject,
} = typeModule;

const arrow = () => {};
const asyncArrow = async () => {};
function func() {}
async function asyncFunc() {}
const target = [
  13,
  -13,
  0,
  -0,
  +0,
  0.3,
  Infinity,
  NaN,
  'string',
  new String('string'),
  true,
  new Boolean(true),
  null,
  undefined,
  {},
  {
    0: 0,
    1: 2,
    3: 4,
    length: 3,
  },
  {
    aaa: 1245,
  },
  [],
  [1, 2, 3, 4],
  new Date(),
  new RegExp(''),
  typeModule,
  arrow,
  asyncArrow,
  func,
  asyncFunc,
  '     ',
];
describe('type check', () => {
  it('isNumber', () => {
    const result = new Array(target.length).fill(false);
    result[0] = true;
    result[1] = true;
    result[2] = true;
    result[3] = true;
    result[4] = true;
    result[5] = true;
    expect(target.map(each => isNumber(each))).toEqual(result);
  });

  it('isInteger', () => {
    const result = new Array(target.length).fill(false);
    result[0] = true;
    result[1] = true;
    result[2] = true;
    result[3] = true;
    result[4] = true;
    expect(target.map(each => isInteger(each))).toEqual(result);
  });

  it('isString', () => {
    const result = new Array(target.length).fill(false);
    result[8] = true;
    result[9] = true;
    result[26] = true;
    expect(target.map(each => isString(each))).toEqual(result);
  });

  it('isDate', () => {
    const result = new Array(target.length).fill(false);
    result[19] = true;
    expect(target.map(each => isDate(each))).toEqual(result);
  });

  it('isObject', () => {
    const result = new Array(target.length).fill(false);
    result[14] = true;
    result[15] = true;
    result[16] = true;
    result[21] = true;
    expect(target.map(each => isObject(each))).toEqual(result);
  });

  it('isBoolean', () => {
    const result = new Array(target.length).fill(false);
    result[10] = true;
    result[11] = true;
    expect(target.map(each => isBoolean(each))).toEqual(result);
  });

  it('isFunction', () => {
    const result = new Array(target.length).fill(false);
    result[22] = true;
    result[23] = true;
    result[24] = true;
    result[25] = true;
    expect(target.map(each => isFunction(each))).toEqual(result);
  });

  it('isAsyncFunction', () => {
    const result = new Array(target.length).fill(false);
    result[23] = true;
    result[25] = true;
    expect(target.map(each => isAsyncFunction(each))).toEqual(result);
  });

  it('isArray', () => {
    const result = new Array(target.length).fill(false);
    result[17] = true;
    result[18] = true;
    expect(target.map((each: any) => isArray(each))).toEqual(result);
  });

  it('notEmptyStr', () => {
    const result = new Array(target.length).fill(false);
    result[8] = true;
    result[9] = true;
    expect(target.map(each => notEmptyStr(each))).toEqual(result);
  });

  it('isEmptyStr', () => {
    expect(isEmptyStr('')).toBe(true);
    expect(isEmptyStr('   ')).toBe(true);
    expect(isEmptyStr('      ')).toBe(true);
    expect(isEmptyStr('abcd      dffd')).toBe(false);
    expect(isEmptyStr([])).toBe(false);
    expect(isEmptyStr(null)).toBe(false);
    expect(isEmptyStr(undefined)).toBe(false);
  });

  it('isRegExp', () => {
    const result = new Array(target.length).fill(false);
    result[20] = true;
    expect(target.map(each => isRegExp(each))).toEqual(result);
  });

  it('notEmptyArray', () => {
    const result = new Array(target.length).fill(false);
    result[18] = true;
    expect(target.map(each => notEmptyArray(each))).toEqual(result);
  });

  it('isEmptyArray', () => {
    expect(isEmptyArray([])).toEqual(true);
    expect(isEmptyArray('')).toEqual(false);
  });

  it('notEmptyObject', () => {
    const result = new Array(target.length).fill(false);
    result[15] = true;
    result[16] = true;
    result[21] = true;
    expect(target.map(each => notEmptyObject(each))).toEqual(result);
  });

  it('isEmptyObject', () => {
    expect(isEmptyObject({})).toBe(true);
    expect(isEmptyObject(null)).toBe(false);
  });
});
