/* ============================================
   MAXI'M PELUQUEROS — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── NAV SCROLL ───
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // estado inicial

  // ─── MENÚ HAMBURGUESA ───
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Cerrar al hacer clic en enlace del menú móvil
  document.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // ─── SCROLL SUAVE PARA ANCLAS ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-h')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── ANIMACIONES FADE-UP AL ENTRAR EN VIEWPORT ───
  const fadeTargets = document.querySelectorAll(
    '.servicio-card, .nosotros__texto, .nosotros__visual, .contacto__info, .contacto__mapa, .stat'
  );

  fadeTargets.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Pequeño delay escalonado para tarjetas en grid
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeTargets.forEach(el => observer.observe(el));

  // ─── ACTIVE LINK EN NAV ───
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  const linkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === '#' + entry.target.id
            ? 'var(--c-gold)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => linkObserver.observe(s));

  // ─── LÓGICA DEL CARRUSEL ───
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (track && prevBtn && nextBtn) {
    let index = 0;

    const getItemsPerPage = () => {
      if (window.innerWidth <= 480) return 1;
      if (window.innerWidth <= 768) return 2;
      return 3;
    };

    const updateCarousel = () => {
      const itemsPerPage = getItemsPerPage();
      const totalItems = track.children.length;
      if (index > totalItems - itemsPerPage) {
        index = totalItems - itemsPerPage;
      }
      if (index < 0) index = 0;

      const percentage = -(index * (100 / itemsPerPage));
      track.style.transform = `translateX(${percentage}%)`;
    };

    nextBtn.addEventListener('click', () => {
      const itemsPerPage = getItemsPerPage();
      const totalItems = track.children.length;
      if (index < totalItems - itemsPerPage) {
        index++;
      } else {
        index = 0; // Vuelve al principio si llega al final
      }
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      if (index > 0) {
        index--;
      } else {
        const itemsPerPage = getItemsPerPage();
        index = track.children.length - itemsPerPage; // Va al final si está al principio
      }
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
  }

});