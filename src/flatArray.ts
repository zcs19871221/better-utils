const flatArray = (source: any[]) => {
  const stack = [source];
  const target = [];
  while (stack.length > 0) {
    const cur = stack.pop();
    if (Array.isArray(cur)) {
      cur.forEach(each => stack.push(each));
    } else {
      target.unshift(cur);
    }
  }
  return target;
};

export default flatArray;
