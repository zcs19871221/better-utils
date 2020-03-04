export default function escapeRegString(regStr: string): string {
  return regStr.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&');
}
