import { authFetch } from '@/api/auth';
import '@/styles/MainPage/main.css';

export default function MainPage() {
  const clickFunction = async () => {
    const data = await authFetch();
    console.log(data);
  };

  return (
    <>
      <div>MainPage</div>
      <div onClick={() => clickFunction()}>모킹서버 테스트 - 클릭하고 콘솔 확인해보세요</div>
    </>
  );
}
