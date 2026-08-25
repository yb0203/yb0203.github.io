/* ==========================================================================
   YASHVI BANSAL — MAIN APPLICATION LOGIC (app.js)
   Controls Themes, Role Lenses, Modals, Filtering, Copy-To-Clipboard & Toasts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRoleLens();
  renderProjects('all');
  initProjectsFilter();
  initModals();
  initMobileMenu();
  initContactActions();
  initScrollSpy();
});

/* --- Theme Switcher (Dark / Light) --- */
function initTheme() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(newTheme === 'dark' ? '🌙 Dark Mode activated' : '☀️ Light Mode activated');
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* --- Role Lens Switcher --- */
function initRoleLens() {
  const lensButtons = document.querySelectorAll('.lens-btn');
  const highlightBar = document.getElementById('lens-highlight-bar');

  const lensMessages = {
    'founders-office': '🚀 <strong>Founder\'s Office Lens Active:</strong> Emphasizing 0-to-1 ownership, business-to-engineering translation, cross-functional velocity, and high-agency operational execution.',
    'ai-pm': '🧠 <strong>AI & Technical PM Lens Active:</strong> Emphasizing RAG architectures, schema-locked multi-agents, DeepEval banking metrics, DevEx platforms, and AI trust & safety guardrails.',
    'generalist': '⚡ <strong>Full Spectrum Lens Active:</strong> Showing complete balance of product strategy, AI engineering, and enterprise platform delivery.'
  };

  lensButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      lensButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lens = btn.getAttribute('data-lens');

      if (highlightBar && lensMessages[lens]) {
        highlightBar.innerHTML = lensMessages[lens];
        highlightBar.classList.add('visible');
      }

      // Re-filter or highlight projects
      if (lens === 'founders-office') {
        highlightCardsForFoundersOffice();
      } else if (lens === 'ai-pm') {
        highlightCardsForAIPM();
      } else {
        resetCardHighlights();
      }
    });
  });
}

function highlightCardsForFoundersOffice() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.borderColor = '';
  });
  const topPick = document.querySelector('[data-project-id="legal-owl"]') || document.querySelector('[data-project-id="kotak-platforms"]');
  if (topPick) {
    topPick.style.borderColor = 'var(--accent-emerald)';
  }
}

function highlightCardsForAIPM() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.borderColor = '';
  });
  const topPick = document.querySelector('[data-project-id="legal-owl"]') || document.querySelector('[data-project-id="gitabae"]');
  if (topPick) {
    topPick.style.borderColor = 'var(--accent-primary)';
  }
}

function resetCardHighlights() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.borderColor = '';
  });
}

/* --- Project Grid Rendering --- */
function renderProjects(filterCategory = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container || typeof PROJECTS_DATA === 'undefined') return;

  container.innerHTML = '';

  const filtered = filterCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filterCategory);

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);

    const metricsHtml = project.keyMetrics.map(m => `
      <div class="project-highlight-item">
        <span class="highlight-icon">✓</span>
        <span><strong>${escapeHtml(m.label)}:</strong> ${escapeHtml(m.value)}</span>
      </div>
    `).join('');

    const tagsHtml = project.tags.slice(0, 5).map(t => `
      <span class="tech-tag">${escapeHtml(t)}</span>
    `).join('');

    card.innerHTML = `
      <div class="project-banner">
        <div class="project-banner-top">
          <span class="project-category-badge">${escapeHtml(project.categoryLabel)}</span>
          <span class="card-meta-label">${escapeHtml(project.timeframe)}</span>
        </div>
        <div class="project-banner-icon">${project.icon}</div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-tagline">${escapeHtml(project.tagline)}</p>
        <p class="project-summary">${escapeHtml(project.summary)}</p>
        
        <div class="project-highlights">
          ${metricsHtml}
        </div>

        <div class="project-tech-stack">
          ${tagsHtml}
        </div>

        <div class="project-footer">
          <button class="btn btn-secondary btn-sm open-project-modal-btn" data-id="${project.id}">
            <span>Deep Dive & Architecture</span>
            <span>→</span>
          </button>
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View Source on GitHub">
              <span>GitHub</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          ` : ''}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach modal triggers
  document.querySelectorAll('.open-project-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-id');
      openProjectModal(projId);
    });
  });
}

function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

/* --- Modal Logic --- */
function initModals() {
  // Project Deep Dive Modal
  const projectModalBackdrop = document.getElementById('project-modal-backdrop');
  const projectModalClose = document.getElementById('project-modal-close');

  if (projectModalClose && projectModalBackdrop) {
    projectModalClose.addEventListener('click', () => {
      projectModalBackdrop.classList.remove('active');
    });
    projectModalBackdrop.addEventListener('click', (e) => {
      if (e.target === projectModalBackdrop) {
        projectModalBackdrop.classList.remove('active');
      }
    });
  }

  // Resume Modal
  const resumeModalBackdrop = document.getElementById('resume-modal-backdrop');
  const resumeModalClose = document.getElementById('resume-modal-close');
  const openResumeBtns = document.querySelectorAll('.open-resume-modal-btn');

  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (resumeModalBackdrop) {
        resumeModalBackdrop.classList.add('active');
      }
    });
  });

  if (resumeModalClose && resumeModalBackdrop) {
    resumeModalClose.addEventListener('click', () => {
      resumeModalBackdrop.classList.remove('active');
    });
    resumeModalBackdrop.addEventListener('click', (e) => {
      if (e.target === resumeModalBackdrop) {
        resumeModalBackdrop.classList.remove('active');
      }
    });
  }

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModalBackdrop) projectModalBackdrop.classList.remove('active');
      if (resumeModalBackdrop) resumeModalBackdrop.classList.remove('active');
    }
  });
}

function openProjectModal(projectId) {
  if (typeof PROJECTS_DATA === 'undefined') return;
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modalTitle = document.getElementById('modal-project-title');
  const modalContent = document.getElementById('modal-project-content');
  const modalBackdrop = document.getElementById('project-modal-backdrop');

  if (!modalTitle || !modalContent || !modalBackdrop) return;

  modalTitle.textContent = `${project.icon} ${project.title} — Deep Dive`;

  const decisionsHtml = project.productDecisions.map(d => `
    <li class="timeline-bullet">${escapeHtml(d)}</li>
  `).join('');

  const metricsHtml = project.keyMetrics.map(m => `
    <div class="stat-item" style="background: var(--bg-primary);">
      <div class="stat-content">
        <h4>${escapeHtml(m.label)}</h4>
        <p style="color: var(--accent-emerald); font-weight: 600;">${escapeHtml(m.value)}</p>
      </div>
    </div>
  `).join('');

  modalContent.innerHTML = `
    <p style="font-size: 1.1rem; color: var(--accent-primary); font-weight: 600; margin-bottom: 1rem;">
      ${escapeHtml(project.tagline)}
    </p>

    <h4 class="modal-section-title">Problem & Friction Point</h4>
    <p>${escapeHtml(project.problemStatement)}</p>

    <h4 class="modal-section-title">Architectural Solution</h4>
    <p>${escapeHtml(project.solution)}</p>

    <div class="modal-architecture-box">${project.architecture}</div>

    <h4 class="modal-section-title">Key Product & Strategic Decisions</h4>
    <ul class="timeline-bullets" style="margin-top: 0.5rem;">
      ${decisionsHtml}
    </ul>

    <h4 class="modal-section-title">Impact & Proof Points</h4>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 0.5rem;">
      ${metricsHtml}
    </div>

    ${project.githubUrl ? `
      <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: flex-end;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <span>View Source Repository</span>
          <span>↗</span>
        </a>
      </div>
    ` : ''}
  `;

  modalBackdrop.classList.add('active');
}

/* --- Mobile Menu Drawer --- */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }
}

/* --- Copy Actions & Toast System --- */
function initContactActions() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard('bansaly0203@gmail.com', '📧 Email copied to clipboard: bansaly0203@gmail.com');
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('+91 62831 62131', '📱 Phone number copied to clipboard: +91 62831 62131');
    });
  }
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (e) {
    showToast('Failed to copy. Please copy manually.');
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Auto dismiss
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  }, 3500);
}

/* --- ScrollSpy for Active Navbar Link --- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
