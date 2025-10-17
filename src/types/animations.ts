// Animation-related types

export interface Star {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

export interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export interface AnimationConfig {
  duration: number;
  delay: number;
  easing: string;
}

export interface IntersectionObserverConfig {
  threshold: number;
  rootMargin?: string;
}

