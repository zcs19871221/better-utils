const pipe = (...fns: any[]) => (...args: any) =>
  fns.reduce((acc, fn, index) => {
    if (index === 0) {
      return fn(...acc);
    }
    return fn(acc);
  }, args);
export default pipe;
