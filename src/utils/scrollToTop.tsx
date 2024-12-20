import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 페이지 스크롤 최상단 유지
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
