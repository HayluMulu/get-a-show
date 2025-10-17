import { useState, useEffect } from 'react';
import type { DeviceInfo } from '../types/common';

export const useDeviceDetection = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isMobile = width < 768; // md breakpoint
      const isTablet = width >= 768 && width < 1024; // lg breakpoint
      const isDesktop = width >= 1024;

      setDeviceInfo({ isMobile, isTablet, isDesktop });
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return deviceInfo;
};
