import bs from '../bs';

enum Unit {
  '毫秒',
  '秒',
  '分钟',
  '小时',
  '天',
  '年',
  '世纪',
  '千年',
}
interface Config {
  name: keyof typeof Unit;
  value: number;
}
const config: Config[] = [
  { name: '毫秒', value: 1 },
  { name: '秒', value: 1000 },
  { name: '分钟', value: 60 },
  { name: '小时', value: 60 },
  { name: '天', value: 24 },
  { name: '年', value: 365 },
  { name: '世纪', value: 100 },
  { name: '千年', value: 10 },
];
const units = config.reduce((acc: Config[], { name, value }) => {
  if (acc.length) {
    value *= acc[acc.length - 1].value;
  }
  acc.push({ name, value });
  return acc;
}, []);
const helper = (time: number,
  join: string,
  keepLen: number, times: number) => {
  if (time <= 1) {
    return `${time}${units[0].name}`;
  }
  if (!Number.isInteger(time)) {
    return '';
  }
  let findedIndex = bs<Config>(units, time, (ar, index) => ar[index].value);
  if (time !== units[findedIndex].value) {
    findedIndex = Math.max(0, findedIndex - 1);
  }
  const { name, value } = units[findedIndex];
  const timeNum = Math.floor(time / value);
  if (timeNum <= 0) {
    return `${value}${name}`;
  }
  let left = '';
  if (time % value > 0 && times < keepLen) {
      left += `${join}${helper(time % value, join, keepLen, times + 1)}`;
  }
  return `${timeNum}${name}${left}`;
}
const convertMsNumber2Unit = (
  time: number,
  join: string = '又',
  keepLen: number = 1,
) => {
  return helper(time, join, keepLen, 0)
};
export default convertMsNumber2Unit;
