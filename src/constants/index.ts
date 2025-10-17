// Application constants

export const CONTACT_INFO = {
  email: 'getashow123@gmail.com',
  whatsapp: 'https://wa.link/ofhnmb',
  instagram: 'https://katzr.net/5e0c54',
  formEndpoint: 'https://formspree.io/f/xyznvkek',
};

export const ANIMATION_DELAYS = {
  sentence: 700, // ms between sentences
  cards: 4000, // ms before cards appear
};

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1024,
};

export const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    url: CONTACT_INFO.whatsapp,
    icon: '📱',
    color: 'green',
  },
  {
    name: 'Instagram',
    url: CONTACT_INFO.instagram,
    icon: '📸',
    color: 'purple',
  },
  {
    name: 'Email',
    url: `mailto:${CONTACT_INFO.email}`,
    icon: '✉️',
    color: 'red',
  },
];

