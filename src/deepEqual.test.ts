import deepEqual from './deepEqual';

it('test deepEqual', () => {
  const time = Date.now();
  const a = {
    a: [1234, { b: 'cdef', f: ['sdffsd', true, false, new Date(time)] }],
    c: undefined,
  };
  const a2 = {
    a: [1234, { b: 'cdef', f: ['sdffsd', true, false, new Date(time)] }],
  };
  const a1 = {
    a: [1234, { b: 'cdef', f: ['sdffsd', true, false, new Date(time)] }],
    c: undefined,
    d: 1234,
  };
  const b = {
    a: [1234, { b: 'cdef', f: ['sdffsd', true, false, new Date(time)] }],
    c: undefined,
  };
  const b1 = {
    a: [1234, { b: 'cdef', f: ['sdffsd', true, false, new Date(time)] }],
  };
  const b2 = {
    a: [
      1234,
      { b: 'cdef', f: ['sdffsd', true, false, new Date(time), undefined] },
    ],
    c: undefined,
  };
  const c = [123, { a: 23443, b: [1, 2, 3] }];
  const d = [123, { b: [1, 2, 3], a: 23443 }];
  const e = [123, { a: 234434, b: [1, 2, 3] }];
  const f = [123, { a: 234434, b: [1, 2, 3, 5] }];
  expect(deepEqual(a, b)).toBe(true);
  expect(deepEqual(c, d)).toBe(true);
  expect(deepEqual(d, e)).toBe(false);
  expect(deepEqual(e, f)).toBe(false);
  expect(deepEqual(a, a1)).toBe(false);
  expect(deepEqual(a, a2)).toBe(false);
  expect(deepEqual(b, b1)).toBe(false);
  expect(deepEqual(b1, b)).toBe(false);
  expect(deepEqual(b, b2)).toBe(false);
  expect(deepEqual(b2, b)).toBe(false);
});
