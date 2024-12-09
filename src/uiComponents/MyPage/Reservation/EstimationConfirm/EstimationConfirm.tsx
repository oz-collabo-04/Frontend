interface EstimationConfirmProps {
  estimationId: number; // 예상되는 타입 정의
  charge: number;
}

// estimation 타입지정 필요함
const EstimationConfirm = ({ estimationId, charge }: EstimationConfirmProps) => {
  return (
    <>
      <div className={`${estimationId}`}>EstimationConfirm</div>
      <div>예약일자: </div>
      <div>예약상태: {estimationId}</div>
      <div>예약금액: {charge}</div>
      <div>지역: </div>
      <div>서비스 제공일: </div>
      {/* <div>서비스 제공자: {data?.expert.user.name}</div> */}
      <div>서비스 제공영역: </div>
      {/* <div>서비스 제공자 연락처: {data?.expert.user.phone_number}</div>
      <div>서비스 제공자 이미지: {data?.expert.expert_image}</div> */}
    </>
  );
};

export default EstimationConfirm;
