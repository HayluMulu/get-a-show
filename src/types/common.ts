// Common types used throughout the application

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface AnimationState {
  isVisible: boolean;
  isAnimating: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  instagram: string;
}

