import { createRoot } from 'react-dom/client';
import './global.scss';
import App from './App.tsx';
import './styles/common.scss';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
