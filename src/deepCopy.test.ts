/* eslint-disable */
import deepCopy from './deepCopy';

it('test deepCopy', () => {
  const date = new Date();
  const tt = date.getTime();
  const obj = <any>{
    a: ['abvcd', { b: 134, f: [date] }],
  };
  const b = <any>[{ a: 1234 }, [2, 3, 4, 6], [{}, []]];
  const copyEdObj = deepCopy(obj);
  const copyB = deepCopy(b);
  obj.a[0] = 1;
  obj.a[1].b = 23456;
  obj.a[1].f[0].setDate(22);
  b[0].a = 32332;
  b[1][3] = 7788;
  expect(JSON.stringify(copyEdObj)).toBe(
    JSON.stringify({
      a: ['abvcd', { b: 134, f: [new Date(tt)] }],
    }),
  );
  expect(JSON.stringify(copyB)).toBe(
    JSON.stringify([{ a: 1234 }, [2, 3, 4, 6], [{}, []]]),
  );
});
