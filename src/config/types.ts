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
  id?: string;
}
