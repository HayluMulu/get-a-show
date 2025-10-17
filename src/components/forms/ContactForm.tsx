import React from 'react';
import { useForm, useToast } from '../../hooks';
import { Button, Input, Textarea, Card } from '../ui';
import { submitForm, validateForm, TOAST_MESSAGES, TOAST_CONFIG } from '../../utils';
import type { ContactFormData } from '../../types';

const initialFormData: ContactFormData = {
  name: '',
  phone: '',
  message: '',
};

export const ContactForm: React.FC = () => {
  const {
    formState,
    handleInputChange,
    setSubmitting,
    setSubmitted,
    setErrors,
    resetForm,
  } = useForm(initialFormData);
  
  const { showSuccessToast, showErrorToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm(formState.data);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const success = await submitForm(formState.data);
      
      if (success) {
        setSubmitted(true);
        resetForm();
        showSuccessToast(TOAST_MESSAGES.SUCCESS.FORM_SUBMITTED, TOAST_CONFIG.SUCCESS_DURATION);
      } else {
        showErrorToast(TOAST_MESSAGES.ERROR.FORM_SUBMISSION_FAILED, TOAST_CONFIG.ERROR_DURATION);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showErrorToast(TOAST_MESSAGES.ERROR.FORM_SUBMISSION_FAILED, TOAST_CONFIG.ERROR_DURATION);
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <Card className="contact-form-card p-6" hover={false}>
      <h3 className="text-xl font-semibold text-electric-cyan mb-4 hebrew-text">
        תשאירו פרטים
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          label="שם מלא"
          value={formState.data.name}
          onChange={handleInputChange}
          placeholder="השם שלכם"
          required
          error={formState.errors.name}
        />

        <Input
          name="phone"
          type="tel"
          label="מספר טלפון"
          value={formState.data.phone}
          onChange={handleInputChange}
          placeholder="050-1234567"
          maxLength={10}
          pattern="[0-9]{10}"
          title="אנא הזינו מספר טלפון ישראלי תקין (10 ספרות)"
          required
          error={formState.errors.phone}
          className="text-right"
          style={{ direction: 'ltr', textAlign: 'right' }}
        />

        <Textarea
          name="message"
          label="הודעה"
          value={formState.data.message}
          onChange={handleInputChange}
          placeholder="ספרו לנו על הפרויקט שלכם..."
          rows={3}
          required
          error={formState.errors.message}
        />

        <Button
          type="submit"
          isLoading={formState.isSubmitting}
          className="w-full"
        >
          שליחת פרטים
        </Button>
      </form>
    </Card>
  );
};
