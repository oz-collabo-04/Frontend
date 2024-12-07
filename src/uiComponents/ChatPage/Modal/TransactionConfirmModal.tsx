import { EstimationDetails } from '@/uiComponents/ChatListPage/chat';
import { formatDate } from '@/utils/formatDate';

interface TransactionConfirmModalProps {
  estimationDetails: EstimationDetails | null; // null도 허용
}

const TransactionConfirmModal = ({ estimationDetails }: TransactionConfirmModalProps) => {
  console.log(estimationDetails);
  if (!estimationDetails) {
    return <p>견적 정보를 불러오는 중입니다...</p>;
  }

  return (
    <div className='transactionConfirmModal'>
      <dl>
        <dt>- 금액</dt>
        <dd>{estimationDetails.charge.toLocaleString()} 원</dd>
      </dl>
      <dl>
        <dt>- 일정</dt>
        {estimationDetails ? (
          <>
            <dd>{estimationDetails.request.location_display}</dd>
            <dd>{formatDate(estimationDetails.request.wedding_datetime)}</dd>
            <dd>2부</dd>
          </>
        ) : (
          <dd>견적 정보가 없습니다.</dd>
        )}
      </dl>
    </div>
  );
};

export default TransactionConfirmModal;
