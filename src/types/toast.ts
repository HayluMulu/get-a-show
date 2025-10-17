export interface ToastMessage {
  id: string;
  type: 'success' | 'error';
  message: string;
  duration?: number;
}

export interface ToastContextType {
  showToast: (type: 'success' | 'error', message: string, duration?: number) => void;
  showSuccessToast: (message: string, duration?: number) => void;
  showErrorToast: (message: string, duration?: number) => void;
}
