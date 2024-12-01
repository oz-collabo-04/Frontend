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
  ServiceTime: string; // 서비스 시간
  date: string; // 예약 생성 날짜/시간
  reviewId: number; // 리뷰 ID
}

interface IRequestUser {
  id: number;
  name: string;
  phone: string;
}

interface IExpert {
  user_id: number;
  email: string;
  phone: string;
  name: string;
  profile_image: string;
  // Expert 추가필드
  available_location?: string[]; // 선택적 필드
  appeal?: string;
  service?: string;
  standard_charge?: string;
}

interface IEstimation {
  id: number; // 견적 ID
  request_id: number; // 요청 ID
  expert_id: number; // 전문가 ID
  location: string; // 서비스 제공 위치
  due_date: string; // 서비스 예정시간 - 날짜/시간 문자열
  service: string; // 서비스명
  charge: number; // 서비스 비용
  created_at: string; // 예약생성 시간 - 날짜/시간 문자열
  request_user: IRequestUser; // 요청 사용자 정보
  expert: IExpert; // 전문가 정보
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
