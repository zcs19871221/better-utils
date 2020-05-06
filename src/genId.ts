import random from './random';

export default function genId(len: number = 6): string {
  let id = '';
  for (let i = 0; i < len; i++) {
    const type = random('[', ']', 0, 2);
    if (type === 0) {
      id += String.fromCharCode(random('[', ']', 0, 9) + '0'.charCodeAt(0));
    } else if (type === 1) {
      id += String.fromCharCode(random('[', ']', 0, 25) + 'a'.charCodeAt(0));
    } else if (type === 2) {
      id += String.fromCharCode(random('[', ']', 0, 25) + 'A'.charCodeAt(0));
    }
  }
  return id;
}
