/* eslint-disable no-plusplus,id-length,max-lines-per-function */

const hasOwnProperty = require('./hasOwnProperty');

describe('hasOwnProperty', () => {
  it('hasOwnProperty', () => {
    class Person {
      name: any;
      constructor(name) {
        this.name = name;
      }

      eat() {
        console.log(this.name);
      }
    }
    const zcs = new Person('zcs');
    expect(hasOwnProperty(zcs, 'name')).toBe(true);
    expect(hasOwnProperty(zcs, 'eat')).toBe(false);
  });
});
