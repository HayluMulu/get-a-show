import React from 'react';
import { Button } from '../ui';
import { scrollToElement } from '../../utils';

export const HeroSection: React.FC = () => {
  const scrollToContact = () => scrollToElement('contact');
  const scrollToAbout = () => scrollToElement('about');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom text-center z-10">
        {/* Main headline */}
        <div className="mb-8 relative hero-title-container">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="block gradient-text-glow animate-pulse-slow hero-title-line-1">
              מהחלל החיצון
            </span>
            <span className="block gradient-text-glow animate-pulse-slow hero-title-line-2">
              ישר לעולם העסקי שלך
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 hebrew-text leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            סרטונים שעפים גבוה ולידים איכותיים שנוחתים ישירות אצלך
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Button
            onClick={scrollToAbout}
            size="lg"
          >
            בואו להכיר
          </Button>
          <Button
            onClick={scrollToContact}
            variant="secondary"
            size="lg"
          >
            ישר ולעניין
          </Button>
        </div>
      </div>
    </section>
  );
};
