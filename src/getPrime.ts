export default function getPrime(max: number): number[] {
  const isPrime = new Array(max).fill(true);
  for (let i = 2; i < max; i++) {
    if (isPrime[i]) {
      for (let j = 2; i * j <= max; j++) {
        isPrime[i * j] = false;
      }
    }
  }
  return isPrime.reduce((acc, isPrimse, index) => {
    if (index >= 2 && isPrimse) {
      acc.push(index);
    }
    return acc;
  }, []);
}
