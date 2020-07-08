import PriorityQueue from './priority_queue';

it('priority queue', () => {
  const list = [9, 8, 7, 10, 3, 6, 5, 4, 2, 11];
  const q = new PriorityQueue<number>(list);
  expect(q['stack']).toEqual([2, 3, 5, 4, 9, 8, 6, 10, 7, 11]);
  expect(q.peek()).toBe(2);
  expect(q.poll()).toBe(2);
  expect(q.poll()).toBe(3);
  expect(q.poll()).toBe(4);
  expect(q.poll()).toBe(5);
  q.add(1);
  expect(q.poll()).toBe(1);
  expect(q.poll()).toBe(6);
  expect(q.poll()).toBe(7);
  expect(q.poll()).toBe(8);
  expect(q.poll()).toBe(9);
  expect(q.poll()).toBe(10);
  expect(q.isEmpty()).toBe(false);
  expect(q.poll()).toBe(11);
  expect(q.poll()).toBe(null);
  expect(q.poll()).toBe(null);
  expect(q.isEmpty()).toBe(true);
});

it('priority queue remove', () => {
  const list = [1, 100, 3, 105, 106, 7, 8, 200, 201, 202, 203, 9];
  const q = new PriorityQueue<number>(list);
  q.remove(105);
  expect(q['stack']).toEqual([1, 9, 3, 100, 106, 7, 8, 200, 201, 202, 203]);
});
it('priority comparator', () => {
  const list = [-1, 4, 6, 8, -4, 6, -6, 3, -2, 3, -3, -8];
  const q = new PriorityQueue<number>(
    list,
    (a, b) => Math.abs(b) - Math.abs(a),
  );
  const result = [];
  while (!q.isEmpty()) {
    result.push(q.poll());
  }
  expect(result).toEqual([8, -8, 6, 6, -6, -4, 4, 3, -3, 3, -2, -1]);
});
