/* eslint-disable no-new-func */
export default function(): 'node' | 'browser' {
  const isNode = new Function(
    'try {return this===global;}catch(e){return false;}',
  );
  if (isNode()) {
    return 'node';
  }
  return 'browser';
}
