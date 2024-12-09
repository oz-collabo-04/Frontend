import '@/styles/MyPage/Review.scss';
import MainBtn from '@/components/Button/MainBtn';
import StarRating from '@/components/Rating/StarRating';
import { useForm } from 'react-hook-form';
import { auth } from '@/api/axiosInstance';
import { IReviewImg, useFormRiftStore } from '@/store/useFormRiftStore';
import { useToastStore } from '@/store/toastStore';
import { useModalStore } from '@/store/modalStore';
import { useState } from 'react';
import ReviewImg from './ReviewImg';

interface IUserReviewProps {
  name: string;
  serviceTime: string;
  reservationId: number;
  reviewModal: number;
}

interface IUserReviewForm {
  reservationId?: number;
  rating: number;
  content: string;
  review_image: IReviewImg[];
}

const UserReviewEdit = ({ name, serviceTime, reservationId, reviewModal }: IUserReviewProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUserReviewForm>({
    mode: 'onSubmit',
    defaultValues: {
      reservationId: reservationId,
      rating: 0.0,
      content: '',
      review_image: [],
    },
  });
  const { reviewImages, resetReviewForm } = useFormRiftStore();
  const { addToasts } = useToastStore();
  const { closeModal } = useModalStore();
  const [rating, setRating] = useState<number>(0);

  // 이미지 첨부를 하므로 formdata로변환
  const gatherFormData = (data: IUserReviewForm) => {
    const payload = {
      reservation: reservationId,
      rating: rating.toFixed(1),
      content: data.content,
    };

    // FormData 생성
    const formData = new FormData();

    // payload 데이터를 FormData에 추가
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value as string); // 모든 값을 문자열로 변환하여 추가
    });

    // reviewImages 파일 추가
    reviewImages.forEach((image) => {
      formData.append('images', image.file); // 파일 추가
    });

    // 파일첨부 확인
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    return formData;
  };

  // 서버로 FormData 전송
  const fetchReviewPost = async (formData: FormData) => {
    try {
      const response = await auth.post('/reviews/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        addToasts({ type: 'success', title: '리뷰가 작성되었습니다.', id: Date.now().toString() });
        closeModal(`${reviewModal}`);
        resetReviewForm();
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.detail || error?.response?.data?.message || '리뷰 작성에 실패했습니다.';
      console.error('POST 요청 실패:', errorMessage);

      if (errorMessage === '이미 리뷰를 작성한 내역이 존재합니다.') {
        addToasts({
          type: 'error',
          title: errorMessage,
          id: Date.now().toString(),
        });
        closeModal(`${reviewModal}`);
      } else {
        addToasts({
          type: 'error',
          title: errorMessage,
          id: Date.now().toString(),
        });
      }
    }
  };
  // 버튼 post요청
  const handelReviewClick = async (data: IUserReviewForm) => {
    console.log('폼데이터: ', data);
    const formData = gatherFormData(data);
    await fetchReviewPost(formData);
  };

  return (
    <div className='reviewContents'>
      <form onSubmit={handleSubmit(handelReviewClick)}>
        <div className='service'>
          <div className='title'>
            <div>
              <span className='time'>{serviceTime}</span>에 경험하신,
            </div>
            <div>
              <span className='expertName'>{name}</span>
              님은 어떠셨나요?
            </div>
          </div>

          <div className='starRating'>
            <StarRating initialRating={rating} onChange={(newRating) => setRating(newRating)} />
          </div>
        </div>
        <div className='review'>
          <textarea
            className='inputWrapper'
            placeholder='후기를 작성해 주세요'
            {...register('content', {
              required: '후기 입력은 필수입니다',
              minLength: {
                value: 5,
                message: '5글자 이상 입력해주세요',
              },
              maxLength: {
                value: 500,
                message: '500자까지 입력 가능합니다',
              },
            })}
          />
          {errors.content && <span className='errorMsg'>{errors.content.message}</span>}
          <div className='imgWrapper'>
            <ReviewImg />
          </div>
        </div>
        <div className='submit'>
          <MainBtn type='submit' name='후기작성하기' extraClass='submitBtn' disabled={false} />
        </div>
      </form>
    </div>
  );
};

export default UserReviewEdit;
