import ensureDo from './ensureDo';

export default function concurrentPool<T>({
  max = 20,
  tasks,
  cutter,
  runner,
  onSuccess,
  onError,
  onFinish,
  retry = 1,
  retryWait = 50,
}: {
  max?: number;
  retry?: number;
  retryWait?: number;
  tasks: T[];
  cutter: (tasks: T[]) => T[];
  runner: (tasks: T[]) => any;
  debug: boolean;
  onSuccess?: (...arg: any) => any;
  onError?: (error: Error) => any;
  onFinish?: (...arg: any) => any;
}) {
  return new Promise((success, fail) => {
    let running = 0;
    const executer = ensureDo(runner, retry, retryWait);
    const run = () => {
      if (running < max && tasks.length > 0) {
        Promise.all(
          cutter(tasks).map(task => {
            return new Promise((resolve, reject) => {
              running += 1;
              executer(task)
                .then(value => {
                  if (onSuccess) {
                    onSuccess(value);
                  }
                  run();
                  resolve(value);
                })
                .catch(error => {
                  if (onError) {
                    onError(error);
                  }
                  reject(error);
                })
                .finally(() => {
                  running -= 1;
                  if (onFinish) {
                    onFinish();
                  }
                });
            });
          }),
        )
          .then(value => {
            success(value);
          })
          .catch(error => {
            fail(error);
          });
      }
    };
  });
}
