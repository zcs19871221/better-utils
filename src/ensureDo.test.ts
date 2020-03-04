import ensureDo from './ensureDo';

it('success', async () => {
  const fn = ensureDo((a, b) => a + b);
  const promiseFn = ensureDo(
    value =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(value + 1);
        }, 2000);
      }),
  );
  const res1 = await fn(1, 2);
  const res2 = await promiseFn(3);
  expect(res1).toBe(3);
  expect(res2).toBe(4);
});

it('retry', async () => {
  let index = 0;
  const fn = (input: any) => {
    index++;
    if (index <= 2) {
      throw new Error('fsdffsd');
    }
    return input + 'success';
  };
  const res = await ensureDo(fn, 2)(1);
  try {
    await ensureDo(fn, 1)(1);
  } catch (error) {
    expect(error instanceof Error).toBe(true);
  }
  expect(res).toBe('1success');
});
