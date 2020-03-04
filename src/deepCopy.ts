import { isObject, isArray, isDate } from './type';

function deepCopy(src: any): any {
  if (isObject(src)) {
    const dest: {
      [prop: string]: any;
    } = {};
    Object.entries(src).forEach(([key, value]) => {
      dest[key] = deepCopy(value);
    });
    return dest;
  }
  if (isArray(src)) {
    const dest: any[] = [];
    src.forEach((each: any, index: number) => {
      dest[index] = deepCopy(each);
    });
    return dest;
  }
  if (isDate(src)) {
    return new Date(src.getTime());
  }
  return src;
}

export default deepCopy;
