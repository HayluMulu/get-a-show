import type { ContactFormData } from '../types/forms';

// Form utility functions

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return cleaned;
};

export const validateForm = (data: ContactFormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = 'שם הוא שדה חובה';
  }

  if (!data.phone.trim()) {
    errors.phone = 'מספר טלפון הוא שדה חובה';
  } else if (!/^[0-9]{10}$/.test(data.phone)) {
    errors.phone = 'אנא הזינו מספר טלפון ישראלי תקין (10 ספרות)';
  }

  if (!data.message.trim()) {
    errors.message = 'הודעה היא שדה חובה';
  }

  return errors;
};

export const submitForm = async (data: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('https://formspree.io/f/xyznvkek', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.ok;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};

