import Input from '@/components/Input/Input';
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
  const [previewImage, setPreviewImage] = useState<string | null>(profileData.expert_image ?? '');
  const [textChange, setTextChange] = useState<string>('');

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
          {profileData.expert_image && <img src={previewImage!} alt='이미지있으면보임' />}
        </div>

        <p>프로필 설명</p>
        <Input
          value={textChange}
          onChange={(e) => setTextChange(e.target.value)}
          type='text'
          placeholder='설명글'
          width='50rem'
        />
        <button onClick={() => setProfileData((prev) => ({ ...prev, appeal: textChange }))} className='doneBtn'>
          완료
        </button>
      </div>
    </section>
  );
}