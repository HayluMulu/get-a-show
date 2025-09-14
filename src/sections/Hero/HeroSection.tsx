import {
  FROM_OTHER_SPACE,
  STRAIGHT_TO_BUSINESS,
  HIGH_FLYING_VIDEOS,
  QUALITY_LANDINGS,
  LETS_MEET,
  STRAIGHT_TO_THE_POINT,
} from "./consts.js";
import "./HeroSection.css";

// Props interface for the Hero section component
interface HeroSectionProps {
  scrollToContact: () => void;
  scrollToAbout: () => void;
}

/**
 * Hero Section Component
 * 
 * The main landing section of the website featuring:
 * - Hero title with space-themed text
 * - Call-to-action buttons for navigation
 * - Responsive design with Hebrew (RTL) support
 */
export const HeroSection = ({
  scrollToContact,
  scrollToAbout,
}: HeroSectionProps) => {

  return (
    <section className="hero-section">
      {/* Main hero content */}
      <div className="hero-title">
        {/* Primary title with space theme */}
        <div className="hero-main-title">
          <h1 className="hero-space-text">{FROM_OTHER_SPACE}</h1>
          <h1>{STRAIGHT_TO_BUSINESS}</h1>
        </div>
        
        {/* Subtitle descriptions */}
        <h3>{HIGH_FLYING_VIDEOS}</h3>
        <h3>{QUALITY_LANDINGS}</h3>
      </div>

      {/* Call-to-action buttons */}
      <div className="hero-buttons">
        <button 
          onClick={scrollToAbout} 
          className="btn btn-primary"
          aria-label="Navigate to About section"
        >
          {LETS_MEET}
        </button>
        <button 
          onClick={scrollToContact} 
          className="btn btn-primary"
          aria-label="Navigate to Contact section"
        >
          {STRAIGHT_TO_THE_POINT}
        </button>
      </div>
    </section>
  );
};
