/**
 * SkillGenesis - Main Application Entrypoint
 */
import { initNavigation } from './navigation.js';
import { initModal } from './modal.js';
import { initFaqAccordion } from './faq.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize responsive navigation and sticky header
  initNavigation();

  // Initialize interactive modal and lead capture validation
  initModal();

  // Initialize FAQ accordion
  initFaqAccordion();

  console.log('SkillGenesis frontend initialized successfully.');
});
