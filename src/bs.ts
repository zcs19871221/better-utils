export default (function binaySearch<T>(
  ar: T[],
  target: any,
  getValue?: (ar: T[], index: number) => any,
): number {
  if (Array.isArray(ar)) {
    let start = 0;
    let end = ar.length;
    while (start < end) {
      const mid = start + Math.floor((end - start) / 2);
      const value = getValue ? getValue(ar, mid) : ar[mid];
      if (target > value) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return start;
  }
  return -1;
});
