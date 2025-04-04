// src/components/AboutSection.tsx
import React from "react";
import './AboutSection.css';

type AboutSectionProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
};

export const AboutSection = ({ aboutRef }: AboutSectionProps) => {
  return (
    <section ref={aboutRef} className="about-section">
      <div className="section-content">
        <h2 className="section-title">קצת עליי</h2>
        <p className="section-text">
          בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה
          בלה בלה בלה בלה בלה בלה בלה
        </p>
      </div>
    </section>
  );
};

