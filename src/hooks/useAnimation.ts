import { useState, useEffect, useRef } from 'react';
import type { AnimationConfig } from '../types/animations';

export const useAnimation = (config: AnimationConfig) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  const startAnimation = () => {
    setIsVisible(true);
    setIsAnimating(true);
    
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, config.duration);
  };

  const stopAnimation = () => {
    setIsVisible(false);
    setIsAnimating(false);
    
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isVisible,
    isAnimating,
    startAnimation,
    stopAnimation,
  };
};
