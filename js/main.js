/**
 * main.js — entry point, wires all modules together
 */

import { renderNav, renderHero, renderResearch, renderPublications,
         renderEducation, renderAchievements, renderSkills, renderReferences } from './render.js';
import { initNav } from './nav.js';
import { initReveal, initProgressBar, initCursorGlow, initCopyLinks } from './effects.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all sections from data
  renderNav();
  renderHero();
  renderResearch();
  renderPublications();
  renderEducation();
  renderAchievements();
  renderSkills();
  renderReferences();

  // 2. Initialise interactive behaviours
  initNav();
  initReveal();
  initProgressBar();
  initCursorGlow();
  initCopyLinks();
});