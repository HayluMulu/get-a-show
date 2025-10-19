import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isSmallScreen = window.innerWidth <= 768;
      return isMobileDevice || isSmallScreen;
    };

    const mobile = checkMobile();
    setIsMobile(mobile);

    // Skip splash screen on mobile
    if (mobile) {
      onComplete();
      return;
    }

    // Add class to body to prevent scrolling during splash
    document.body.classList.add('splash-active');
    
    // Set a timer for 5.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out animation to complete before calling onComplete
      setTimeout(() => {
        document.body.classList.remove('splash-active');
        onComplete();
      }, 800); // Increased fade out duration for smoother transition
    }, 5500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('splash-active');
    };
  }, [onComplete]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(true); // Show fallback content
  };

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div 
      className={`splash-screen ${!isVisible ? 'fade-out' : ''}`}
      style={{ zIndex: 9999 }}
    >
      <div className="splash-video-container">
        {!videoError ? (
          <video
            className={`splash-video ${videoLoaded ? 'loaded' : 'loading'}`}
            autoPlay
            muted
            playsInline
            onLoadedData={handleVideoLoad}
            onCanPlayThrough={handleVideoLoad}
            onError={handleVideoError}
          >
            <source src="/logo-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback content if video fails to load
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-4xl font-bold text-electric-cyan hebrew-text mb-2">
              Get A Show
            </h1>
            <p className="text-white/80 hebrew-text text-lg">
              מהחלל החיצון לעסק שלך
            </p>
          </div>
        )}
        
        {/* Loading indicator while video loads */}
        {!videoLoaded && !videoError && (
          <div className="splash-loading">
            <div className="video-loading-spinner"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
