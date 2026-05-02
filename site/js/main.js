/* =============================================================
   Katona Hair Restoration · main.js
   Theme toggle, scroll reveals, nav state, FAQ behavior
   ============================================================= */

(() => {
  // ---------- THEME TOGGLE (no flash — also handled inline in <head>) ----------
  const root = document.documentElement;
  const toggleBtn = document.querySelector('.theme-toggle');

  function setTheme(t) {
    root.dataset.theme = t;
    try { localStorage.setItem('katona-theme', t); } catch(_) {}
  }
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next = root.dataset.theme === 'light' ? 'dark' : 'light';
      setTheme(next);
    });
  }

  // ---------- NAV — scrolled state ----------
  const nav = document.querySelector('nav.bar');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 12) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- SCROLL REVEALS ----------
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  // ---------- HERO PARALLAX ----------
  const heroBg = document.querySelector('.hero .hero-bg');
  if (heroBg && window.matchMedia('(min-width: 980px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      heroBg.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // ---------- FAQ — only one open at a time (optional behavior) ----------
  const faqs = document.querySelectorAll('.faq');
  faqs.forEach(faq => {
    faq.addEventListener('toggle', () => {
      if (faq.open) {
        faqs.forEach(other => { if (other !== faq) other.open = false; });
      }
    });
  });

  // ---------- ACCESSIBLE BUTTON FOR <details> CHEVRONS ----------
  // (already handled via summary clickable area; just ensures keyboard works)
})();
