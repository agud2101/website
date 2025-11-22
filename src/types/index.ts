export interface ContactInquiry {
  full_name: string;
  email: string;
  phone?: string;
  service_type?: string;
  message: string;
}

export interface SubcontractorApplication {
  full_name: string;
  email: string;
  phone: string;
  service_categories: string[];
  years_experience: number;
  has_insurance: boolean;
  has_license: boolean;
  availability: string;
  additional_info?: string;
}
