import React, { useEffect, useRef, useState } from "react";
import './AboutSection.css';
import { ABOUT_HEADLINE, ABOUT_TEXT } from "./consts";

type AboutSectionProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
};

export const AboutSection = ({ aboutRef }: AboutSectionProps) => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // חיתוך לפי משפטים ופסיקים
  const sentences = ABOUT_TEXT.match(/[^\.!?\,]+[\.!?\,]?/g) || [];

  return (
    <section ref={(el:HTMLDivElement) => {
      sectionRef.current = el;
      if (aboutRef) aboutRef.current = el;
    }} className="about-section">
      <div className="about-content">
        <h1 className="about-title">{ABOUT_HEADLINE}</h1>
        <div className="megaphone-container">
          <img
            src={"geta_emoji_megaphone.png"}
            alt="Megaphone"
            className="megaphone-icon"
          />
          <p className="megaphone-text">
            {sentences.map((sentence, index) => (
              <span
                key={index}
                className={`sentence ${show ? "show" : ""}`}
                style={{ transitionDelay: `${index * 700}ms` }}>
                {sentence.trim()}&nbsp;
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
