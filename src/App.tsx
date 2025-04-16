
import React, { useRef } from "react";
import {AboutSection,ContactSection, EntrySection} from "./sections";
import { MouseFollower } from "./component";
import "./App.css";
import { useStarfield } from "./hooks";

function App() {
  const canvasRef = useStarfield({meteorColor: "#420044"});
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <canvas ref={canvasRef} className="stars-canvas" />
      <main className="app-container">
        <MouseFollower />
        <EntrySection
          scrollToContact={() => scrollTo(contactRef)}
          scrollToAbout={() => scrollTo(aboutRef)}
        />
        <AboutSection aboutRef={aboutRef} />
        <ContactSection contactRef={contactRef} />
      </main>
    </>
  );
}

export default App;
