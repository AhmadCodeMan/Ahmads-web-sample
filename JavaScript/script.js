// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && 
      rect.bottom >= 0
    );
  };

  // Function to add the 'in-view' class to elements in the viewport
  const handleScroll = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('in-view');
      }
    });
  };

  // Add the 'animate' class to all elements that should be animated
  const elementsToAnimate = [
    'header', '.hero', '.services', '.service-card', '.about', '.portfolio', 
    '.portfolio-item', '.testimonials', '.testimonial', '.team', '.team-member', 
    '.contact', 'footer', '.footer-content', '.footer-links li', '.developer a'
  ];

  elementsToAnimate.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add('animate');
    });
  });

  // Run handleScroll on page load and on scroll
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});
