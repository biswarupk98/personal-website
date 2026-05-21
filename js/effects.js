/**
 * effects.js — scroll-reveal, reading progress bar, cursor glow, copy toast
 */

// ── Scroll-reveal ──────────────────────────────────────
export function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  els.forEach(el => observer.observe(el));
}

// ── Reading progress bar ───────────────────────────────
export function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop    = window.scrollY;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const pct          = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width    = `${pct.toFixed(1)}%`;
  }, { passive: true });
}

// ── Cursor glow (desktop) ──────────────────────────────
export function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) return;

  let visible = false;

  document.addEventListener('mousemove', e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top  = `${e.clientY}px`;
    if (!visible) { glow.style.opacity = '1'; visible = true; }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
    visible = false;
  });
}

// ── Copy-to-clipboard toast ────────────────────────────
export function initCopyLinks() {
  const toast = document.getElementById('toast');

  document.querySelectorAll('.ref-email').forEach(el => {
    el.style.cursor = 'pointer';
    el.title = 'Click to copy';

    el.addEventListener('click', async () => {
      const text = el.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        showToast(`Copied: ${text}`);
      } catch {
        showToast('Copy not available in this browser');
      }
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2200);
  }
}