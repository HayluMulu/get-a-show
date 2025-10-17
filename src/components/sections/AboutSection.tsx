import React, { useState, useEffect } from 'react';
import { Card } from '../ui';
import { useDeviceDetection } from '../../hooks';
import { AnimatedText } from '../animations';
import { ANIMATION_DELAYS } from '../../constants';

const ABOUT_TEXT = `לפני הכל – אחלה של בן אדם 😉
ובנוסף, אני עוזר לבעלי עסקים לבלוט בשוק,
להשיג לידים איכותיים ולהפוך צפיות להזדמנויות,
הכל בזכות צילום ועריכה מזווית אחרת,
כזאת שמרגישה כמו… משהו שלא מהעולם הזה ✨`;

export const AboutSection: React.FC = () => {
  const [showCards, setShowCards] = useState(false);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const { isMobile } = useDeviceDetection();

  useEffect(() => {
    // Show cards after a delay
    setTimeout(() => {
      setShowCards(true);
    }, ANIMATION_DELAYS.cards);
  }, []);

  const handleCardFlip = (cardIndex: number) => {
    if (isMobile) return; // Don't flip on mobile
    setFlippedCards(prev => ({
      ...prev,
      [cardIndex]: !prev[cardIndex]
    }));
  };

  const featureCards = [
    {
      icon: '🎯',
      title: 'מיקוד בתוצאות',
      description: 'כל פרויקט ממוקד בהשגת המטרות העסקיות שלכם'
    },
    {
      icon: '⚡',
      title: 'מהירות וזמינות',
      description: 'תהליך מהיר ויעיל עם תמיכה מלאה'
    },
    {
      icon: '🚀',
      title: 'יצירתיות ללא גבולות',
      description: 'פתרונות חדשניים וייחודיים לכל אתגר'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h1 className="about-title">מי אני אתם שואלים?</h1>
        
        <div className="megaphone-container">
          <img
            src="/geta_emoji_megaphone.png"
            alt="Get A Show - Personal Branding"
            className="megaphone-icon"
          />
          <div className="megaphone-text-container">
            <p className="megaphone-text">
              <AnimatedText
                text={ABOUT_TEXT}
                isVisible={true}
                delay={ANIMATION_DELAYS.sentence}
              />
            </p>
          </div>
        </div>
        
        {/* Cards that appear after text animation */}
        <div className={`cards-container ${showCards ? "cards-visible" : "cards-hidden"}`}>
          {/* Main description card */}
          <Card className="main-description-card">
            <h3 className="main-card-title">מה זה אומר בפועל?</h3>
            <div className="main-card-content">
              <p>
                אנחנו יוצרים סרטונים שמספרים את הסיפור של העסק שלך בצורה ייחודית ומרתקת. 
                כל פרויקט מתחיל בהבנה עמוקה של המטרות והקהל שלך.
              </p>
              <p>
                התוצאה? תוכן שמביא לידים איכותיים, מגדיל את המודעות למותג שלך, 
                ומעניק לך יתרון תחרותי אמיתי בשוק.
              </p>
            </div>
          </Card>
          
          {/* Feature cards in row */}
          <div className="feature-cards-row">
            {featureCards.map((card, index) => (
              <div 
                key={index}
                className={`feature-card ${!isMobile && flippedCards[index] ? 'flipped' : ''}`}
                onClick={() => handleCardFlip(index)}
              >
                {isMobile ? (
                  // Mobile: Show content directly without flip
                  <>
                    <div className="card-icon">{card.icon}</div>
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                  </>
                ) : (
                  // Desktop/Tablet: Show flip animation
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="card-icon">{card.icon}</div>
                    </div>
                    <div className="card-back">
                      <div className="card-icon">{card.icon}</div>
                      <h3 className="card-title">{card.title}</h3>
                      <p className="card-description">{card.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
