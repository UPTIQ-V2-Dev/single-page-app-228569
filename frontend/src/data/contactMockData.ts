import { ContactFormResponse } from '@/types/contact';

export const mockContactResponse: ContactFormResponse = {
  id: 'mock-contact-' + Date.now(),
  status: 'success',
  message: 'Thank you for your message! We will get back to you within 24 hours.'
};