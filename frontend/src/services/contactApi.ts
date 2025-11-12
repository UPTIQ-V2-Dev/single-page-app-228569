import { apiClient } from '@/lib/api';
import { ContactFormData, ContactFormResponse } from '@/types/contact';
import { mockContactResponse } from '@/data/contactMockData';

export const submitContactForm = async (data: ContactFormData): Promise<ContactFormResponse> => {
  // Return mock data if environment variable is set to use mock data
  if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockContactResponse;
  }

  try {
    const response = await apiClient.post<ContactFormResponse>('/api/contact', data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit contact form. Please try again.');
  }
};