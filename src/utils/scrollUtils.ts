// Scroll utility functions

export const scrollToElement = (elementId: string, behavior: ScrollBehavior = 'smooth') => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior });
  }
};

export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({ top: 0, behavior });
};

export const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({ top: document.body.scrollHeight, behavior });
};

