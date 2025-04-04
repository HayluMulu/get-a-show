import './HeroSection.css';

type HeroSectionProps = {
  scrollToContact: () => void;
  scrollToAbout: () => void;
};

export const HeroSection = ({ scrollToContact, scrollToAbout }: HeroSectionProps) => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">ברוך הבא לדף שלי</h1>
      <div className="hero-buttons">
        <button onClick={scrollToContact} className="btn btn-primary">
          יצירת קשר
        </button>
        <button onClick={scrollToAbout} className="btn btn-outline">
          קצת עליי
        </button>
      </div>
    </section>
  );
};

