/* BiotrackOS — shared chrome (nav + footer) with mega-menus. */
(function () {
  const body = document.body;
  const page = body.dataset.page || '';
  const prefix = body.dataset.prefix || '';
  const P = (p) => prefix + p;

  // ---------- Nav menu structure ----------
  // type: "link" — plain top-level link
  // type: "mega" — mega-menu dropdown with columns + optional promo card
  const NAV = [
    { id: 'home', type: 'link', label: 'Home', href: P('index.html') },
    {
      id: 'product', type: 'mega', label: 'Product',
      columns: [
        {
          eyebrow: 'Product',
          items: [
            { label: 'Product overview', desc: 'The platform, in one page.',            href: P('product.html') },
            { label: 'Clinic dashboard', desc: 'For clinicians managing cohorts.',       href: P('features/clinic-dashboard.html') },
            { label: 'Consumer app',     desc: 'BiotrackOS for iPhone &amp; Android.',   href: P('app.html') },
            { label: 'Protocols',        desc: 'Biomarker-driven recommendations.',      href: P('features/protocols.html') },
            { label: 'Integrations',     desc: '6 categories. 46 partners.',             href: P('integrations.html') },
            { label: 'Marketplace',      desc: 'Partners, add-ons &amp; programmes.',    href: P('marketplace.html') },
            { label: 'Platforms · SDK',  desc: 'Wearable SDK as a service.',             href: P('platforms.html') },
          ]
        },
        {
          eyebrow: 'Markets',
          items: [
            { label: 'Clinics &amp; longevity labs', desc: 'Cohort dashboards &amp; protocols.', href: P('markets.html') + '#longevity' },
            { label: 'Sports teams &amp; gyms',      desc: 'Coach + athlete, one record.',       href: P('markets.html') + '#performance' },
            { label: 'Insurance',                    desc: 'Consented streams, never surveys.',  href: P('markets.html') + '#insurer' },
            { label: 'Corporate wellness',           desc: 'Aggregate-only, individually private.', href: P('markets.html') + '#wellness' },
            { label: 'Research &amp; pharma',        desc: 'Real-world signal, audit-ready.',    href: P('markets.html') + '#research' },
            { label: 'Public health &amp; events',   desc: 'City programs, mass-event cohorts.', href: P('markets.html') + '#public' },
            { label: 'Consumer · direct',            desc: 'The free app most people stay on.',  href: P('markets.html') + '#consumer' },
          ]
        }
      ],
      promo: {
        kind: 'demo',
        eyebrow: 'New',
        title: 'A 20-minute walkthrough.',
        body: 'See a real clinic cohort, your data sources, and live alerts.',
        cta: 'Book a demo', href: P('contact.html')
      }
    },
    { id: 'customers', type: 'link', label: 'Customers', href: P('customers.html') },
    { id: 'pricing',   type: 'link', label: 'Pricing',   href: P('pricing.html') },
    {
      id: 'resources', type: 'mega', label: 'Resources',
      columns: [
        {
          eyebrow: 'Learn',
          items: [
            { label: 'Field notes',       desc: 'Research, opinion, changelog.',    href: P('blog.html') },
            { label: 'Featured article',  desc: 'The case against the quarterly.',  href: P('blog/the-case-against-the-quarterly.html') },
            { label: 'Customer stories',  desc: 'How teams ship with BiotrackOS.',  href: P('customers.html') },
          ]
        },
        {
          eyebrow: 'Trust',
          items: [
            { label: 'Trust &amp; security', desc: 'HIPAA · SOC 2 · ISO 27001.',     href: P('trust-security.html') },
            { label: 'Clinical evidence',    desc: 'Published &amp; ongoing studies.',href: P('clinical-evidence.html') },
            { label: 'Developer docs',       desc: 'API, FHIR, webhooks.',            href: P('docs.html') },
            { label: 'Status',               desc: 'All systems operational.',        href: P('status.html') },
          ]
        }
      ],
      promo: {
        kind: 'article',
        eyebrow: 'Latest',
        title: 'The case against the quarterly checkup.',
        body: 'Why three-month cadence is a calendar artifact — and what changes when data is continuous.',
        cta: 'Read article', href: P('blog/the-case-against-the-quarterly.html')
      }
    },
    {
      id: 'company', type: 'mega', label: 'Company',
      columns: [
        {
          eyebrow: 'Company',
          items: [
            { label: 'About BiotrackOS', desc: 'Founders, principles, timeline.', href: P('about.html') },
            { label: 'Careers',          desc: '11 roles open across Europe.',    href: P('careers.html') },
            { label: 'Press',            desc: 'Brand kit &amp; media inquiries.', href: P('press.html') },
            { label: 'Contact',          desc: 'Sales, support, partnerships.',    href: P('contact.html') },
          ]
        },
        {
          eyebrow: 'Legal',
          items: [
            { label: 'Terms',          desc: 'Service terms &amp; SLA.',           href: P('terms.html') },
            { label: 'Privacy',        desc: 'GDPR, HIPAA, retention.',            href: P('privacy.html') },
            { label: 'Data processing', desc: 'DPA &amp; subprocessor list.',      href: P('data-processing.html') },
            { label: 'Security disclosure', desc: 'security@biotrackos.com',       href: P('security-disclosure.html') },
          ]
        }
      ]
    }
  ];

  // Active flag — top-level link gets 'active' if its id matches body.dataset.page;
  // mega-menu top-level gets 'active' if any nested item matches.
  const activeMap = {
    'home': 'home',
    'product': 'product', 'integrations': 'product',
    'customers': 'customers',
    'pricing': 'pricing',
    'blog': 'resources',
    'about': 'company', 'contact': 'company',
    'markets': 'product',
  };
  const activeTop = activeMap[page] || '';

  // ---------- Render top trigger ----------
  function renderItems(items) {
    return items.map(it => `
      <a class="mega-item" href="${it.href}">
        <span class="mega-item-label">${it.label}</span>
        <span class="mega-item-desc">${it.desc || ''}</span>
      </a>
    `).join('');
  }

  function renderPromo(promo) {
    if (!promo) return '';
    if (promo.kind === 'demo') {
      return `
        <div class="mega-promo mega-promo-dark">
          <div>
            <span class="eyebrow" style="color:#807C6F;"><span class="dot"></span> ${promo.eyebrow}</span>
            <h5>${promo.title}</h5>
            <p>${promo.body}</p>
          </div>
          <div class="mega-promo-cta">
            <a class="btn btn-accent btn-sm" href="${promo.href}">${promo.cta} <span class="arrow">→</span></a>
          </div>
        </div>
      `;
    }
    return `
      <a class="mega-promo mega-promo-art" href="${promo.href}">
        <div class="mega-promo-art-img">
          <span class="glyph">${promo.eyebrow === 'Latest' ? 'QTR.' : '✦'}</span>
        </div>
        <div>
          <span class="eyebrow"><span class="dot"></span> ${promo.eyebrow}</span>
          <h5>${promo.title}</h5>
          <p>${promo.body}</p>
          <span class="mega-promo-cta-link">${promo.cta} <span class="arrow">→</span></span>
        </div>
      </a>
    `;
  }

  function renderMega(group) {
    const cols = group.columns.map(col => `
      <div class="mega-col">
        <div class="mega-col-eyebrow">${col.eyebrow}</div>
        <div class="mega-col-items">${renderItems(col.items)}</div>
      </div>
    `).join('');
    const hasPromo = !!group.promo;
    return `
      <div class="mega-panel ${hasPromo ? 'has-promo' : ''}" data-mega="${group.id}">
        <div class="mega-inner">
          <div class="mega-cols">${cols}</div>
          ${renderPromo(group.promo)}
        </div>
      </div>
    `;
  }

  function renderTopLink(g) {
    const isActive = activeTop === g.id;
    if (g.type === 'link') {
      return `<a href="${g.href}" data-id="${g.id}" class="${isActive ? 'active' : ''}">${g.label}</a>`;
    }
    return `
      <button type="button" class="mega-trigger ${isActive ? 'active' : ''}" data-id="${g.id}" aria-haspopup="true" aria-expanded="false">
        ${g.label}
        <svg class="mega-caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    `;
  }

  // ---------- Build nav ----------
  const nav = document.createElement('header');
  nav.className = 'nav';
  const megaGroups = NAV.filter(n => n.type === 'mega');

  nav.innerHTML = `
    <div class="wrap-w nav-inner">
      <a class="brand" href="${P('index.html')}">
        <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3.2 L27.4 9.6 L27.4 22.4 L16 28.8 L4.6 22.4 L4.6 9.6 Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7.5 16 L11.5 16 L13.4 12.2 L15.8 20.4 L18.2 13.6 L20.2 16 L24.5 16" fill="none" stroke="#0FE3D7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        <span>BIOTRACK<span style="opacity:.45">OS</span></span>
      </a>
      <nav class="nav-links">
        ${NAV.map(renderTopLink).join('')}
      </nav>
      <div class="nav-cta">
        <a class="btn btn-ghost btn-sm" href="${P('contact.html')}">Sign in</a>
        <a class="btn btn-primary btn-sm" href="${P('contact.html')}">Get started <span class="arrow">→</span></a>
        <button class="nav-burger" aria-label="Menu" onclick="document.body.classList.toggle('menu-open')">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
      </div>
    </div>
    <div class="mega-container">
      ${megaGroups.map(renderMega).join('')}
    </div>
  `;
  body.prepend(nav);

  // ---------- Mega-menu behavior ----------
  const navEl = nav;
  let openId = null;
  let closeTimer = null;

  function openMega(id) {
    clearTimeout(closeTimer);
    if (openId === id) return;
    openId = id;
    navEl.classList.add('mega-open');
    navEl.querySelectorAll('.mega-trigger').forEach(t => {
      t.setAttribute('aria-expanded', t.dataset.id === id ? 'true' : 'false');
      t.classList.toggle('is-open', t.dataset.id === id);
    });
    navEl.querySelectorAll('.mega-panel').forEach(p => {
      p.classList.toggle('is-visible', p.dataset.mega === id);
    });
  }
  function closeMega() {
    closeTimer = setTimeout(() => {
      openId = null;
      navEl.classList.remove('mega-open');
      navEl.querySelectorAll('.mega-trigger').forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        t.classList.remove('is-open');
      });
      navEl.querySelectorAll('.mega-panel').forEach(p => p.classList.remove('is-visible'));
    }, 120);
  }

  navEl.querySelectorAll('.mega-trigger').forEach(trigger => {
    trigger.addEventListener('mouseenter', () => openMega(trigger.dataset.id));
    trigger.addEventListener('focus',      () => openMega(trigger.dataset.id));
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (openId === trigger.dataset.id) closeMega(); else openMega(trigger.dataset.id);
    });
  });
  navEl.querySelectorAll('.mega-panel').forEach(panel => {
    panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    panel.addEventListener('mouseleave', closeMega);
  });
  navEl.querySelector('.nav-links').addEventListener('mouseleave', closeMega);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMega(); });

  // ---------- Footer ----------
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="wrap-w">
      <div class="footer-cta" style="display:grid;grid-template-columns:1.4fr 1fr;gap:64px;align-items:end;">
        <h2 class="h-display">The operating system<br/><em>for connected health.</em></h2>
        <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start;">
          <p style="color:#C9C5B6;max-width:36ch;margin:0;">Connect every source. Power every team. Translate it back to the people it serves.</p>
          <div style="display:flex;gap:12px;">
            <a class="btn btn-accent" href="${P('contact.html')}">Book a demo <span class="arrow">→</span></a>
            <a class="btn btn-ghost" style="border-color:#2A2F4A;color:#C9C5B6;" href="${P('pricing.html')}">See pricing</a>
          </div>
        </div>
      </div>
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="${P('index.html')}">
            <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3.2 L27.4 9.6 L27.4 22.4 L16 28.8 L4.6 22.4 L4.6 9.6 Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M7.5 16 L11.5 16 L13.4 12.2 L15.8 20.4 L18.2 13.6 L20.2 16 L24.5 16" fill="none" stroke="#0FE3D7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            <span>BIOTRACK<span style="opacity:.45">OS</span></span>
          </a>
          <p>The operating system for connected health — one record across wearables, labs, genomics, epigenetics, and medications.</p>
        </div>
        <div>
          <h5>Product</h5>
          <ul>
            <li><a href="${P('product.html')}">Overview</a></li>
            <li><a href="${P('features/clinic-dashboard.html')}">Clinic dashboard</a></li>
            <li><a href="${P('app.html')}">Consumer app</a></li>
            <li><a href="${P('features/protocols.html')}">Protocols</a></li>
            <li><a href="${P('integrations.html')}">Integrations</a></li>
            <li><a href="${P('marketplace.html')}">Marketplace</a></li>
            <li><a href="${P('platforms.html')}">Platforms · SDK</a></li>
          </ul>
        </div>
        <div>
          <h5>Markets</h5>
          <ul>
            <li><a href="${P('markets.html')}#longevity">Clinics &amp; longevity labs</a></li>
            <li><a href="${P('markets.html')}#performance">Sports teams &amp; gyms</a></li>
            <li><a href="${P('markets.html')}#insurer">Insurance</a></li>
            <li><a href="${P('markets.html')}#wellness">Corporate wellness</a></li>
            <li><a href="${P('markets.html')}#research">Research &amp; pharma</a></li>
            <li><a href="${P('markets.html')}#public">Public health &amp; events</a></li>
            <li><a href="${P('markets.html')}#consumer">Consumer · direct</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="${P('about.html')}">About</a></li>
            <li><a href="${P('customers.html')}">Customers</a></li>
            <li><a href="${P('blog.html')}">Field notes</a></li>
            <li><a href="${P('contact.html')}">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <li><a href="${P('docs.html')}">Developer docs</a></li>
            <li><a href="${P('trust-security.html')}">Trust &amp; security</a></li>
            <li><a href="${P('clinical-evidence.html')}">Clinical evidence</a></li>
            <li><a href="${P('status.html')}">Status</a></li>
            <li><a href="${P('careers.html')}">Careers</a></li>
            <li><a href="${P('press.html')}">Press</a></li>
            <li><a href="${P('terms.html')}">Terms</a></li>
            <li><a href="${P('privacy.html')}">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 BiotrackOS, Inc. — HIPAA · SOC 2 Type II · ISO 27001</span>
        <span>System status — Operational</span>
      </div>
    </div>
  `;
  body.appendChild(footer);
})();
