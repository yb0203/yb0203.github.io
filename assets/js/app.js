/* ==========================================================================
   YASHVI BANSAL — HIGH-CONVERTING 4-SECTION APP LOGIC (app.js)
   Renders Archive Table, Flagship Modals, Role Lens, Resume & Floating Bar
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRoleLens();
  renderArchiveTable();
  initModals();
  initMobileMenu();
  initContactActions();
  initScrollSpy();
});

/* --- Theme Switcher (Warm Silk Default / Matte Obsidian Dark) --- */
function initTheme() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('portfolio-theme') || 'light';
  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(newTheme === 'dark' ? '● Dark Theme enabled' : '● Warm Silk Theme enabled');
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* --- Integrated Hero Role Lens Switcher --- */
function initRoleLens() {
  const lensButtons = document.querySelectorAll('.lens-btn');
  const highlightBar = document.getElementById('lens-highlight-bar');

  const lensMessages = {
    'founders-office': '<strong>[ FOCUS: FOUNDER\'S OFFICE ]</strong> Emphasizing 0-to-1 velocity, business-to-engineering translation, cross-functional alignment, and high-agency operational execution.',
    'ai-pm': '<strong>[ FOCUS: AI & TECH PM ]</strong> Emphasizing RAG architectures, schema-locked multi-agents, DeepEval banking metrics, DevEx platforms, and AI trust & safety guardrails.',
    'generalist': '<strong>[ FOCUS: FULL SPECTRUM ]</strong> Complete portfolio overview across product strategy, AI systems, and enterprise banking infrastructure.'
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
    });
  });
}

/* --- Compact Archive Table Rendering --- */
function renderArchiveTable() {
  const container = document.getElementById('directory-table-body');
  if (!container || typeof PROJECTS_DATA === 'undefined') return;

  container.innerHTML = '';

  // Filter for secondary builds (GitaBae, Vibe Check, Madison)
  const archiveProjects = PROJECTS_DATA.filter(p => p.id !== 'legal-owl' && p.id !== 'kotak-platforms');

  archiveProjects.forEach((project, index) => {
    const row = document.createElement('div');
    row.className = 'editorial-row';
    row.setAttribute('data-project-id', project.id);

    const indexFormatted = `[ ${String(index + 3).padStart(2, '0')} ]`;
    const primaryMetric = project.keyMetrics && project.keyMetrics.length > 0
      ? project.keyMetrics[0].value
      : '0-to-1 Build';

    row.innerHTML = `
      <div class="row-index">${indexFormatted}</div>
      <div class="row-title-block">
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.tagline)}</p>
      </div>
      <div>
        <span class="row-metrics-chip">${escapeHtml(primaryMetric)}</span>
      </div>
      <div class="row-tags">
        <span class="tag-badge tag-cobalt">${escapeHtml(project.categoryLabel)}</span>
      </div>
      <div class="row-actions">
        <button class="btn btn-secondary btn-sm open-project-modal-btn" data-id="${project.id}">
          <span>VIEW SPEC</span>
          <span class="btn-arrow-box">→</span>
        </button>
      </div>
    `;

    row.addEventListener('click', (e) => {
      if (!e.target.closest('a')) {
        openProjectModal(project.id);
      }
    });

    container.appendChild(row);
  });
}

/* --- Modal Logic --- */
function initModals() {
  const projectModalBackdrop = document.getElementById('project-modal-backdrop');
  const projectModalClose = document.getElementById('project-modal-close');

  document.querySelectorAll('[data-project-target]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = elem.getAttribute('data-project-target');
      openProjectModal(projId);
    });
  });

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

  modalTitle.textContent = `[ SPEC // ${project.title.toUpperCase()} ]`;

  const decisionsHtml = project.productDecisions.map(d => `
    <li class="exp-bullet">${escapeHtml(d)}</li>
  `).join('');

  const metricsHtml = project.keyMetrics.map(m => `
    <div class="spec-row">
      <span class="spec-label">${escapeHtml(m.label)}</span>
      <span class="spec-value">${escapeHtml(m.value)}</span>
    </div>
  `).join('');

  modalContent.innerHTML = `
    <div style="font-family: var(--font-mono); font-size: 0.825rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem;">
      CATEGORY: ${escapeHtml(project.categoryLabel)} &bull; TIMEFRAME: ${escapeHtml(project.timeframe)}
    </div>
    <p style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.25rem;">
      ${escapeHtml(project.tagline)}
    </p>

    <h4 class="modal-section-title">01. Problem &amp; Friction Point</h4>
    <p style="color: var(--text-secondary); line-height: 1.65;">${escapeHtml(project.problemStatement)}</p>

    <h4 class="modal-section-title">02. Technical &amp; Product Architecture</h4>
    <p style="color: var(--text-secondary); line-height: 1.65;">${escapeHtml(project.solution)}</p>

    <div class="modal-architecture-box">${project.architecture}</div>

    <h4 class="modal-section-title">03. Key Strategic &amp; Architectural Decisions</h4>
    <ul class="exp-bullets" style="margin-top: 0.5rem;">
      ${decisionsHtml}
    </ul>

    <h4 class="modal-section-title">04. Quantified Metrics &amp; Benchmarks</h4>
    <div class="hero-spec-sheet" style="margin-top: 0.5rem;">
      ${metricsHtml}
    </div>

    ${project.githubUrl ? `
      <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-line); display: flex; justify-content: flex-end;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <span>VIEW SOURCE ON GITHUB</span>
          <span class="btn-arrow-box">↗</span>
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
      copyToClipboard('bansaly0203@gmail.com', 'COPIED EMAIL: bansaly0203@gmail.com');
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('+91 62831 62131', 'COPIED PHONE: +91 62831 62131');
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
    showToast('FAILED TO COPY');
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

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 200);
  }, 3000);
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
