// SWDL Real Estate — © Seedwel Investment Limited

// ---------- Mobile nav ----------
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// ---------- Auto-playing hero slider ----------
const slides = document.querySelectorAll('.hero .slide');
const dotsWrap = document.querySelector('.hero-dots');
let current = 0;
let timer = null;

function showSlide(i) {
  if (!slides.length) return;
  current = (i + slides.length) % slides.length;
  slides.forEach((s, idx) => s.classList.toggle('active', idx === current));
  if (dotsWrap) {
    dotsWrap.querySelectorAll('button').forEach((d, idx) =>
      d.classList.toggle('active', idx === current)
    );
  }
}

function startAutoplay() {
  stopAutoplay();
  timer = setInterval(() => showSlide(current + 1), 5000);
}
function stopAutoplay() {
  if (timer) clearInterval(timer);
}

if (slides.length) {
  // build dots
  if (dotsWrap) {
    slides.forEach((_, idx) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
      b.addEventListener('click', () => { showSlide(idx); startAutoplay(); });
      dotsWrap.appendChild(b);
    });
  }
  const prev = document.querySelector('.hero-arrow.prev');
  const next = document.querySelector('.hero-arrow.next');
  if (prev) prev.addEventListener('click', () => { showSlide(current - 1); startAutoplay(); });
  if (next) next.addEventListener('click', () => { showSlide(current + 1); startAutoplay(); });

  showSlide(0);
  startAutoplay();
}

// ---------- Contact form (demo) ----------
const form = document.querySelector('form.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your enquiry has been received. The SWDL team will contact you shortly.');
    form.reset();
  });
}

// ---------- Footer year ----------
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
