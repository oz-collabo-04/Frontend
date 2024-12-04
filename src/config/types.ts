export interface User {
  id: string;
  name: string;
  gender: string;
}

export interface Expert extends ExpertRegister {
  id: string;
  user: User;
}
export interface Career {
  title: string;
  description: string;
  start_date: string;
  end_date: string | null;
  id: string;
}

export interface ExpertRegister {
  available_location: string[];
  available_location_display?: string[];
  appeal: string;
  service: string;
  service_display?: string;
  careers: Career[];
  expert_image: string;
  standard_charge?: string;
}

// 예약리스트 관련
export interface IReservationContentProps {
  title: string; // 서비스명
  reserveStatus: string; // 예약상태
  name: string; // 전문가 이름
  charge: number | string; // 금액
  serviceTime: string; // 서비스 시간
  date: string; // 예약 생성 날짜/시간
  reviewId: number; // 리뷰 ID
  onChatClick?: () => void;
  onReviewClick?: () => void;
}

interface IRequestUser {
  email: string;
  id: number;
  name: string;
  phone_number: string;
}

interface IExpert {
  expert_image: string;
  id: number;
  user: IExpertUser;
}

interface IExpertUser {
  email: string;
  id: number;
  name: string;
  phone_number: string;
}

interface IEstimation {
  charge: number; // 서비스 비용
  created_at: string; // 예약생성 시간 - 날짜/시간 문자열
  due_date: string; // 서비스 예정시간 - 날짜/시간 문자열
  expert: IExpert; // 전문가 정보
  id: number; // 견적 ID
  location: string; // 서비스 제공 위치
  request_id: number; // 요청 ID
  request_user: IRequestUser; // 요청 사용자 정보
  service: string; // 서비스명
}

interface IReservation {
  id: number; // 예약 ID
  status: string; // 예약 상태
  estimation: IEstimation; // 견적정보
}

export type IReservationData = IReservation[]; // 수정: 배열 형태로 직접 문의

export interface Toast {
  id: string;
  title: string;
  type: 'success' | 'error';
}

export interface Calender {
  name: string;
  phone_number: string;
  service_display: string;
  location_display: string;
  wedding_hall: string;
  wedding_datetime: string;
  status_display: string;
}
