import React, { useState } from 'react';

// SVG Icons
const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const GmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819L12 8.73l6.545-4.909h3.819c.904 0 1.636.732 1.636 1.636z"/>
  </svg>
);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Special handling for phone number - only allow digits and limit to 10
    if (name === 'phone') {
      const phoneValue = value.replace(/\D/g, ''); // Remove non-digits
      if (phoneValue.length <= 10) {
        setFormData(prev => ({
          ...prev,
          [name]: phoneValue
        }));
      }
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Clear form data but keep success message
    setFormData({ name: '', phone: '', message: '' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.link/ofhnmb', '_blank');
  };

  const openInstagram = () => {
    window.open('https://katzr.net/5e0c54', '_blank');
  };

  const openGmail = () => {
    window.open('mailto:getashow123@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="min-h-screen bg-space-blue flex items-center justify-center py-8">
      <div className="container-custom w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-electric-cyan mb-3 md:mb-4 hebrew-text">
            בואו נתחיל לעבוד יחד
          </h2>
          <p className="text-base md:text-xl text-white/80 hebrew-text max-w-3xl mx-auto px-2">
            מוכנים להביא את העסק שלך למקום אחר? בואו נדבר על הפרויקט הבא שלכם
          </p>
        </div>

        <div className="flex justify-center px-2">
          {/* Contact Form */}
          <div className="w-full max-w-lg bg-space-blue/50 backdrop-blur-sm border border-cosmic-purple/30 rounded-2xl p-3 md:p-6">
            {!isSubmitted && (
              <h3 className="text-xl font-semibold text-electric-cyan mb-4 hebrew-text">
                תשאירו פרטים
              </h3>
            )}
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h4 className="text-2xl font-semibold text-electric-cyan mb-3 hebrew-text">
                  תודה רבה!
                </h4>
                <p className="text-white/80 hebrew-text text-base">
                  נחזור אליכם בהקדם האפשרי
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-1 hebrew-text text-sm">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="השם שלכם"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-1 hebrew-text text-sm">
                    מספר טלפון
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-input text-right"
                    placeholder="050-1234567"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    title="אנא הזינו מספר טלפון ישראלי תקין (10 ספרות)"
                    style={{ direction: 'ltr', textAlign: 'right' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-1 hebrew-text text-sm">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="form-input resize-none"
                    placeholder="ספרו לנו על הפרויקט שלכם..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-base py-3 rounded-xl glow-cyan hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      שולח...
                    </span>
                  ) : (
                    'שליחת פרטים'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mobile Social Links Card */}
            <h3 className="text-xl font-semibold text-electric-cyan m-4 hebrew-text text-center">
              או פשוט התקשרו
            </h3>
        <div className="md:hidden mt-8">
          <div className="bg-cosmic-purple/20 backdrop-blur-sm border border-cosmic-purple/40 rounded-2xl p-6 mx-2">
            
            <div className="space-y-4">
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <WhatsAppIcon />
                <span className="mr-3">WhatsApp - בואו נדבר עכשיו</span>
              </button>

              <button
                onClick={openInstagram}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <InstagramIcon />
                <span className="mr-3">Instagram - בואו להתרשם</span>
              </button>

              <button
                onClick={openGmail}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <GmailIcon />
                <span className="mr-3">Gmail - שלחו לנו מייל</span>
              </button>
            </div>
          </div>
        </div>

        {/* Fixed Social Links - Desktop Only */}
        <div className="hidden md:block fixed bottom-8 right-8 z-40">
          <div className="flex flex-col space-y-4">
            {/* WhatsApp */}
            <button
              onClick={openWhatsApp}
              className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white group"
              title="WhatsApp"
            >
              <WhatsAppIcon />
            </button>

            {/* Instagram */}
            <button
              onClick={openInstagram}
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white group"
              title="Instagram"
            >
              <InstagramIcon />
            </button>

            {/* Gmail */}
            <button
              onClick={openGmail}
              className="w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white group"
              title="Gmail"
            >
              <GmailIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;