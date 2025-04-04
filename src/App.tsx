
import React, { useRef } from "react";
import './App.css';
import {AboutSection,ContactSection, HeroSection} from "./sections";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="app-container">
      <HeroSection
        scrollToContact={() => scrollTo(contactRef)}
        scrollToAbout={() => scrollTo(aboutRef)}
      />
      <AboutSection aboutRef={aboutRef} />
      <ContactSection contactRef={contactRef} />
    </main>
  );
}

export default App;
