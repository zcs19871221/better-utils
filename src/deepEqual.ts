import { isObject, isArray, isDate, toString } from './type';
import hasOwnProperty from './hasOwnProperty';

const deepEqual = (src: any, dest: any): boolean => {
  if (toString.call(src) !== toString.call(dest)) {
    return false;
  }
  if (isObject(src)) {
    if (Object.keys(src).length !== Object.keys(dest).length) {
      return false;
    }
    return Object.entries(src).every(([key, value]) => {
      if (value === undefined && dest[key] === value) {
        return hasOwnProperty(dest, key);
      }
      return deepEqual(value, dest[key]);
    });
  }
  if (isArray(src)) {
    if (src.length !== dest.length) {
      return false;
    }
    return src.every((each: any, index: number) =>
      deepEqual(each, dest[index]),
    );
  }
  if (isDate(src)) {
    return src.getTime() === dest.getTime();
  }
  return src === dest;
};

export default deepEqual;
