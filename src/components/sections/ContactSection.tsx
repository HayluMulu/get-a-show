import React from 'react';
import { ContactForm, SocialLinks } from '../forms';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-space-blue flex items-center justify-center py-8">
      <div className="container-custom w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-electric-cyan mb-3 md:mb-4 hebrew-text">
            בואו נתחיל לעבוד יחד
          </h2>
          <p className="text-base md:text-xl text-white/80 hebrew-text max-w-3xl mx-auto px-2">
            מוכנים להביא את העסק שלך למקום אחר? בואו נדבר על הפרויקט הבא שלכם
          </p>
        </div>

        <div className="flex justify-center px-2">
          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </div>

        {/* Mobile Social Links */}
        <SocialLinks variant="mobile" />

        {/* Desktop Social Links */}
        <SocialLinks variant="desktop" />
      </div>
    </section>
  );
};
