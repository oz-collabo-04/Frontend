import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

export const workerStartPromise = worker.start({
  onUnhandledRequest: 'bypass', // 처리하지 않은 요청은 무시하고 브라우저가 처리하도록 허용
});
