import React from 'react';
import { useFormRiftStore } from '@/store/useFormRiftStore';
import { LuPlusCircle } from 'react-icons/lu';

const ReviewImg = () => {
  const { reviewImages, addReviewImage, removeReviewImage } = useFormRiftStore();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map((file, idx) => ({
        id: Date.now() + idx, // 고유 ID 생성
        file,
      }));
      files.forEach((file) => addReviewImage(file)); // 상태에 추가
    }
  };

  const handleRemoveImage = (id: number) => {
    removeReviewImage(id); // 상태에서 제거
  };

  return (
    <div className='imgContents'>
      <div className='addFile'>
        <label htmlFor='uploadInput'>
          <LuPlusCircle size='2rem' />
          <input
            id='uploadInput'
            type='file'
            multiple
            accept='image/*'
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </label>
      </div>
      <div className='preview'>
        {reviewImages.map((image) => (
          <div className='previewImg' key={image.id}>
            <img
              src={URL.createObjectURL(image.file)}
              alt={image.file.name}
              onClick={() => handleRemoveImage(image.id!)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewImg;
