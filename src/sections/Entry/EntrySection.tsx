import { ENTRY_HEADLINE, LETS_MEET, STRAIGHT_TO_THE_POINT } from './consts';
import './EntrySection.css';

type EntrySectionProps = {
  scrollToContact: () => void;
  scrollToAbout: () => void;
};

export const EntrySection = ({
  scrollToContact,
  scrollToAbout,
}: EntrySectionProps) => {


  return (
    <section className="entry-section">
     
      <h1 className="entry-title">{ENTRY_HEADLINE}</h1>
      <div className="entry-buttons">
        <button onClick={scrollToAbout} className="btn btn-outline">
          {LETS_MEET}
        </button>
        <button onClick={scrollToContact} className="btn btn-primary">
          {STRAIGHT_TO_THE_POINT}
        </button>
      </div>
    </section>
  );
};
