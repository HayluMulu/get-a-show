import React, { useState, useCallback } from 'react';
import { ToastContext } from '../../../hooks/useToast';
import { ToastContainer } from './ToastContainer';
import type { ToastMessage, ToastContextType } from '../../../types';

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((
    type: 'success' | 'error',
    message: string,
    duration = 4000
  ) => {
    const id = Math.random().toString(36).substring(2, 11);
    const newToast: ToastMessage = {
      id,
      type,
      message,
      duration,
    };

    setToasts((prev) => [...prev, newToast]);
  }, []);

  const showSuccessToast = useCallback((message: string, duration?: number) => {
    showToast('success', message, duration);
  }, [showToast]);

  const showErrorToast = useCallback((message: string, duration?: number) => {
    showToast('error', message, duration);
  }, [showToast]);

  const contextValue: ToastContextType = {
    showToast,
    showSuccessToast,
    showErrorToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer toasts={toasts} onRemoveToast={removeToast} />
    </ToastContext.Provider>
  );
};
