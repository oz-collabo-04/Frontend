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
  explanation: string;
  start_date: string;
  end_date: string | null;
  id?: string;
}

export interface ExpertRegister {
  available_location: string[];
  appeal: string;
  service: string;
  careers: Career[];
  expert_image: string;
  standard_charge?: string;
}

// 예약리스트 관련
export interface IReserveContentProps {
  title: string;
  reserveStatus: string;
  name: string;
  charge: string | number;
  ServiceTime: string | number;
  date: string | number;
  reviewId: number;
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
}

interface IEstimation {
  id: number;
  request_id: number;
  expert_id: number;
  location: string;
  due_date: string; // 날짜/시간 문자열
  service: string;
  charge: number; // 숫자 형식
  created_at: string; // 날짜/시간 문자열
  request_user: IRequestUser;
  expert: IExpert;
}

interface IReservation {
  id: number;
  status: string;
  estimation: IEstimation;
}

export interface IReservationData {
  reservations: IReservation[];
}

export interface Toast {
  id: string;
  title: string;
  type: 'success' | 'error';
}
