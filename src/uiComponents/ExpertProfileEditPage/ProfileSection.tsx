import MediumTitle from '@/components/Title/MediumTitle';
import { ExpertRegister } from '@/config/types';
import { useToastStore } from '@/store/toastStore';
import { useEffect, useState } from 'react';
import { LuPlusCircle } from 'react-icons/lu';

type Props = {
  fileRef: React.RefObject<HTMLInputElement>;
  profileData: ExpertRegister;
  setProfileData: React.Dispatch<React.SetStateAction<ExpertRegister>>;
  isAppeals: boolean;
  setIsAppeals: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProfileSection({ fileRef, profileData, setProfileData, isAppeals, setIsAppeals }: Props) {
  const [previewImage, setPreviewImage] = useState<string>(profileData.expert_image ?? '');
  const [textChange, setTextChange] = useState<string>(profileData.appeal);
  const { addToasts } = useToastStore();

  useEffect(() => {
    if (isAppeals) {
      setProfileData((prev) => ({ ...prev, appeal: textChange }));
    }
  }, [isAppeals]);

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 1024 ** 2 * 500) {
        return addToasts({ type: 'error', title: '이미지 크기가 500MB를 넘습니다', id: Date.now().toString() });
      }

      const imageUrl = URL.createObjectURL(file);
      setProfileData((prev) => ({ ...prev, expert_image: imageUrl }));
      setPreviewImage(imageUrl);
    }
  };

  useEffect(() => {
    if (previewImage) {
      return () => URL.revokeObjectURL(previewImage);
    }
  }, [previewImage]);

  return (
    <section className='expertProfileEditSection'>
      <MediumTitle title='프로필 설정' />

      <div className='profile content'>
        <p>프로필 이미지 ( {profileData.expert_image ? '1' : '0'} / 1 )</p>

        <div>
          <label htmlFor='fileInput'>
            <LuPlusCircle size='2rem' />

            <input
              ref={fileRef}
              onChange={onUploadImage}
              id='fileInput'
              type='file'
              style={{ display: 'none' }}
              accept='image/*'
            />
          </label>

          {previewImage !== '' && <img src={profileData.expert_image} alt='전문가 프로필 이미지' />}
        </div>

        <p>프로필 설명</p>

        <div className='textareaDiv'>
          <textarea
            className='comTextarea'
            placeholder='설명글'
            value={textChange}
            onChange={(e) => {
              if (e.target.value.length > 100) {
                return;
              }
              setTextChange(e.target.value);
              setIsAppeals(false);
            }}
          />

          {textChange.length > 0 && <span>{textChange.length} / 100</span>}
        </div>
      </div>
    </section>
  );
}
