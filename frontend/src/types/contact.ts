export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget: string;
  message: string;
}

export interface ContactFormResponse {
  id: string;
  status: 'success' | 'error';
  message: string;
}