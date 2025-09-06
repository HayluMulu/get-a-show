import {
  CUT_AND_RESTART,
  DONT_HAVE_LIDS,
  FROM_OTHER_SPACE,
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
        <h1>{FROM_OTHER_SPACE}</h1>
        <h3>{DONT_HAVE_LIDS}</h3>
        <h3>{CUT_AND_RESTART}</h3>
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
