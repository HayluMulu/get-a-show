import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom text-center z-10">
        {/* Main headline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="block text-electric-cyan">מהחלל החיצון</span>
            <span className="block text-cosmic-purple">ישר לעולם העסקי שלך</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 hebrew-text leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            סרטונים שעפים גבוה ולידים איכותיים שנוחתים ישירות אצלך
          </p>
        </div>

        {/* Value proposition */}
        {/* <div className="mb-16 max-w-3xl mx-auto">
          <div className="bg-space-blue/50 backdrop-blur-sm border border-cosmic-purple/30 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl md:text-3xl font-semibold text-electric-cyan mb-4 hebrew-text">
              בואו נביא את העסק שלך למקום אחר
            </h2>
            <p className="text-white/80 hebrew-text text-lg leading-relaxed">
              אנחנו יוצרים תוכן וידאו ייחודי וחדשני שעוזר לעסקים להתבלט בשוק הצפוף. 
              כל פרויקט הוא מסע יצירתי שמביא תוצאות אמיתיות.
            </p>
          </div>
        </div> */}

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <button
            onClick={scrollToAbout}
            className="btn-primary text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 rounded-xl glow-cyan hover:scale-105 transition-all duration-300"
          >
            בואו להכיר
          </button>
          <button
            onClick={scrollToContact}
            className="btn-secondary text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition-all duration-300"
          >
            ישר ולעניין
          </button>
        </div>




      </div>
    </section>
  );
};

export default HeroSection;