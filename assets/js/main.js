document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    fadeEls.forEach((el) => observer.observe(el));
  } else {
    fadeEls.forEach((el) => el.classList.add('visible'));
  }

  const contactSubmit = document.querySelector('[data-contact-submit]');
  if (contactSubmit) {
    contactSubmit.addEventListener('click', () => {
      alert('Formulario enviado. Pronto nos comunicaremos con usted.');
    });
  }
});