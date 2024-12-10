import { useState, useEffect } from 'react';
import Modal from '@/components/Modal/Modal';
import { useModalStore } from '@/store/modalStore';
import { useCategoryStore } from '@/store/expertListStore';
import NumberInput from '@/components/Input/NumberInput';
import '@/styles/Expertlistpage/expertModal.scss';
import { auth } from '@/api/axiosInstance';
import { useToastStore } from '@/store/toastStore';
import axios from 'axios';
import { useEstimationStore } from '@/store/estimationStore';

interface ExpertModalProps {
  modalId: string;
  expertId: number | null;
  weddingDateTime: string;
}

interface EstimationRequest {
  request: number;
  due_date: string;
  service: string;
  charge: number;
  description: string;
}

interface EstimationResponse {
  id: number;
  request: number;
  expert: number;
  due_date: string;
  service: string;
  service_display: string;
  charge: number;
  created_at: string;
  updated_at: string;
}

const ExpertModal: React.FC<ExpertModalProps> = ({ modalId, expertId, weddingDateTime }) => {
  const { openModal, closeModal } = useModalStore();
  const { setEstimation, getEstimation } = useCategoryStore();
  const { addToasts } = useToastStore();
  const { setDescription } = useEstimationStore();
  const [amount, setAmount] = useState<string | number>('');
  const [description, setLocalDescription] = useState('');
  const [expertServiceInfo, setExpertServiceInfo] = useState<string>('');

  useEffect(() => {
    getExpertService();
  }, [expertId, modalId, openModal]);

  const getExpertService = async () => {
    try {
      const response = await auth.get('experts/detail/');
      setExpertServiceInfo(response.data.service);
    } catch (error) {
      console.error('expertService Fetching Error', error);
    }
  };

  useEffect(() => {
    if (expertId !== null) {
      openModal(modalId);
      const existingEstimation = getEstimation(expertId);
      if (existingEstimation) {
        setAmount(existingEstimation.amount);
        setLocalDescription(existingEstimation.description || '');
      } else {
        setAmount('');
        setLocalDescription('');
      }
    }
  }, [expertId, modalId, openModal, getEstimation]);

  const sendEstimation = async (estimationData: EstimationRequest) => {
    try {
      const response = await auth.post<EstimationResponse>('/experts/estimations/', estimationData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data);
        throw new Error(`API 요청 실패: ${error.response?.data?.message || error.message}`);
      }
      console.error('Error sending estimation:', error);
      throw error;
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (expertId !== null) {
      const estimationData: EstimationRequest = {
        request: expertId,
        due_date: weddingDateTime.split('T')[0],
        service: expertServiceInfo,
        charge: Number(amount),
        description: description,
      };

      try {
        const response = await sendEstimation(estimationData);
        setEstimation(expertId, {
          amount: response.charge,
          description,
          service: response.service,
          dueDate: response.due_date,
        });
        setDescription(description);
        console.log('ExpertModal - Setting description:', description);
        console.log('Estimation sent successfully:', response);
        addToasts({ type: 'success', title: '견적이 등록되었습니다.', id: Date.now().toString() });
        closeModal(modalId);
      } catch (error) {
        console.error('Failed to send estimation:', error);
        if (error instanceof Error) {
          console.error('Error details:', error.message);
        }
        addToasts({ type: 'error', title: '견적 등록에 실패했습니다.', id: Date.now().toString() });
      }
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value.slice(0, 200);
    setLocalDescription(newDescription);
  };

  const modalContent = (
    <div className='expert-modal__container'>
      <div className='expert-modal__header'></div>

      <form onSubmit={handleSubmit} className='expert-modal__form'>
        <div className='expert-modal__form-group'>
          <div className='expert-modal__input-wrapper'>
            <label htmlFor='amount' className='expert-modal__label'>
              금액
            </label>
            <NumberInput placeholder='금액을 입력하세요' value={amount} onChange={handleAmountChange} width='100%' />
          </div>

          <div className='expert-modal__input-wrapper expert-modal__textarea-wrapper'>
            <label htmlFor='description' className='expert-modal__label'>
              견적 설명
            </label>
            <textarea
              id='description'
              placeholder='견적에 대한 설명을 입력하세요'
              value={description}
              onChange={handleDescriptionChange}
              className='comInput'
              maxLength={500}
            />
            <div className='expert-modal__char-count'>{description.length} / 500</div>
          </div>
        </div>

        <div className='expert-modal__input-wrapper'>
          <button type='submit' className='expert-modal__submit-button'>
            견적 보내기
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <Modal
      modalId={modalId}
      width='40rem'
      height='57vh'
      borderRadius='4px'
      title='견적 보내기'
      content={modalContent}
    />
  );
};

export default ExpertModal;
