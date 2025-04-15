
import React, { useRef } from "react";
import {AboutSection,ContactSection, EntrySection} from "./sections";
import { MouseFollower } from "./component";
import "./App.css";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="app-container">
      <MouseFollower />
      <EntrySection
        scrollToContact={() => scrollTo(contactRef)}
        scrollToAbout={() => scrollTo(aboutRef)}
      />
      <AboutSection aboutRef={aboutRef} />
      <ContactSection contactRef={contactRef} />
    </main>
  );
}

export default App;
