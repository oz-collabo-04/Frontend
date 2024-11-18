import Input from '@/components/Input/Input';
import '@/styles/ExpertProfileEditPage/career.scss';

export default function CareerModal() {
  return (
    <div className='careerModal'>
      <div className='careerInput'>
        <div>업무명, 기간을 입력하세요</div>

        <label>
          <p>경력</p>
          <Input type='text' placeholder='ex) 결혼식 사회자' width='85%' />
        </label>

        <label>
          <p>세부사항</p>
          <Input type='text' placeholder='ex) 100만 규모 결혼식 사회 진행' width='85%' height='70px' />
        </label>

        <label>
          <p>시작일</p>
          <input type='date' />
        </label>

        <label>
          <p>종료일</p>
          <input type='date' />
        </label>

        <button>추가하기</button>
      </div>

      <ul className='careerUpdate'>
        <li>
          결혼식 사회자 2024-11-17 ~ <button>X</button>
        </li>
        <li>
          웨딩컨벤션홀 매니저 근무 2021-11-30 ~ 2024-12-30 <button>X</button>
        </li>
      </ul>
    </div>
  );
}
