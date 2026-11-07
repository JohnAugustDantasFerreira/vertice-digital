/**
 * VÉRTICE DIGITAL — Interactive Script
 * Handles navigation, mobile menu, portfolio category filters, and contact form validation
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initPortfolioFilters();
  initContactForm();
  markActiveNavLink();
});

/**
 * Mobile Navigation Toggle with accessibility support
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');

  if (!toggleBtn || !drawer) return;

  function toggleMenu(forceState) {
    const isCurrentlyOpen = drawer.classList.contains('is-open');
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;

    if (shouldOpen) {
      drawer.classList.add('is-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.textContent = 'Fechar menu';
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.textContent = 'Abrir menu';
      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });

  // Close when clicking any nav link inside the drawer
  const mobileLinks = drawer.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });
}

/**
 * Mark current page active in navigation
 */
function markActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * Portfolio category filtering functionality (for portfolio.html)
 */
function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-filter-item');
  const emptyState = document.getElementById('portfolio-empty-state');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active filter button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      let visibleCount = 0;

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        const categoryList = categories.split(' ').map(c => c.trim());

        if (filterValue === 'all' || categoryList.includes(filterValue)) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
}

/**
 * Contact Form validation and simulated submission handling (for contato.html)
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successAlert = document.getElementById('form-success-alert');
  const demoAlert = document.getElementById('form-demo-alert');
  const serviceSelect = document.getElementById('servico');

  // Pre-select service from URL parameter if available (e.g. ?servico=redes)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedService = urlParams.get('servico');
  if (requestedService && serviceSelect) {
    const validOptions = Array.from(serviceSelect.options).map(opt => opt.value);
    if (validOptions.includes(requestedService)) {
      serviceSelect.value = requestedService;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Fields to validate
    const nameInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const serviceSelect = document.getElementById('servico');
    const messageInput = document.getElementById('mensagem');

    // Clear previous errors
    form.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('has-error');
    });

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Este campo é obrigatório. Preencha a informação para continuar.');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Este campo é obrigatório. Preencha a informação para continuar.');
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Confira o endereço de e-mail informado.');
      isValid = false;
    }

    // Validate Service
    if (!serviceSelect.value) {
      showError(serviceSelect, 'Este campo é obrigatório. Preencha a informação para continuar.');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, 'Este campo é obrigatório. Preencha a informação para continuar.');
      isValid = false;
    }

    if (isValid) {
      // In accordance with briefing.md and conteudo.md:
      // "Não simular envio real se não houver integração implementada."
      // "Este formulário é demonstrativo e ainda não realiza o envio de mensagens."
      if (demoAlert) {
        demoAlert.style.display = 'block';
        demoAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (successAlert) {
        successAlert.style.display = 'none';
      }
    }
  });

  function showError(inputElement, message) {
    const group = inputElement.closest('.form-group');
    if (!group) return;

    group.classList.add('has-error');
    const errorMsgEl = group.querySelector('.form-error-msg');
    if (errorMsgEl) {
      errorMsgEl.textContent = message;
    }
  }

  // Remove error state on input
  form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => {
      const group = el.closest('.form-group');
      if (group && group.classList.contains('has-error')) {
        group.classList.remove('has-error');
      }
    });
  });
}
