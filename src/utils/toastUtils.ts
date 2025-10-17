// Toast utility functions for Hebrew messages
export const TOAST_MESSAGES = {
  SUCCESS: {
    FORM_SUBMITTED: 'הטופס נשלח בהצלחה! נחזור אליך בהקדם',
  },
  ERROR: {
    FORM_SUBMISSION_FAILED: 'משהו השתבש בשליחה, נסה שוב מאוחר יותר',
  },
} as const;

// Predefined toast configurations
export const TOAST_CONFIG = {
  SUCCESS_DURATION: 4000,
  ERROR_DURATION: 6000,
} as const;
