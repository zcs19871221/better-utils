import random from './random';

describe('random', () => {
  it('random [5, 13]', () => {
    for (let i = 0; i < 1000; i++) {
      const res = random('[', ']', 5, 13);
      expect(res >= 5 && res <= 13).toBe(true);
    }
  });

  it('random (5, 13]', () => {
    for (let i = 0; i < 1000; i++) {
      const res = random('(', ']', 5, 13);
      expect(res > 5 && res <= 13).toBe(true);
    }
  });
  it('random (5, 13)', () => {
    for (let i = 0; i < 1000; i++) {
      const res = random('(', ')', 5, 13);
      expect(res > 5 && res < 13).toBe(true);
    }
  });

  it('random [5, 13)', () => {
    for (let i = 0; i < 1000; i++) {
      const res = random('[', ')', 5, 13);
      expect(res >= 5 && res < 13).toBe(true);
    }
  });
});
