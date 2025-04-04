// src/components/ContactSection.tsx
import React from "react";
import './ContactSection.css';

type ContactSectionProps = {
  contactRef: React.RefObject<HTMLDivElement | null>;
};

export const ContactSection = ({ contactRef }: ContactSectionProps) => {
  return (
    <section ref={contactRef} className="contact-section">
      <div className="section-content">
        <h2 className="section-title">צרו קשר</h2>
        <form className="contact-form">
          <input type="text" placeholder="שם" className="input" />
          <input type="email" placeholder="אימייל" className="input" />
          <textarea placeholder="הודעה" className="textarea" />
          <button type="submit" className="btn btn-primary full-width">
            שלח
          </button>
        </form>
      </div>
    </section>
  );
};

