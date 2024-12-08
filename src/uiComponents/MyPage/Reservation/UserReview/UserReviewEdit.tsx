import MainBtn from '@/components/Button/MainBtn';
import StarRating from '@/components/Rating/StarRating';
import ReviewImgSection from './ReviewImgSection';
import { useForm } from 'react-hook-form';
import { auth } from '@/api/axiosInstance';
import { IReviewImg, useFormRiftStore } from '@/store/useFormRiftStore';

interface IUserReviewProps {
  name: string;
  serviceTime: string;
  reservationId: number;
}

interface IUserReviewForm {
  reservationId?: number;
  rating: number;
  content: string;
  review_image: IReviewImg[];
}

const UserReviewEdit = ({ name, serviceTime, reservationId }: IUserReviewProps) => {
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
    watch,
    getValues,
  } = useForm<IUserReviewForm>({
    mode: 'onSubmit',
    defaultValues: {
      reservationId: reservationId,
      rating: 0.0,
      content: '',
      review_image: [],
    },
  });
  const { formRating } = useFormRiftStore();

  // 이미지 첨부를 하므로 formdata
  // formdata 첨부 공부
  const formData = new FormData();

  const postReviewData = async (formData: IUserReviewForm) => {
    try {
      // POST 요청 데이터 생성
      const payload: Record<string, any> = {
        reservation: reservationId,
        rating: formRating,
        content: formData.content,
        review_image: formData.review_image.length ? formData.review_image : [],
      };

      console.log('Payload:', payload);

      // 서버로 POST 요청
      const response = await auth.post('/reviews/', payload);
      console.log(response, '리뷰이 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('POST 요청 실패:', error);
      console.log('견적 요청 중 오류가 발생했습니다.');
    }
  };

  // 버튼은 post요청
  const handelReviewClick = (data: IUserReviewForm) => {
    console.log('data: ', data);
    console.log(formRating);

    postReviewData(data);
  };

  return (
    <div className='ReviewContents'>
      <form onSubmit={handleSubmit(handelReviewClick)}>
        <div className='service'>
          <div className='Title'>
            <div>
              <span className='Time'>{serviceTime}</span>에 경험하신,
            </div>
            <div>
              <span className='expertName'>{name}</span>
              님은 어떠셨나요?
            </div>
          </div>

          <div className='starRating'>
            <StarRating />
          </div>
        </div>
        <div className='review'>
          <input
            className='reviewInput'
            type='text'
            placeholder='후기를 작성해 주세요.'
            {...register('content', {
              required: '후기 입력은 필수 입니다.',
              minLength: {
                value: 5,
                message: '5글자 이상 입력해주세요.',
              },
              maxLength: {
                value: 20,
                message: '20자까지 입력 가능합니다.',
              },
            })}
          />
          {errors.content && <span className='errorMsg'>{errors.content.message}</span>}
        </div>
        <div>
          <ReviewImgSection />
        </div>
        <div className='submit'>
          <MainBtn
            type='submit'
            name='후기작성하기'
            extraClass='submitBtn'
            disabled={false}
            onClick={() => console.log('리뷰제출')}
          />
        </div>
      </form>
    </div>
  );
};

export default UserReviewEdit;
