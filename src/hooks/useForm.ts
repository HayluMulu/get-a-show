import { useState, useCallback } from 'react';
import type { ContactFormData, FormState, FormErrors } from '../types/forms';

export const useForm = (initialData: ContactFormData) => {
  const [formState, setFormState] = useState<FormState>({
    data: initialData,
    isSubmitting: false,
    isSubmitted: false,
    errors: {},
  });

  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Special handling for phone number - only allow digits and limit to 10
    if (name === 'phone') {
      const phoneValue = value.replace(/\D/g, ''); // Remove non-digits
      if (phoneValue.length <= 10) {
        setFormState(prev => ({
          ...prev,
          data: {
            ...prev.data,
            [name]: phoneValue
          }
        }));
      }
      return;
    }
    
    setFormState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value
      }
    }));
  }, []);

  const setSubmitting = useCallback((isSubmitting: boolean) => {
    setFormState(prev => ({ ...prev, isSubmitting }));
  }, []);

  const setSubmitted = useCallback((isSubmitted: boolean) => {
    setFormState(prev => ({ ...prev, isSubmitted }));
  }, []);

  const setErrors = useCallback((errors: FormErrors) => {
    setFormState(prev => ({ ...prev, errors }));
  }, []);

  const resetForm = useCallback(() => {
    setFormState({
      data: initialData,
      isSubmitting: false,
      isSubmitted: false,
      errors: {},
    });
  }, [initialData]);

  return {
    formState,
    handleInputChange,
    setSubmitting,
    setSubmitted,
    setErrors,
    resetForm,
  };
};
