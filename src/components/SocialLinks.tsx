// import React, { useState } from 'react';

// const SocialLinks: React.FC = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const openWhatsApp = () => {
//     window.open('https://wa.link/ofhnmb', '_blank');
//   };

//   const openInstagram = () => {
//     window.open('https://katzr.net/5e0c54', '_blank');
//   };

//   return (
//     <div className="fixed bottom-8 left-8 z-40">
//       {/* Main toggle button */}
//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="w-16 h-16 bg-gradient-to-r from-cosmic-purple to-electric-cyan rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white text-2xl mb-4 glow-purple"
//       >
//         <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
//           +
//         </span>
//       </button>

//       {/* Social links */}
//       <div className={`space-y-4 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
//         {/* WhatsApp */}
//         <button
//           onClick={openWhatsApp}
//           className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white text-xl group"
//           title="WhatsApp"
//         >
//           <span className="group-hover:scale-110 transition-transform duration-200">📱</span>
//         </button>

//         {/* Instagram */}
//         <button
//           onClick={openInstagram}
//           className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white text-xl group"
//           title="Instagram"
//         >
//           <span className="group-hover:scale-110 transition-transform duration-200">📸</span>
//         </button>

//         {/* Email */}
//         <button
//           onClick={() => {
//             const contactSection = document.getElementById('contact');
//             if (contactSection) {
//               contactSection.scrollIntoView({ behavior: 'smooth' });
//             }
//             setIsExpanded(false);
//           }}
//           className="w-12 h-12 bg-electric-cyan hover:bg-cyan-400 text-space-blue rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-xl group"
//           title="Contact Form"
//         >
//           <span className="group-hover:scale-110 transition-transform duration-200">✉️</span>
//         </button>
//       </div>

//       {/* Tooltip */}
//       {isExpanded && (
//         <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-space-blue/90 backdrop-blur-sm border border-electric-cyan/30 rounded-lg px-4 py-2 text-white text-sm hebrew-text whitespace-nowrap">
//           בואו נדבר!
//         </div>
//       )}
//     </div>
//   );
// };

// export default SocialLinks;