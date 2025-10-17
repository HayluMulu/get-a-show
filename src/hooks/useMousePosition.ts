import { useState, useEffect, useRef } from 'react';
import type { Position } from '../types/common';

export const useMousePosition = (isEnabled: boolean = true) => {
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isEnabled]);

  useEffect(() => {
    if (!isVisible || !isEnabled) return;

    const animate = () => {
      setFollowerPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15
      }));
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, isVisible, isEnabled]);

  return {
    mousePos,
    followerPos,
    isVisible,
  };
};
