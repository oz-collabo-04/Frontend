import { createRoot } from 'react-dom/client';
import './global.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browsers.ts');
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <App />
  </BrowserRouter>
);
