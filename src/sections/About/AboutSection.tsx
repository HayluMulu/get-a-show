import React from "react";
import './AboutSection.css';
import { ABOUT_HEADLINE, ABOUT_TEXT } from "./consts";

type AboutSectionProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
};

export const AboutSection = ({ aboutRef }: AboutSectionProps) => {
  return (
    <section ref={aboutRef} className="about-section">
      <div className="section-content">
        <h2 className="section-title">{ABOUT_HEADLINE}</h2>
        <p className="section-text">{ABOUT_TEXT}</p>
      </div>
    </section>
  );
};

