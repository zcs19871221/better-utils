export default function uniq(list: any[]) {
  try {
    return [...new Set(list)];
  } catch (error) {
    return [];
  }
}
