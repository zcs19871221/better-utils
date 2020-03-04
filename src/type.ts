enum Types {
  'String',
  'Object',
  'Module',
  'Boolean',
  'AsyncFunction',
  'Date',
  'RegExp',
}
const { toString } = Object.prototype;
const typeChecker = (type: keyof typeof Types) => (value: any) =>
  toString.call(value) === `[object ${type}]`;

const isString = typeChecker('String');

const isArray = (value: any[]) => Array.isArray(value);

const isObject = typeChecker('Object');

const isEsModule = typeChecker('Module');

const isBoolean = typeChecker('Boolean');

const isAsyncFunction = typeChecker('AsyncFunction');

const isFunction = (value: any) => typeof value === 'function';

const isDate = typeChecker('Date');

const isNumber = (value: any) =>
  toString.call(value) === '[object Number]' &&
  !Number.isNaN(value) &&
  Number.isFinite(value);

const isInteger = (value: any) => Number.isInteger(value);

const isRegExp = typeChecker('RegExp');

const notEmptyStr = (value: any) => isString(value) && !/^\s*$/u.test(value);

const isEmptyStr = (value: any) => isString(value) && /^\s*$/u.test(value);

const notEmptyArray = (value: any) => isArray(value) && value.length > 0;

const isEmptyArray = (value: any) => isArray(value) && value.length === 0;

const notEmptyObject = (value: any) =>
  isObject(value) && Object.keys(value).length > 0;

const isEmptyObject = (value: any) =>
  isObject(value) && Object.keys(value).length === 0;

const isTypedArray = (value: any) =>
  /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/u.test(
    toString.call(value),
  );

export {
  isNumber,
  isInteger,
  isString,
  isBoolean,
  isObject,
  isArray,
  isDate,
  isEsModule,
  isFunction,
  isAsyncFunction,
  isTypedArray,
  isRegExp,
  notEmptyStr,
  notEmptyArray,
  notEmptyObject,
  toString,
  isEmptyStr,
  isEmptyArray,
  isEmptyObject,
};
