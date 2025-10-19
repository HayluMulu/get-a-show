import { useEffect, useRef, useState } from 'react';
import type { IntersectionObserverConfig } from '../types/animations';

export const useIntersectionObserver = (
  config: IntersectionObserverConfig = { threshold: 0.3 }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      config
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [config.threshold, config.rootMargin, hasIntersected]);

  return { elementRef, isIntersecting, hasIntersected };
};
