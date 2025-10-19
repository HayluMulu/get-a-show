import { useState } from 'react';
import { StarfieldBackground, AlienCursorFollower, SplashScreen } from './components/animations';
import { HeroSection, AboutSection, ContactSection } from './components/sections';
import { ToastProvider } from './components/ui';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashComplete, setSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setSplashComplete(true);
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-space-blue text-white" dir="rtl">
        {/* Background */}
        <StarfieldBackground />
        
        {/* Main content - always rendered but with fade-in animation */}
        <main className={`relative z-10 transition-opacity duration-1000 ${splashComplete ? 'opacity-100' : 'opacity-0'}`}>
          <HeroSection />
          <AboutSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className={`bg-space-blue/80 backdrop-blur-sm border-t border-white/10 py-8 transition-opacity duration-1000 ${splashComplete ? 'opacity-100' : 'opacity-0'}`}>
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
        
        {/* Interactive elements */}
        <AlienCursorFollower />
        
        {/* Splash Screen - overlays everything */}
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </div>
    </ToastProvider>
  );
}

export default App;