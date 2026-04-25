/**
 * DESAFIO AFIRMAÇÕES PODEROSAS — Motor do Funil
 */

const TRACKING_CONFIG = {
  ga4_id: '',
  meta_pixel_id: '',
  custom_webhook: '',
};

function trackEvent(eventName, data = {}) {
  const payload = { event: eventName, timestamp: Date.now(), ...data };
  console.log(`[TRACK] ${eventName}`, payload);
  if (TRACKING_CONFIG.ga4_id && typeof gtag === 'function') gtag('event', eventName, data);
  if (TRACKING_CONFIG.meta_pixel_id && typeof fbq === 'function') fbq('trackCustom', eventName, data);
  if (TRACKING_CONFIG.custom_webhook) {
    try { navigator.sendBeacon(TRACKING_CONFIG.custom_webhook, JSON.stringify(payload)); } catch (e) {}
  }
}

function initUrgency() {
  if (!FLOW.urgency.enabled) return;
  const bar = document.getElementById('urgency-bar');
  if (!bar) return;
  const storageKey = 'ap_urgency_start';
  let startTime = sessionStorage.getItem(storageKey);
  if (!startTime) { startTime = Date.now().toString(); sessionStorage.setItem(storageKey, startTime); }
  const endTime = parseInt(startTime) + (FLOW.urgency.countdownHours * 3600000);

  function tick() {
    const rem = endTime - Date.now();
    if (rem <= 0) { bar.classList.add('urgency-bar--expired'); bar.innerHTML = FLOW.urgency.expiredMessage; return; }
    const h = Math.floor(rem / 3600000), m = Math.floor((rem % 3600000) / 60000), s = Math.floor((rem % 60000) / 1000);
    const pad = n => n.toString().padStart(2, '0');
    bar.innerHTML = `<div>${FLOW.urgency.message}</div><div class="urgency-bar__countdown">${pad(h)}:${pad(m)}:${pad(s)}</div>`;
    requestAnimationFrame(() => setTimeout(tick, 1000));
  }
  tick();
}

function initFAQ() {
  document.querySelectorAll('.faq__item').forEach(item => {
    const btn = item.querySelector('.faq__q');
    const ans = item.querySelector('.faq__a');
    btn.addEventListener('click', () => {
      const open = item.classList.contains('faq__item--open');
      document.querySelectorAll('.faq__item').forEach(o => {
        o.classList.remove('faq__item--open');
        o.querySelector('.faq__a').style.maxHeight = '0';
        o.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('faq__item--open');
        ans.style.maxHeight = ans.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initScrollReveal() {
  const els = document.querySelectorAll('.rv');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });

  // Stagger by parent group, then activate
  const groups = new Map();
  els.forEach(el => {
    const p = el.parentElement;
    if (!groups.has(p)) groups.set(p, []);
    groups.get(p).push(el);
  });
  groups.forEach(children => {
    children.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.06}s`;
    });
  });

  // Small delay to let page render first, then enable animations
  requestAnimationFrame(() => {
    els.forEach(el => {
      el.classList.add('rv--ready');
      obs.observe(el);
    });
  });
}

function initCTATracking() {
  document.querySelectorAll('[data-track-cta]').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('cta_click', { location: btn.getAttribute('data-track-cta'), url: btn.href || '' });
    });
  });
}

function initScrollTracking() {
  const thresholds = [25, 50, 75, 100], triggered = new Set();
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const pct = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        thresholds.forEach(t => { if (pct >= t && !triggered.has(t)) { triggered.add(t); trackEvent('scroll_depth', { percent: t }); } });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function initParallax() {
  const hero = document.querySelector('.hero');
  const portrait = document.querySelector('.hero__portrait-frame');
  const glow1 = document.querySelector('.hero__glow-1');
  const glow2 = document.querySelector('.hero__glow-2');
  if (!hero) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const heroH = hero.offsetHeight;
        if (y < heroH * 1.5) {
          const ratio = y / heroH;
          if (portrait) portrait.style.transform = `translateY(${y * 0.08}px)`;
          if (glow1) glow1.style.transform = `translate(${Math.sin(ratio * 2) * 15}px, ${-y * 0.12}px) scale(${1 + ratio * 0.05})`;
          if (glow2) glow2.style.transform = `translate(${-Math.sin(ratio * 2) * 10}px, ${-y * 0.06}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initUrgency();
  initFAQ();
  initScrollReveal();
  initCTATracking();
  initScrollTracking();
  initParallax();
  trackEvent('page_view', { url: window.location.href, referrer: document.referrer });

  // Abandon tracking
  const start = Date.now();
  window.addEventListener('beforeunload', () => {
    trackEvent('funnel_abandon', { time_on_page: Math.round((Date.now() - start) / 1000) });
  });
});
