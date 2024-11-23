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
