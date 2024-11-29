import MediumTitle from '@/components/Title/MediumTitle';
import { ExpertRegister } from '@/config/types';
import { useEffect, useState } from 'react';
import { LuPlusCircle } from 'react-icons/lu';

type Props = {
  fileRef: React.RefObject<HTMLInputElement>;
  profileData: ExpertRegister;
  setProfileData: React.Dispatch<React.SetStateAction<ExpertRegister>>;
};

export default function ProfileSection({ fileRef, profileData, setProfileData }: Props) {
  const [previewImage, setPreviewImage] = useState<string>(profileData.expert_image ?? '');
  const [textChange, setTextChange] = useState<string>(profileData.appeal ?? '');

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
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

          <img src={previewImage !== '' ? previewImage : profileData.expert_image} alt='이미지' />
        </div>

        <p>프로필 설명</p>

        <textarea
          className='comTextarea'
          placeholder='설명글'
          value={textChange !== '' ? textChange : profileData.appeal}
          onChange={(e) => {
            if (e.target.value.length > 100) {
              return;
            }
            setTextChange(e.target.value);
          }}
        />

        <div className='textareaChild'>
          {textChange.length > 0 && <span>{textChange.length} / 100</span>}
          <button onClick={() => setProfileData((prev) => ({ ...prev, appeal: textChange }))} className='doneBtn'>
            완료
          </button>
        </div>
      </div>
    </section>
  );
}
