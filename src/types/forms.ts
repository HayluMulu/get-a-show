// Form-related types

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export interface FormState {
  data: ContactFormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  errors: FormErrors;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export interface FormFieldProps {
  name: keyof ContactFormData;
  label: string;
  type: 'text' | 'tel' | 'textarea';
  placeholder: string;
  required?: boolean;
  maxLength?: number;
  pattern?: string;
  title?: string;
}

