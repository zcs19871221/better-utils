import LRUCache from './lrucache';

it('lru', () => {
  const lru = new LRUCache(2);
  lru.put(1, 1);
  lru.put(2, 2);
  expect(lru.get(1)).toBe(1);
  lru.put(3, 3);
  expect(lru.get(2)).toBe(null);
  lru.put(4, 4);
  expect(lru.get(1)).toBe(null);
  expect(lru.get(3)).toBe(3);
  expect(lru.get(4)).toBe(4);
});

it('lru with 2 second persist', () => {
  const lru = new LRUCache(2);
  lru.put(1, 1);
  lru.put(2, 2);
  expect(lru.get(1)).toBe(1);
  setTimeout(() => {
    expect(lru.get(1)).toBe(null);
  }, 3 * 1000);
  setTimeout(() => {
    lru.put(2, 3);
    setTimeout(() => {
      expect(lru.get(2)).toBe(3);
    }, 1500);
  }, 1500);
});

it('lru persisit outtdate', () => {
  const lru = new LRUCache(1, 1000);
  lru.put(1, 1);
  setTimeout(() => {
    lru.get(1);
  }, 800);
  setTimeout(() => {
    expect(lru.get(1)).toBe(null);
  }, 1500);
});
