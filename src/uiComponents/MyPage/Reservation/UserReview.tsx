// 버튼은 post요청
// 이미지 첨부를 하므로 formdata

import MainBtn from '@/components/Button/MainBtn';
import Input from '@/components/Input/Input';
import StarRating from '@/components/Rating/StarRating';
import { useRef, useState } from 'react';

// formdata 첨부 공부
const UserReview = () => {
  // const [state, setState] = useState;
  // const { input } = useRef;

  return (
    <div>
      <div>{`expert`}님은 어떠셨나요?</div>
      <div>
        <StarRating />
      </div>
      <div>
        <Input type='text' placeholder='후기를 작성해 주세요' /* onChange={() => setState()} */ />
      </div>
      <div>이미지첨부</div>
      <div></div>
    </div>
  );
};

export default UserReview;
