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

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const initCarousel = (root) => {
    const track = root.querySelector('.eje-carousel-track');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('img'));
    if (slides.length <= 1) return;

    const prevBtn = root.querySelector('[data-carousel-prev]');
    const nextBtn = root.querySelector('[data-carousel-next]');
    const dotButtons = Array.from(root.querySelectorAll('[data-carousel-dot]'));

    let index = 0;
    let timerId = null;
    let paused = false;

    const setIndex = (nextIndex) => {
      index = ((nextIndex % slides.length) + slides.length) % slides.length;
      track.style.transform = `translate3d(${-index * 100}%, 0, 0)`;

      dotButtons.forEach((btn, i) => {
        const isActive = i === index;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-current', isActive ? 'true' : 'false');
      });
    };

    const goPrev = () => setIndex(index - 1);
    const goNext = () => setIndex(index + 1);

    const stop = () => {
      if (timerId) window.clearInterval(timerId);
      timerId = null;
    };

    const start = () => {
      if (prefersReducedMotion) return;
      const autoplayAttr = root.getAttribute('data-autoplay');
      if (autoplayAttr && autoplayAttr.toLowerCase() === 'false') return;

      const interval = Number(root.getAttribute('data-interval')) || 5200;
      stop();
      timerId = window.setInterval(() => {
        if (!paused) goNext();
      }, Math.max(2000, interval));
    };

    if (!root.hasAttribute('tabindex')) root.tabIndex = 0;

    prevBtn?.addEventListener('click', () => {
      paused = true;
      goPrev();
    });
    nextBtn?.addEventListener('click', () => {
      paused = true;
      goNext();
    });

    dotButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        paused = true;
        const next = Number(btn.getAttribute('data-carousel-dot'));
        if (!Number.isNaN(next)) setIndex(next);
      });
    });

    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        paused = true;
        goPrev();
      } else if (e.key === 'ArrowRight') {
        paused = true;
        goNext();
      }
    });

    root.addEventListener('mouseenter', () => {
      paused = true;
    });
    root.addEventListener('mouseleave', () => {
      paused = false;
    });
    root.addEventListener('focusin', () => {
      paused = true;
    });
    root.addEventListener('focusout', () => {
      paused = false;
    });

    setIndex(0);
    start();
  };

  document.querySelectorAll('[data-carousel]').forEach(initCarousel);

  const contactSubmit = document.querySelector('[data-contact-submit]');
  if (contactSubmit) {
    contactSubmit.addEventListener('click', () => {
      alert('Formulario enviado. Pronto nos comunicaremos con usted.');
    });
  }
});

const form = document.getElementById("form-contacto");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validación simple
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre.length < 3) {
      status.textContent = "El nombre debe tener al menos 3 caracteres.";
      status.style.color = "red";
      return;
    }

    if (!email.includes("@")) {
      status.textContent = "Ingrese un correo válido.";
      status.style.color = "red";
      return;
    }

    if (mensaje.length < 10) {
      status.textContent = "El mensaje es demasiado corto.";
      status.style.color = "red";
      return;
    }

    // Envío a Netlify
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: data
      });

      status.textContent = "Mensaje enviado correctamente. Nos comunicaremos pronto.";
      status.style.color = "green";

      form.reset();
    } catch (error) {
      status.textContent = "Error al enviar el mensaje. Intente nuevamente.";
      status.style.color = "red";
    }
  });
}
