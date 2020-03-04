import runWait from './time/wait';
const ensureDo = (
  runner: (...args: any) => any,
  retry: number = 1,
  wait: number = 50,
): ((...args: any) => Promise<any>) => {
  return async (...args): Promise<any> => {
    for (let hasRetry = 0; hasRetry <= retry; hasRetry++) {
      try {
        const data = await runner(...args);
        return data;
      } catch (error) {
        if (hasRetry < retry) {
          await runWait(wait);
        } else {
          throw error;
        }
      }
    }
  };
};
export default ensureDo;
