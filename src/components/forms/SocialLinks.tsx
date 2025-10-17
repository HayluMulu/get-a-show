import React from 'react';
import { Card } from '../ui';
import { WhatsAppIcon, InstagramIcon, GmailIcon } from '../icons';
import { CONTACT_INFO } from '../../constants';

interface SocialLinksProps {
  variant?: 'mobile' | 'desktop';
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'desktop',
  className = '',
}) => {
  const openWhatsApp = () => {
    window.open(CONTACT_INFO.whatsapp, '_blank');
  };

  const openInstagram = () => {
    window.open(CONTACT_INFO.instagram, '_blank');
  };

  const openGmail = () => {
    window.open(`mailto:${CONTACT_INFO.email}`, '_blank');
  };

  if (variant === 'mobile') {
    return (
      <div className={`md:hidden mt-8 ${className}`}>
        <h3 className="text-xl font-semibold text-electric-cyan m-4 hebrew-text text-center">
          או פשוט התקשרו
        </h3>
        <Card className="social-links-card p-6 mx-2" hover={false}>
          <div className="space-y-4">
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <WhatsAppIcon />
              <span className="mr-3">WhatsApp - בואו נדבר עכשיו</span>
            </button>

            <button
              onClick={openInstagram}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <InstagramIcon />
              <span className="mr-3">Instagram - בואו להתרשם</span>
            </button>

            <button
              onClick={openGmail}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <GmailIcon />
              <span className="mr-3">Gmail - שלחו לנו מייל</span>
            </button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={`hidden md:block fixed bottom-8 right-8 z-40 ${className}`}>
      <div className="flex flex-col space-y-4">
        <button
          onClick={openWhatsApp}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white group"
          title="WhatsApp"
        >
          <WhatsAppIcon />
        </button>

        <button
          onClick={openInstagram}
          className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white group"
          title="Instagram"
        >
          <InstagramIcon />
        </button>

        <button
          onClick={openGmail}
          className="w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white group"
          title="Gmail"
        >
          <GmailIcon />
        </button>
      </div>
    </div>
  );
};
