export interface User {
  id: number;
  email: string;
  name: string;
  gender: string; // "M" or "F" assumed
  phone_number: string;
  profile_image: string;
  prefer_service: string;
  prefer_location: string;
}

export interface ExpertUser {
  id: number;
  name: string;
  email: string;
  phone_number: string;
}

export interface Expert {
  id: number;
  user: ExpertUser;
  expert_image: string;
  service_display: string;
  service: string;
}

export interface Request {
  id: number;
  user: number;
  service_list: string[];
  service_list_display: string;
  prefer_gender: string;
  prefer_gender_display: string;
  wedding_hall: string;
  wedding_datetime: string; // ISO8601 date string
  location: string;
  location_display: string;
  status: string;
  status_display: string;
  created_at: string; // ISO8601 date string
  updated_at: string; // ISO8601 date string
}

export interface Estimation {
  id: number;
  request: Request;
  expert: number;
  service: string;
  service_display: string;
  location: string;
  location_display: string;
  due_date: string;
  charge: number;
  created_at: string;
  updated_at: string;
}

export interface DataItem {
  id: number;
  user: User;
  expert: Expert;
  estimation: Estimation;
  expert_exist: boolean;
  user_exist: boolean;
  last_message: string;
}

export type DataList = DataItem[];
