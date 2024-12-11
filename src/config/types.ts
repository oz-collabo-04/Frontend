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
  key?: number; // Reservation PK
  title: string; // 서비스명
  reserveStatus: string; // 예약상태
  expertUser: string; // 전문가 이름
  expertUserId: number; // 전문가 ID
  requestUser: string; // 요청자 이름
  charge: number; // 금액
  serviceTime: string; // 서비스 시간
  date: string; // 예약 생성 날짜/시간
  reservationId: number; // 예약 ID => 리뷰 식별 및 작성
  estimationId: number; // 견적 ID => 견적서 확인
  chatroomId: number; // 채팅방 ID

  // 모달의 경우 번호가 겹칠경우 모달이 꼬임
  estimationModal: string; // 견적서 모달식별 => 요청자 이름
  reviewModal: string; // 리뷰 모달식별 => 전문가 ID
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

// 견적서
export interface IEstimation {
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
  chatroom_id: number;
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

// 견적서
export interface IEstimationForm {
  service_list: string;
  prefer_gender: string;
  wedding_datetime: string;
  location: string;
  wedding_hall: string;
  is_reception: boolean;
}

// 위치
export interface Area {
  [key: string]: string; // key 지역이름(label), 값은 지역코드 (value)
}

export interface ILocation {
  경상남도: Area[];
  경상북도: Area[];
  충청남도: Area[];
  충청북도: Area[];
  전라남도: Area[];
  전라북도: Area[];
  강원도: Area[];
  경기도: Area[];
  [key: string]: Area[] | string;
}

export interface ILocationObject {
  [key: string]: { [key: string]: string };
}

// WeddingConfirm 데이터 타입
export interface WeddingConfirm {
  id: number;
  user: number; // 연결된 전문가 id
  prefer_gender: string;
  created_at: string; // ISO8601 형식
  location: string;
  location_display: string;
  is_reception: boolean;
  wedding_datetime: string; // ISO8601 형식
  wedding_hall: string;
  status: string;
}

// ConfirmData 내부의 Estimation 타입
export interface IEstimation {
  id: number;
  charge: number;
  created_at: string; // ISO8601 형식
  due_date: string; // ISO8601 형식
  location: string;
  request: number;
  request_user: IRequestUser;
  expert: IExpert;
  service: string;
}

// ConfirmData 타입
export interface ConfirmData {
  id: number;
  status: string;
  created_at: string; // ISO8601 형식
  updated_at: string; // ISO8601 형식
  chatroom_id: number;
  estimation: IEstimation;
}
