import React from 'react';

interface AnimatedTextProps {
  text: string;
  isVisible: boolean;
  delay?: number;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  isVisible,
  delay = 700,
  className = '',
}) => {
  // Split text by sentences and punctuation
  const sentences = text.match(/[^.!?,]+[.!?,]?/g) || [];

  return (
    <div className={className}>
      {sentences.map((sentence, index) => (
        <div
          key={index}
          className={`sentence ${isVisible ? "show" : ""}`}
          style={{ transitionDelay: `${index * delay}ms` }}
        >
          {sentence.trim()}
        </div>
      ))}
    </div>
  );
};

