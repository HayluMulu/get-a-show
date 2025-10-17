import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-space-blue/50 backdrop-blur-sm border border-cosmic-purple/30',
    glass: 'bg-space-blue/80 backdrop-blur-sm border border-white/20',
    gradient: 'bg-gradient-to-r from-space-blue/50 to-cosmic-purple/30 backdrop-blur-sm border border-electric-cyan/30',
  };
  
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-lg' : '';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

