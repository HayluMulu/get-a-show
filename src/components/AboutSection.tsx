import React, { useEffect, useRef, useState } from 'react';

const AboutSection: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          // Show cards after text animation completes (sentences.length * 700ms + 1000ms buffer)
          setTimeout(() => {
            setShowCards(true);
          }, 4000);
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

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Text from your previous version
  const ABOUT_TEXT = `לפני הכל – אחלה של בן אדם 😉
ובנוסף, אני עוזר לבעלי עסקים לבלוט בשוק,
להשיג לידים איכותיים ולהפוך צפיות להזדמנויות,
הכל בזכות צילום ועריכה מזווית אחרת,
כזאת שמרגישה כמו… משהו שלא מהעולם הזה ✨`;

  // Split text by sentences and punctuation
  const sentences = ABOUT_TEXT.match(/[^.!?,]+[.!?,]?/g) || [];

  const handleCardFlip = (cardIndex: number) => {
    if (isMobile) return; // Don't flip on mobile
    setFlippedCards(prev => ({
      ...prev,
      [cardIndex]: !prev[cardIndex]
    }));
  };

  return (
    <section id="about" ref={sectionRef} className="about-section">
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
        
        {/* Cards that appear after text animation - moved outside megaphone-text-container */}
        <div className={`cards-container ${showCards ? "cards-visible" : "cards-hidden"}`}>
          {/* Main description card */}
          <div className="main-description-card">
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
          </div>
          
          {/* Feature cards in row */}
          <div className="feature-cards-row">
            <div 
              className={`feature-card ${!isMobile && flippedCards[0] ? 'flipped' : ''}`}
              onClick={() => handleCardFlip(0)}
            >
              {isMobile ? (
                // Mobile: Show content directly without flip
                <>
                  <div className="card-icon">🎯</div>
                  <h3 className="card-title">מיקוד בתוצאות</h3>
                  <p className="card-description">כל פרויקט ממוקד בהשגת המטרות העסקיות שלכם</p>
                </>
              ) : (
                // Desktop/Tablet: Show flip animation
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-icon">🎯</div>
                  </div>
                  <div className="card-back">
                    <div className="card-icon">🎯</div>
                    <h3 className="card-title">מיקוד בתוצאות</h3>
                    <p className="card-description">כל פרויקט ממוקד בהשגת המטרות העסקיות שלכם</p>
                  </div>
                </div>
              )}
            </div>
            
            <div 
              className={`feature-card ${!isMobile && flippedCards[1] ? 'flipped' : ''}`}
              onClick={() => handleCardFlip(1)}
            >
              {isMobile ? (
                // Mobile: Show content directly without flip
                <>
                  <div className="card-icon">⚡</div>
                  <h3 className="card-title">מהירות וזמינות</h3>
                  <p className="card-description">תהליך מהיר ויעיל עם תמיכה מלאה</p>
                </>
              ) : (
                // Desktop/Tablet: Show flip animation
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-icon">⚡</div>
                  </div>
                  <div className="card-back">
                    <div className="card-icon">⚡</div>
                    <h3 className="card-title">מהירות וזמינות</h3>
                    <p className="card-description">תהליך מהיר ויעיל עם תמיכה מלאה</p>
                  </div>
                </div>
              )}
            </div>
            
            <div 
              className={`feature-card ${!isMobile && flippedCards[2] ? 'flipped' : ''}`}
              onClick={() => handleCardFlip(2)}
            >
              {isMobile ? (
                // Mobile: Show content directly without flip
                <>
                  <div className="card-icon">🚀</div>
                  <h3 className="card-title">יצירתיות ללא גבולות</h3>
                  <p className="card-description">פתרונות חדשניים וייחודיים לכל אתגר</p>
                </>
              ) : (
                // Desktop/Tablet: Show flip animation
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-icon">🚀</div>
                  </div>
                  <div className="card-back">
                    <div className="card-icon">🚀</div>
                    <h3 className="card-title">יצירתיות ללא גבולות</h3>
                    <p className="card-description">פתרונות חדשניים וייחודיים לכל אתגר</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;