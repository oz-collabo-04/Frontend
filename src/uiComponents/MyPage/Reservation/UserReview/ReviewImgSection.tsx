import React from 'react';
import { useFormRiftStore } from '@/store/useFormRiftStore';

const ReviewImgSection = () => {
  const { reviewImages, addReviewImage, removeReviewImage } = useFormRiftStore();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map((file, idx) => ({
        id: Date.now() + idx, // 고유 ID 생성
        file,
      }));
      files.forEach((file) => addReviewImage(file)); // 상태에 추가
      console.log(files); // 이미지 업로드 핸들러에서 파일 객체 확인
    }
  };

  const handleRemoveImage = (id: number) => {
    removeReviewImage(id); // 상태에서 제거
  };

  return (
    <div>
      <input type='file' multiple accept='image/*' onChange={handleImageUpload} />
      <div className='preview'>
        {reviewImages.map((image) => (
          <div key={image.id}>
            <img
              src={URL.createObjectURL(image.file)}
              alt='preview'
              style={{ width: 100, height: 100, objectFit: 'cover' }}
            />
            <button onClick={() => handleRemoveImage(image.id!)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewImgSection;
