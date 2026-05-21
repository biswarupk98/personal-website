/**
 * render.js — builds all sections from data/content.js
 */

import {
  profile, interests, publications,
  education, achievements, skills, references,
} from '../data/content.js';

// ── helpers ────────────────────────────────────────────
const el = (tag, attrs = {}, ...children) => {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html')  node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  children.flat().forEach(c => {
    if (c == null) return;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return node;
};

const reveal = (node, delay = 0) => {
  node.setAttribute('data-reveal', '');
  if (delay) node.setAttribute('data-delay', String(delay));
  return node;
};

// ── nav ────────────────────────────────────────────────
export function renderNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  nav.appendChild(el('span', { class: 'nav-name' }, 'B. Karmakar'));

  const toggle = el('button', {
    class: 'nav-toggle', 'aria-label': 'Toggle menu', 'aria-expanded': 'false',
  },
    el('span'), el('span'), el('span'),
  );
  nav.appendChild(toggle);

  const ul = el('ul', { class: 'nav-links' }, ...[
    ['#research',     'Research'],
    ['#publications', 'Publications'],
    ['#education',    'Education'],
    ['#contact',      'References'],
  ].map(([href, label]) => el('li', {}, el('a', { href }, label))));

  nav.appendChild(ul);
}

// ── hero ───────────────────────────────────────────────
export function renderHero() {
  const sec = document.getElementById('hero');
  if (!sec) return;

  const left = reveal(el('div', {},
    el('h1', { class: 'hero-title', html: `${profile.name.first}<br><em>${profile.name.last}</em>` }),
    el('p', { class: 'hero-sub' }, `Doctoral researcher at the ${profile.institution},
      working on tensor generalized inverses, low-rank representations,
      and their applications to data science and machine learning.`),
  ));

  const right = reveal(el('div', { class: 'hero-meta' },
    el('div', {}, profile.institution),
    el('div', {}, profile.department),
    Object.assign(el('div', { style: 'margin-top:0.6rem' }),
      { innerHTML: `<a href="mailto:${profile.email}">${profile.email}</a>` }),
    Object.assign(el('div', { style: 'margin-top:0.3rem' }),
      { innerHTML: `<a href="${profile.github}" target="_blank" rel="noopener">${profile.githubLabel}</a>` }),
  ), 2);

  sec.append(left, right);
}

// ── research ───────────────────────────────────────────
export function renderResearch() {
  const sec = document.getElementById('research');
  if (!sec) return;

  sec.appendChild(el('p', { class: 'section-label' }, 'Research interests'));

  const tags = reveal(el('div', { class: 'interests' },
    ...interests.map(t => el('span', { class: 'tag' }, t)),
  ));
  sec.appendChild(tags);

  sec.appendChild(el('p', {
    style: 'font-size:0.95rem;color:var(--ink-mid);line-height:1.85;max-width:620px',
    html: profile.bio,
  }));
}

// ── publications ───────────────────────────────────────
export function renderPublications() {
  const sec = document.getElementById('publications');
  if (!sec) return;

  sec.appendChild(el('p', { class: 'section-label' }, 'Publications & preprints'));

  const ol = el('ol', { class: 'pub-list', reversed: '' });

  [...publications].reverse().forEach((pub, i) => {
    const item = reveal(el('li', { class: 'pub-item' },
      el('span', { class: 'pub-num' }, String(pub.id)),
      el('div', {},
        el('p', { class: 'pub-title' }, pub.title),
        el('p', { class: 'pub-authors' }, pub.authors),
        Object.assign(el('p', { class: 'pub-venue' }), {
          innerHTML: `${pub.venue}&nbsp;<span class="pub-badge badge-${pub.status}">${pub.statusLabel}</span>`,
        }),
        Object.assign(el('a', { class: 'pub-doi', href: pub.url, target: '_blank', rel: 'noopener' }), {
          textContent: pub.urlLabel,
        }),
      ),
    ), i % 4);
    ol.appendChild(item);
  });

  sec.appendChild(ol);
}

// ── education ──────────────────────────────────────────
export function renderEducation() {
  const sec = document.getElementById('education');
  if (!sec) return;

  sec.appendChild(el('p', { class: 'section-label' }, 'Education'));

  education.forEach((edu, i) => {
    const left = el('div', {},
      el('p', { class: 'edu-degree' }, edu.degree),
      el('p', { class: 'edu-inst' }, edu.institution),
      ...(edu.thesis ? [
        el('p', { class: 'edu-thesis', html: `Thesis: <em>${edu.thesis}</em>` }),
        el('p', { class: 'edu-thesis', style: 'margin-top:0.2rem', html: `Supervisor: ${edu.supervisor}` }),
      ] : []),
      ...(edu.cgpa ? [el('p', { class: 'edu-cgpa' }, `CGPA ${edu.cgpa}`)] : []),
    );

    const item = reveal(el('div', { class: 'edu-item' }, left, el('div', { class: 'edu-year' }, edu.period)), i % 3);
    sec.appendChild(item);
  });
}

// ── achievements ───────────────────────────────────────
export function renderAchievements() {
  const sec = document.getElementById('achievements');
  if (!sec) return;

  sec.appendChild(el('p', { class: 'section-label' }, 'Distinctions & fellowships'));

  const ul = el('ul', { class: 'ach-list' });
  achievements.forEach((text, i) => {
    const item = reveal(el('li', { class: 'ach-item' },
      el('div', { class: 'ach-dot' }),
      Object.assign(el('span'), { innerHTML: text }),
    ), i % 3);
    ul.appendChild(item);
  });

  sec.appendChild(ul);
}

// ── skills ─────────────────────────────────────────────
export function renderSkills() {
  const sec = document.getElementById('skills');
  if (!sec) return;

  sec.appendChild(el('p', { class: 'section-label' }, 'Technical skills'));

  const grid = el('div', { class: 'skills-grid' });
  skills.forEach((group, i) => {
    const pills = el('div', { class: 'skill-pills' },
      ...group.items.map(item => el('span', { class: 'skill-pill' }, item)),
    );
    const g = reveal(el('div', { class: 'skill-group' },
      el('h4', {}, group.label),
      pills,
    ), i % 4);
    grid.appendChild(g);
  });

  sec.appendChild(grid);
}

// ── references ─────────────────────────────────────────
export function renderReferences() {
  const sec = document.getElementById('contact');
  if (!sec) return;

  sec.appendChild(el('p', { class: 'section-label' }, 'References'));

  const grid = el('div', { class: 'ref-grid' });
  references.forEach((ref, i) => {
    const card = reveal(el('div', { class: 'ref-card' },
      el('p', { class: 'ref-name' }, ref.name),
      el('p', { class: 'ref-title', html: `${ref.title}<br>${ref.dept}<br>${ref.institution}` }),
      el('p', { class: 'ref-email' }, ref.email),
    ), i % 4);
    grid.appendChild(card);
  });

  sec.appendChild(grid);
}