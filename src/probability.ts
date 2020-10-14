import random from './random';

export default function probability(percentage: number): boolean {
  if (percentage >= 100 || percentage <= 0) {
    throw new Error('输入0到100数字');
  }
  let base = 100;
  let dotLength = (String(percentage).split('.')[1] || '').length;
  while (dotLength-- > 0) {
    percentage *= 10;
    base *= 10;
  }
  if (random('[', ')', 0, base) < percentage) {
    return true;
  }
  return false;
}
