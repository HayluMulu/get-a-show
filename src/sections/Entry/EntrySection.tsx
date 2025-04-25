import {
  CUT_AND_RESTART,
  DONT_HAVE_LIDS,
  LETS_MEET,
  STRAIGHT_TO_THE_POINT,
} from "./consts";
import "./EntrySection.css";

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
      <div className="entry-title">
        <h1>{DONT_HAVE_LIDS}</h1>
        <h1>{CUT_AND_RESTART}</h1>
      </div>
      <div className="entry-buttons">
        <button onClick={scrollToAbout} className="btn btn-primary">
          {LETS_MEET}
        </button>
        <button onClick={scrollToContact} className="btn btn-primary">
          {STRAIGHT_TO_THE_POINT}
        </button>
      </div>
    </section>
  );
};
