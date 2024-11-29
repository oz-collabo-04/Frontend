import { useState, useEffect } from 'react'
import Modal from '@/components/Modal/Modal'
import { useModalStore } from '@/store/modalStore'
import { useCategoryStore } from '@/store/expertListStore'
import NumberInput from '@/components/Input/NumberInput'
import '@/styles/Expertlistpage/expertModal.scss'
import { useNavigate } from 'react-router-dom'
import { auth } from '@/api/axiosInstance'

interface ExpertModalProps {
  modalId: string;
  expertId: number | null;
}

interface EstimationRequest {
  request: number;
  charge: number;
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

const ExpertModal: React.FC<ExpertModalProps> = ({ modalId, expertId }) => {
  const { openModal, closeModal } = useModalStore()
  const { setEstimation, getEstimation } = useCategoryStore()
  const [amount, setAmount] = useState<string | number>('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (expertId !== null) {
      openModal(modalId)
      const existingEstimation = getEstimation(expertId)
      if (existingEstimation) {
        setAmount(existingEstimation.amount)
        setDescription(existingEstimation.description)
      } else {
        setAmount('')
        setDescription('')
      }
    }
  }, [expertId, modalId, openModal, getEstimation])

  const sendEstimation = async (estimationData: EstimationRequest) => {
    try {
      const response = await auth.post<EstimationResponse>('/experts/estimations/', estimationData)
      return response.data
    } catch (error) {
      console.error('Error sending estimation:', error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (expertId !== null) {
      const estimationData: EstimationRequest = {
        request: expertId,
        charge: Number(amount)
      }

      try {
        const response = await sendEstimation(estimationData)
        setEstimation(expertId, {
          amount: response.charge,
          description,
          service: response.service,
          dueDate: response.due_date,
        })
        console.log('Estimation sent successfully:', response)
        closeModal(modalId)
        navigate(`/estimationlist/${expertId}`)
      } catch (error) {
        console.error('Failed to send estimation:', error)
      }
    }
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const modalContent = (
    <div className="expert-modal__container">
      <div className="expert-modal__header">
      </div>

      <form onSubmit={handleSubmit} className="expert-modal__form">
        <div className="expert-modal__form-group">
          <div className="expert-modal__input-wrapper">
            <label htmlFor="amount" className="expert-modal__label">금액</label>
            <NumberInput
              placeholder='금액을 입력하세요'
              value={amount}
              onChange={handleAmountChange}
              width='100%'
            />
          </div>

          <div className="expert-modal__input-wrapper expert-modal__textarea-wrapper">
            <label htmlFor="description" className="expert-modal__label">견적 설명</label>
            <textarea
              id="description"
              placeholder='견적에 대한 설명을 입력하세요'
              value={description}
              onChange={handleDescriptionChange}
              className="comInput"
            />
          </div>
        </div>

        <div className="expert-modal__input-wrapper">
          <button
            type="submit"
            className="expert-modal__submit-button"
          >
            견적 보내기
          </button>
        </div>
      </form>
    </div>
  )

  return (
    <Modal
      modalId={modalId}
      width="40rem"
      height="57vh"
      borderRadius="4px"
      title="견적 보내기"
      content={modalContent}
    />
  )
}

export default ExpertModal

