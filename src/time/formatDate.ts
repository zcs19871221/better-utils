export default function formatDate(
  date: Date | number = Date.now(),
  format: string = 'YYYY-MM-DD/hh:mm:ss',
): string {
  if (date instanceof Date) {
    date = date.getTime();
  }
  const input = new Date(date);
  return format.replace(
    /(Y{2,4})|(M{1,2})|(D{1,2})|(h{1,2})|(m{1,2})|(s{1,2})/gu,
    // eslint-disable-next-line max-params
    (match, year, month, day, hour, minute, second) => {
      if (year && (year.length === 2 || year.length === 4)) {
        const out = String(input.getFullYear());
        return year.length === 2 ? out.slice(2) : out;
      }
      let toConvert = null;
      let len = null;
      if (month) {
        toConvert = input.getMonth() + 1;
        len = month.length;
      }
      if (day) {
        toConvert = input.getDate();
        len = day.length;
      }
      if (hour) {
        toConvert = input.getHours();
        len = hour.length;
      }
      if (minute) {
        toConvert = input.getMinutes();
        len = minute.length;
      }
      if (second) {
        toConvert = input.getSeconds();
        len = second.length;
      }
      if (toConvert !== null) {
        if (len === 2 && toConvert < 10) {
          return `0${toConvert}`;
        }
        return String(toConvert);
      }
      return match;
    },
  );
}
