// Scroll animation utility with alternating left/right animations
export const observeElements = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Add specific animation based on data attribute
        const animationType = entry.target.getAttribute('data-animation');
        if (animationType) {
          entry.target.classList.add(animationType);
        }
        // Unobserve after animation to prevent re-triggering
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((el) => observer.observe(el));

  return observer;
};
