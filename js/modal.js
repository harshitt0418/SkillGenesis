/**
 * Modal Popup & Form Module
 * Handles lead capture form modal, accessible focus management, and validation.
 */

export function initModal() {
  const modalOverlay = document.getElementById('enquiry-modal');
  const modalDialog = modalOverlay?.querySelector('.modal-dialog');
  const closeBtn = document.getElementById('modal-close-trigger');
  const openButtons = document.querySelectorAll('[data-open-modal]');
  const form = document.getElementById('enquiry-form');
  const formContainer = document.getElementById('modal-form-container');
  const successState = document.getElementById('modal-success-state');
  const successCloseBtn = document.getElementById('success-done-btn');

  let previousActiveElement = null;

  // Open modal handler
  const openModal = () => {
    previousActiveElement = document.activeElement;
    modalOverlay?.classList.add('active');
    modalOverlay?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first interactive input
    setTimeout(() => {
      const firstInput = modalOverlay?.querySelector('input:not([type="hidden"]), select, textarea, button');
      firstInput?.focus();
    }, 100);
  };

  // Close modal handler
  const closeModal = () => {
    modalOverlay?.classList.remove('active');
    modalOverlay?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Reset success state back to form for future opens
    setTimeout(() => {
      if (formContainer && successState) {
        formContainer.style.display = 'block';
        successState.classList.remove('active');
        form?.reset();
        clearErrors();
      }
    }, 300);

    // Restore focus
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  };

  // Attach open triggers
  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Attach close triggers
  closeBtn?.addEventListener('click', closeModal);
  successCloseBtn?.addEventListener('click', closeModal);

  // Close on backdrop click (outside dialog)
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Keyboard navigation & Accessibility Focus Trap
  window.addEventListener('keydown', (e) => {
    if (!modalOverlay?.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    if (e.key === 'Tab') {
      const focusableElements = modalOverlay.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });

  // Clear validation errors
  const clearErrors = () => {
    modalOverlay?.querySelectorAll('.form-group').forEach((group) => {
      group.classList.remove('has-error');
    });
  };

  // Form Validation & Submission
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Required fields:
    const fullName = form.querySelector('#full-name');
    const email = form.querySelector('#email-address');
    const phone = form.querySelector('#phone-number');
    const college = form.querySelector('#college-name');
    const year = form.querySelector('#year-of-study');
    const interest = form.querySelector('#study-interest');

    const markError = (input) => {
      const parent = input.closest('.form-group');
      if (parent) {
        parent.classList.add('has-error');
      }
      isValid = false;
    };

    if (!fullName.value.trim()) markError(fullName);
    
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      markError(email);
    }

    if (!phone.value.trim() || phone.value.trim().length < 7) {
      markError(phone);
    }

    if (!college.value.trim()) markError(college);
    if (!year.value) markError(year);
    if (!interest.value) markError(interest);

    if (!isValid) {
      // Focus first error field
      const firstError = modalOverlay?.querySelector('.form-group.has-error input, .form-group.has-error select');
      firstError?.focus();
      return;
    }

    // Capture validated payload
    const formData = {
      fullName: fullName.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      college: college.value.trim(),
      yearOfStudy: year.value,
      areaOfInterest: interest.value,
      message: form.querySelector('#user-message')?.value.trim() || '',
      submittedAt: new Date().toISOString()
    };

    /* 
     * =========================================================================
     * BACKEND / API INTEGRATION HOOK:
     * When ready for backend integration, replace this client-side block with:
     * 
     * await fetch('/api/enquiry', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(formData)
     * });
     * =========================================================================
     */
    console.info('[SkillGenesis] Enquiry form captured client-side:', formData);

    // Show refined success state
    if (formContainer && successState) {
      formContainer.style.display = 'none';
      successState.classList.add('active');
      successCloseBtn?.focus();
    }
  });
}
