import React from "react";
import './AboutSection.css';
import { ABOUT_HEADLINE, ABOUT_TEXT } from "./consts";

type AboutSectionProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
};

export const AboutSection = ({ aboutRef }: AboutSectionProps) => {
  return (
    <section ref={aboutRef} className="about-section">
      <div className="about-content">
        <h2 className="about-title">{ABOUT_HEADLINE}</h2>
        <p className="about-text">{ABOUT_TEXT}</p>
      </div>
    </section>
  );
};

