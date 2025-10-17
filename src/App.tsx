import StarfieldBackground from './components/StarfieldBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import AlienCursorFollower from './components/AlienCursorFollower';

function App() {
  return (
    <div className="min-h-screen bg-space-blue text-white" dir="rtl">
      {/* Background */}
      <StarfieldBackground />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Interactive elements */}
      <AlienCursorFollower />
      
      {/* Footer */}
      <footer className="bg-space-blue/80 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center space-x-4 space-x-reverse mb-4">
            <h3 className="text-xl font-semibold text-electric-cyan hebrew-text">    Get A Show</h3>
          </div>
          <p className="text-white/80 hebrew-text">
            מהחלל החיצון לעסק שלך - תוכן וידאו ייחודי וחדשני
          </p>
          <div className="mt-4 text-sm text-white/60">
            © 2024 Get A Show. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;