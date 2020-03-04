const { hasOwnProperty: nativeHaveOwn } = Object.prototype;

function hasOwnProperty(target: object, property: string): boolean;
function hasOwnProperty(target: any[], property: number): boolean;
function hasOwnProperty(obj: any, property: any): boolean {
  return nativeHaveOwn.call(obj, property);
}
export default hasOwnProperty;
