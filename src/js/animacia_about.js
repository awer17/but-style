

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.item');

  const checkVisibility = () => {
    const windowHeight = window.innerHeight;
    const windowCenter = windowHeight / 1.3;


    elements.forEach(el => {
      const elementRect = el.getBoundingClientRect();
      const elementCenter = elementRect.top + (elementRect.height / 5);
      if (elementCenter < windowCenter && elementCenter > 0) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});
