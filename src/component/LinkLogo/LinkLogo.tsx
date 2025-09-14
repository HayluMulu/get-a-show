import React, { useState } from "react";
import LinkLogo from "../../assets/link.svg?react";
import WhatsAppLogo from "../../assets/whatsapp.svg?react";
import InstagramLogo from "../../assets/instagram.svg?react";
import "./LinkLogo.css";

interface SocialIcon {
  id: string;
  component: React.ComponentType<{ className?: string }>;
  className: string;
  color: string;
  href: string;
}

const socialIcons: SocialIcon[] = [
  {
    id: "whatsapp",
    component: WhatsAppLogo,
    className: "whatsapp-icon",
    color: "#25D366",
    href: "https://wa.link/ofhnmb",
  },
  {
    id: "instagram",
    component: InstagramLogo,
    className: "instagram-icon",
    color: "#1877F2",
    href: "https://katzr.net/5e0c54",
  },
];

export const LinkLogoComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClick = () => {
    if (isOpen) {
      setClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
      }, 300); // Match animation duration
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="link-logo-container">
      <LinkLogo className="linksIcon" onClick={handleClick} />
      {isOpen && (
        <div className={`social-icons-container ${closing ? 'closing' : ''}`}>
          {socialIcons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <a 
                key={icon.id}
                className={`social-icon-wrapper ${icon.className}`}
                style={{ 
                  '--icon-color': icon.color,
                  '--animation-delay': `${index * 0.1}s`
                } as React.CSSProperties}
                href={icon.href}              >
                <IconComponent className="social-icon" />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
