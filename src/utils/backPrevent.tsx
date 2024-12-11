import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// //히스토리 상태관리
// const addUrlHistoryState = () => {
//   // history.pushState -> 브라우저히스토리 조작 -> 현재 페이지의 상태를 히스토리에 새로 추가(push)함으로써 뒤로갈수 없게만듬
//   // preventBack: 뒤로가는 동작 방해(history를 바꿔서 방해)
//   window.history.pushState(null, '', window.location.href);
// };

// 뒤로가기 이벤트리스너 등록/제거
const useBackNavigationHandler = (onBack: () => void) => {
  useEffect(() => {
    const handlePopState = () => {
      onBack();
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onBack]);
};

// 뒤로가기 할때 실행할 동작
const useRedirectOnBack = () => {
  const navigate = useNavigate();

  const handleBackNavigation = () => {
    alert('이전 페이지로 돌아갈 수 없습니다. 메인페이지로 이동합니다.');
    // 첫번째: 이동할 경로, 두번째: 경로 이동 동작을 설정하는 옵션 기본값:false
    // true일 경우 히스토리 스택에 새항목을 추가하지 않고 현재항목 대체
    navigate('/', { replace: true });
  };

  return handleBackNavigation;
};

// 위의 동작을 합친 커스텀 훅: 뒤로가기 동작시 알림창이 뜨며 뒤로가기 동작을 막고 메인페이지로 이동합니다.
const useBackPrevent = () => {
  // 뒤로가기 할때 실행되는 동작 정의: alert창띄우고 메인페이지로 이동
  const handleBackNavigation = useRedirectOnBack();

  // 뒤로가기 동작의 이벤트리스너등록:
  useBackNavigationHandler(handleBackNavigation);
};

export default useBackPrevent;
