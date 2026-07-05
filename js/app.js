/**
 * ChiaTech Summer Bootcamp — Main Application
 * Single-Page App: Registration → Code Verification → Dashboard
 * v1.0.0
 */
(function () {
  "use strict";

  /* ═══════════ STATE ═══════════ */
  const S = {
    view: "home",           // home | register | dashboard | admin | cbt
    dashTab: "lessons",     // lessons | downloads | practice | profile
    adminTab: "students",   // students | content | downloads | sendcode
    selectedClass: "",
    selectedSubject: "",
    selectedWeek: null,
    practiceSession: null,
    adminToken: OfflineDB.getAdminToken() || "",
    student: OfflineDB.getStudent(),
    code: OfflineDB.getCode(),
    weekContent: [],        // admin-provided content from sheet
    downloads: [],          // admin-provided downloads from sheet
    adminData: null
  };

  /* ═══════════ DOM REFS ═══════════ */
  const $ = id => document.getElementById(id);
  const el = {};

  /* ═══════════ INIT ═══════════ */
  document.addEventListener("DOMContentLoaded", () => {
    cacheEls();
    bindNav();
    bindGlobal();

    // Flush any queued offline API calls
    if (navigator.onLine && window.SheetAPI) SheetAPI.flushOutbox();

    // Determine initial view
    const hash = (location.hash || "").replace("#", "");
    if (hash === "admin") { showView("admin"); return; }
    if (hash === "register") { showView("register"); return; }

    if (OfflineDB.isLoggedIn()) {
      S.student = OfflineDB.getStudent();
      S.code    = OfflineDB.getCode();
      S.selectedClass   = S.student.classLevel || "";
      S.selectedSubject = (CURRICULUM.getSubjectsForClass(S.selectedClass)[0] || {}).id || "";
      showView("dashboard");
    } else {
      showView("home");
    }
  });

  /* ═══════════ CACHE ELEMENTS ═══════════ */
  function cacheEls() {
    el.views       = Array.from(document.querySelectorAll(".view"));
    el.navBtns     = Array.from(document.querySelectorAll(".nav-btn"));
    el.toast       = $("toast");
    el.modal       = $("globalModal");
    el.modalBody   = $("modalBody");
    el.installBtn  = $("installAppButton");
    el.logoutBtn   = $("logoutBtn");
    el.sessionPill = $("sessionPill");
  }

  /* ═══════════ NAVIGATION ═══════════ */
  function showView(viewId) {
    S.view = viewId;
    el.views.forEach(v => v.classList.toggle("is-active", v.id === viewId + "View"));
    el.navBtns.forEach(b => b.classList.toggle("is-active", b.dataset.view === viewId));
    location.hash = viewId === "home" ? "" : viewId;
    updateHeaderPill();
    renderView(viewId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function bindNav() {
    el.navBtns.forEach(b => b.addEventListener("click", () => showView(b.dataset.view)));
    document.querySelectorAll("[data-goto]").forEach(el => {
      el.addEventListener("click", () => showView(el.dataset.goto));
    });
  }

  function updateHeaderPill() {
    if (!el.sessionPill) return;
    if (OfflineDB.isLoggedIn()) {
      const st = OfflineDB.getStudent();
      el.sessionPill.textContent = (st.name || "Student").split(" ")[0] + " · " + (st.classLevel || "");
      el.sessionPill.className = "session-pill verified";
    } else {
      el.sessionPill.textContent = "Not logged in";
      el.sessionPill.className = "session-pill";
    }
  }

  /* ═══════════ GLOBAL EVENT BINDINGS ═══════════ */
  function bindGlobal() {
    // Logout
    if (el.logoutBtn) el.logoutBtn.addEventListener("click", onLogout);

    // Install PWA
    if (el.installBtn) el.installBtn.addEventListener("click", () => window.PWA && PWA.triggerInstall());
    window.addEventListener("bootcamp-install-ready",    () => el.installBtn && el.installBtn.classList.remove("hidden"));
    window.addEventListener("bootcamp-install-complete", () => el.installBtn && el.installBtn.classList.add("hidden"));

    // SW update banner
    window.addEventListener("bootcamp-sw-update", e => {
      showToast("📦 New version available — refresh to update.", "info", 8000);
    });

    // Online / offline status
    window.addEventListener("online",  () => { showToast("✅ Back online", "success"); SheetAPI.flushOutbox(); });
    window.addEventListener("offline", () => showToast("📡 You are offline — the app continues to work.", "info"));

    // Close modal on overlay click
    if (el.modal) el.modal.addEventListener("click", e => { if (e.target === el.modal) closeModal(); });

    // Close modal with Escape
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  }

  /* ═══════════ RENDER DISPATCHER ═══════════ */
  function renderView(viewId) {
    switch (viewId) {
      case "home":      renderHome();      break;
      case "register":  renderRegister();  break;
      case "dashboard": renderDashboard(); break;
      case "admin":     renderAdmin();     break;
    }
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    })[ch]);
  }

  function subjectCardInfo(subject) {
    const text = ((subject && subject.id) + " " + (subject && subject.title)).toLowerCase();
    const match = (pattern) => pattern.test(text);

    if (match(/english|literature/)) return { symbol: "Aa", tone: "language", meta: "Reading, writing, expression" };
    if (match(/french/)) return { symbol: "FR", tone: "language", meta: "Language and communication" };
    if (match(/mathematics|math/)) return { symbol: "&radic;", tone: "math", meta: "Numbers and problem solving" };
    if (match(/digital|computer|data/)) return { symbol: "&lt;/&gt;", tone: "digital", meta: "Technology and creation" };
    if (match(/biology/)) return { symbol: "DNA", tone: "science", meta: "Life and living systems" };
    if (match(/chemistry|basic science/)) return { symbol: "H<sub>2</sub>O", tone: "science", meta: "Discovery and experiments" };
    if (match(/physics/)) return { symbol: "E=mc", tone: "science", meta: "Forces, energy and matter" };
    if (match(/health|physical/)) return { symbol: "FIT", tone: "health", meta: "Wellness and active living" };
    if (match(/social|citizenship|civic|government/)) return { symbol: "CIV", tone: "civic", meta: "Society, rights and leadership" };
    if (match(/business|accounting|commerce|marketing|economics/)) return { symbol: "BIZ", tone: "business", meta: "Enterprise and money skills" };
    if (match(/creative|arts|drawing/)) return { symbol: match(/drawing/) ? "CAD" : "ART", tone: "creative", meta: "Design, culture and creativity" };
    if (match(/history|heritage/)) return { symbol: "HIS", tone: "history", meta: "People, places and heritage" };
    if (match(/religious|christian|islamic/)) return { symbol: "REL", tone: "faith", meta: "Faith, values and character" };
    if (match(/agriculture/)) return { symbol: "AG", tone: "agriculture", meta: "Food systems and enterprise" };
    if (match(/geography/)) return { symbol: "MAP", tone: "civic", meta: "Earth, people and places" };
    if (match(/solar|electrical|installation|maintenance/)) return { symbol: "PV", tone: "trade", meta: "Practical technical skills" };
    return { symbol: "SUB", tone: "core", meta: "First term mastery" };
  }

  function subjectIcon(subject, className) {
    const info = subjectCardInfo(subject);
    return `<span class="${className || "subject-mini-symbol"} tone-${info.tone}" aria-hidden="true">${info.symbol}</span>`;
  }

  /* ════════════════════════════════════════════════════════
   * HOME VIEW
   * ════════════════════════════════════════════════════════ */
  function renderHome() {
    const pane = $("homeView");
    if (!pane) return;

    pane.innerHTML = `
      <!-- HERO -->
      <section class="hero" aria-labelledby="heroTitle">
        <div class="hero-bg"></div>
        <div class="hero-particles" aria-hidden="true" id="heroParticles"></div>
        <div class="hero-content container">
          <div class="hero-text">
            <p class="eyebrow">🎓 NERDC 2025 Aligned</p>
            <h2 id="heroTitle">
              Nigeria's Smartest<br>
              <span class="highlight">Summer Bootcamp</span>
            </h2>
            <p>Learn, know, do, and create success with First Term 2026/2027 lessons for JSS1-SS3. Weekly content drops, professional notes, and practice CBTs - all in one offline-ready portal.</p>
            <div class="hero-badges">
              <span class="badge"><span class="dot"></span> Learn</span>
              <span class="badge"><span class="dot"></span> Know</span>
              <span class="badge"><span class="dot"></span> Do</span>
              <span class="badge"><span class="dot"></span> Create Success</span>
              <span class="badge"><span class="dot"></span> JSS1-SS3 Coverage</span>
              <span class="badge"><span class="dot"></span> WAEC, NECO, JAMB, BECE</span>
              <span class="badge"><span class="dot"></span> Works Offline After Install</span>
              <span class="badge"><span class="dot"></span> Total updates by selection</span>
            </div>
            <div class="hero-cta">
              <button class="btn btn-primary btn-lg" data-goto="register" id="heroCTA">
                📝 Register Now
              </button>
              ${OfflineDB.isLoggedIn()
                ? `<button class="btn btn-secondary btn-lg" data-goto="dashboard">Go to My Dashboard →</button>`
                : `<button class="btn btn-secondary btn-lg" id="heroCodeBtn">Enter Access Code</button>`}
            </div>
          </div>
          <div class="hero-showcase" aria-label="Learn Know Do Create Success">
            <img class="hero-main-art" src="assets/hero.PNG" alt="ChiaTech students learning with digital tools">
            <div class="value-orbit value-learn">Learn</div>
            <div class="value-orbit value-know">Know</div>
            <div class="value-orbit value-do">Do</div>
            <div class="value-orbit value-create">Create Success</div>
          </div>
          <div class="code-entry-card" id="homeCodeCard">
            <p class="eyebrow" style="margin-bottom:0.5rem">Already Registered?</p>
            <h3>Enter Your Access Code</h3>
            <p style="font-size:0.875rem;color:var(--clr-txt-muted);margin:0.5rem 0 1.25rem">
              You receive your code after payment is confirmed by ChiaTech.
            </p>
            <form id="codeEntryForm" novalidate>
              <div class="form-group">
                <label class="form-label" for="codeInput">Access Code <span class="required">*</span></label>
                <div class="code-input-row">
                  <input class="form-control" id="codeInput" type="text"
                    placeholder="SUMMER-XXXXXX" maxlength="20" autocomplete="off" spellcheck="false" required>
                  <button class="btn btn-primary" type="submit" id="codeSubmitBtn">Verify</button>
                </div>
                <p class="form-error" id="codeError"></p>
              </div>
              <p style="font-size:0.75rem;color:var(--clr-txt-faint);text-align:center;margin-top:0.5rem">
                Don't have a code? <button type="button" class="btn btn-ghost btn-sm" data-goto="register">Register →</button>
              </p>
            </form>
          </div>
        </div>
      </section>

      <!-- STATS -->
      <section class="section section-alt">
        <div class="container">
          <div class="stats-row">
            <div class="stat-card">
              <div class="stat-value">6</div>
              <p>Classes<br>JSS1 to SS3</p>
            </div>
            <div class="stat-card">
              <div class="stat-value green">30+</div>
              <p>Subjects<br>NERDC 2025 aligned</p>
            </div>
            <div class="stat-card">
              <div class="stat-value">12</div>
              <p>Weeks of<br>First Term content</p>
            </div>
            <div class="stat-card">
              <div class="stat-value green">PWA</div>
              <p>Offline-ready<br>after first visit</p>
            </div>
          </div>

          <div class="section-title">
            <p class="eyebrow">Why ChiaTech Bootcamp?</p>
            <h2>Everything a Nigerian Student Needs</h2>
            <p>Professionally prepared by ChiaTech's curriculum team, aligned to NERDC 2025 and the latest WAEC/JAMB syllabuses.</p>
          </div>
          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-icon gold">📅</div>
              <h3>Weekly Sequential Drops</h3>
              <p>Lessons unlock week by week, just like school. No cramming everything at once — structured learning that works.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon green">📥</div>
              <h3>Downloadable Notes & Schemes</h3>
              <p>ChiaTech-branded, professionally formatted PDF notes and schemes of work. Download by class and subject.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon gold">📶</div>
              <h3>Works Offline</h3>
              <p>Install the portal once and access your lessons even without internet. Your progress is saved automatically.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon green">🏆</div>
              <h3>Practice CBT Questions</h3>
              <p>Subject-specific objective questions in WAEC/NECO/JAMB/BECE style, with instant corrections and explanations.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon gold">🎓</div>
              <h3>All Exam Bodies Covered</h3>
              <p>JSS3 — BECE. SS3 — WAEC, NECO, JAMB, and NABTEB. Content tuned to what examiners actually set.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon green">🔐</div>
              <h3>Secure & Private</h3>
              <p>Your access code is unique to you. Device-change confirmation via email keeps your account safe.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section class="section">
        <div class="container">
          <div class="section-title">
            <p class="eyebrow">How It Works</p>
            <h2>Simple 4-Step Process</h2>
          </div>
          <div class="feature-grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
            ${["Register your details and select your class and subjects",
               "Select subjects and review your total before payment",
               "Receive your unique Access Code via WhatsApp or email within 24 hours",
               "Log in, access your weekly lessons, download notes, and practice CBT"
              ].map((txt, i) => `
              <div class="feature-card" style="text-align:center">
                <div style="width:56px;height:56px;border-radius:50%;background:var(--grad-gold);display:flex;align-items:center;justify-content:center;margin:0 auto var(--sp-4);font-family:var(--ff-head);font-size:1.5rem;font-weight:900;color:#000">${i+1}</div>
                <p style="color:var(--clr-txt-muted);font-size:var(--fs-sm);line-height:1.6">${txt}</p>
              </div>`).join("")}
          </div>
          <div style="text-align:center;margin-top:3rem">
            <button class="btn btn-primary btn-lg pulse" data-goto="register">Start Registration →</button>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <img src="chiatech-logo.png" alt="ChiaTech" onerror="this.style.display='none'">
              <p>ChiaTech Solutions & Resources Ltd — Abuja's leading educational technology and digital solutions company.</p>
            </div>
            <div class="footer-col">
              <h4>Bootcamp</h4>
              <ul>
                <li><a href="#register" data-goto="register">Register</a></li>
                <li><a href="#dashboard" data-goto="dashboard">Dashboard</a></li>
                <li><a href="#admin" data-goto="admin">Admin Panel</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Classes</h4>
              <ul>
                ${CURRICULUM.classes.map(c => `<li><a href="#">${c.name}</a></li>`).join("")}
              </ul>
            </div>
            <div class="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+2347037689917">+234 703 768 9917</a></li>
                <li><a href="mailto:chiatech01@gmail.com">chiatech01@gmail.com</a></li>
                <li><a href="https://chiatechsolutions.com" target="_blank" rel="noopener">chiatechsolutions.com</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© ${new Date().getFullYear()} ChiaTech Solutions & Resources Ltd. All rights reserved.</p>
            <p>Powered by Google Apps Script + PWA Technology</p>
          </div>
        </div>
      </footer>
    `;

    // Bind code entry form
    const form = $("codeEntryForm");
    if (form) form.addEventListener("submit", onCodeEntry);

    // Bind [data-goto] buttons rendered inside
    pane.querySelectorAll("[data-goto]").forEach(btn =>
      btn.addEventListener("click", () => showView(btn.dataset.goto))
    );

    const heroCodeBtn = $("heroCodeBtn");
    if (heroCodeBtn) {
      heroCodeBtn.addEventListener("click", () => {
        $("homeCodeCard")?.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => $("codeInput")?.focus(), 350);
      });
    }

    // Animated particles
    spawnParticles("heroParticles", 18);
  }

  /* ════════════════════════════════════════════════════════
   * REGISTRATION VIEW
   * ════════════════════════════════════════════════════════ */
  function renderRegister() {
    const pane = $("registerView");
    if (!pane) return;

    const classes = CURRICULUM.classes;
    const subjectsByClass = {};
    classes.forEach(c => { subjectsByClass[c.id] = CURRICULUM.getSubjectsForClass(c.id); });

    pane.innerHTML = `
      <div class="reg-section">
        <div class="reg-layout">
          <div>
            <p class="eyebrow">Step 1 of 3</p>
            <h2 style="font-family:var(--ff-head);font-size:clamp(1.75rem,3vw,2.25rem);font-weight:800;margin-bottom:0.5rem">
              Summer Bootcamp Registration
            </h2>
            <p style="color:var(--clr-txt-muted);margin-bottom:2rem;font-size:0.9rem">
              Fill in your details below. After submitting, make payment and ChiaTech will send your Access Code within 24 hours.
            </p>

            <form id="regForm" novalidate autocomplete="off">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem">
                <div class="form-group" style="grid-column:1/-1">
                  <label class="form-label" for="regName">Student Full Name <span class="required">*</span></label>
                  <input class="form-control" id="regName" type="text" placeholder="Tersoo David" required minlength="3">
                </div>
                <div class="form-group">
                  <label class="form-label" for="regPhone">Student Phone Number <span class="required">*</span></label>
                  <input class="form-control" id="regPhone" type="tel" placeholder="e.g. 08012345678" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="regEmail">Student Email Address <span class="required">*</span></label>
                  <input class="form-control" id="regEmail" type="email" placeholder="e.g. amaka@gmail.com" required>
                </div>
                <div class="form-group" style="grid-column:1/-1">
                  <label class="form-label" for="regAddress">Student Residential Address <span class="required">*</span></label>
                  <textarea class="form-control" id="regAddress" placeholder="House No., Street, Area, City, State" required rows="2"></textarea>
                </div>
                <div class="form-group" style="grid-column:1/-1">
                  <label class="form-label" for="regParent">Parent/Guardian Name & Contact
                    <span style="font-weight:400;color:var(--clr-txt-muted)"> (leave blank if same as student)</span>
                  </label>
                  <input class="form-control" id="regParent" type="text" placeholder="e.g. Mr. John Okafor - 08098765432">
                </div>
                <div class="form-group" style="grid-column:1/-1">
                  <label class="form-label" for="regClass">Class Registering For <span class="required">*</span></label>
                  <select class="form-control" id="regClass" required>
                    <option value="">Select class</option>
                    ${classes.map(c => `<option value="${c.id}">${c.name} (${c.exam})</option>`).join("")}
                  </select>
                </div>
              </div>

              <div class="form-group subject-selector" id="subjectsGroup" style="display:none">
                <label class="form-label">Select Subjects <span class="required">*</span></label>
                <p class="form-hint" style="margin-bottom:0.75rem">Choose the subjects for this term. Your total updates after each selection.</p>
                <div class="checkbox-grid" id="subjectCheckboxes"></div>
                <div id="totalCostBadge" class="selection-total" style="display:none">
                  <span>Total</span>
                  <strong id="totalCostAmt"></strong>
                </div>
              </div>

              <p class="form-error" id="regError" style="margin-bottom:1rem"></p>
              <button class="btn btn-primary btn-full btn-lg" type="submit" id="regSubmitBtn">
                Submit Registration
              </button>
            </form>
          </div>

          <div class="reg-sidebar">
            <div class="price-card">
              <h3>Access Summary</h3>
              <div class="price-item"><span class="label">Registration</span><span class="value">Free</span></div>
              <div class="price-item"><span class="label">First Term Duration</span><span class="value">~12 Weeks</span></div>
              <div class="price-item"><span class="label">Content Access</span><span class="value">Offline-ready PWA</span></div>
              <div class="price-item"><span class="label">Payment Total</span><span class="value">Shown after selection</span></div>
            </div>
            <div class="info-steps">
              <div class="info-step"><div class="step-num">1</div><p><strong>Submit this form</strong> — free, no payment yet.</p></div>
              <div class="info-step"><div class="step-num">2</div><p><strong>Pay via bank transfer</strong> or any ChiaTech channel.</p></div>
              <div class="info-step"><div class="step-num">3</div><p>ChiaTech <strong>confirms payment</strong> and sends your Access Code within 24 hours.</p></div>
              <div class="info-step"><div class="step-num">4</div><p>Enter your code on the <strong>Home page</strong> to unlock your lessons.</p></div>
            </div>
            <div style="margin-top:1.5rem;padding:1rem;background:rgba(0,212,160,0.07);border:1px solid rgba(0,212,160,0.2);border-radius:var(--r-md)">
              <p style="font-size:0.75rem;color:var(--clr-txt-muted)"><strong style="color:var(--clr-green)">Payment Details:</strong><br>
              Account Name: CHIA TECH SOLUTIONS AND RESOURCES LIMITED<br>
              Account Number: <strong style="color:var(--clr-txt)">6963021042</strong><br>
              Bank: Moniepoint<br>
              Send receipt via WhatsApp: +234 703 768 9917<br>
              Email: chiatech01@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Wire class change → show subjects
    const classSelect = $("regClass");
    if (classSelect) {
      classSelect.addEventListener("change", () => {
        const cid = classSelect.value;
        const group = $("subjectsGroup");
        const box = $("subjectCheckboxes");
        if (!cid || !group || !box) return;
        const subjects = CURRICULUM.getSubjectsForClass(cid);
        group.style.display = "block";
        box.innerHTML = subjects.map(sub => {
          const info = subjectCardInfo(sub);
          return `
            <label class="checkbox-item subject-card tone-${info.tone}" for="subj_${sub.id}">
              <input class="subject-input" type="checkbox" id="subj_${sub.id}" name="subjects" value="${sub.id}">
              ${subjectIcon(sub, "subject-card-icon")}
              <span class="subject-card-copy">
                <span class="subject-card-title">${escapeHtml(sub.title)}</span>
                <span class="subject-card-meta">${escapeHtml(info.meta)}</span>
              </span>
              <span class="subject-card-check" aria-hidden="true"></span>
            </label>
          `;
        }).join("");
        // Wire checkboxes → cost total
        box.querySelectorAll("input[type=checkbox]").forEach(cb => {
          cb.addEventListener("change", () => {
            cb.closest(".checkbox-item")?.classList.toggle("is-selected", cb.checked);
            updateRegCost();
          });
        });
        updateRegCost();
      });
    }

    const form = $("regForm");
    if (form) form.addEventListener("submit", onRegSubmit);
  }

  function updateRegCost() {
    const checked = document.querySelectorAll("#subjectCheckboxes input:checked").length;
    const badge = $("totalCostBadge");
    const amt   = $("totalCostAmt");
    if (!badge || !amt) return;
    if (checked > 0) {
      badge.style.display = "block";
      amt.innerHTML = "&#8358;" + (checked * 2500).toLocaleString() + "/month";
    } else {
      badge.style.display = "none";
      amt.textContent = "";
    }
  }

  /* ════════════════════════════════════════════════════════
   * DASHBOARD VIEW
   * ════════════════════════════════════════════════════════ */
  function renderDashboard() {
    if (!OfflineDB.isLoggedIn()) { showView("home"); return; }

    const pane = $("dashboardView");
    if (!pane) return;

    const student  = OfflineDB.getStudent();
    const subjects = (student.subjects || []).map(id => CURRICULUM.getSubjectById(id)).filter(Boolean);
    const cls      = CURRICULUM.getClassById(student.classLevel) || { name: student.classLevel };

    // Build sidebar subject tabs
    const subjectTabsHTML = subjects.map(s => `
      <button class="subject-tab ${s.id === S.selectedSubject ? "is-active" : ""}"
        data-subj="${s.id}">${subjectIcon(s)} ${s.shortTitle}</button>
    `).join("");

    pane.innerHTML = `
      <div class="dashboard-layout">
        <!-- SIDEBAR -->
        <aside class="sidebar">
          <div class="student-chip">
            <div class="student-avatar">${(student.name || "S")[0].toUpperCase()}</div>
            <div class="student-name">${student.name || "Student"}</div>
            <div class="student-meta">${cls.name} · ${student.subjects ? student.subjects.length : 0} subjects</div>
          </div>
          <div class="sidebar-section">
            <p class="sidebar-label">Navigation</p>
            ${[
              { tab:"lessons",   icon:"📚", label:"My Lessons" },
              { tab:"downloads", icon:"📥", label:"Download Notes" },
              { tab:"practice",  icon:"🎯", label:"Practice CBT" },
              { tab:"profile",   icon:"👤", label:"My Profile" }
            ].map(item => `
              <button class="sidebar-item ${S.dashTab === item.tab ? "is-active" : ""}" data-tab="${item.tab}">
                <span class="icon">${item.icon}</span> ${item.label}
              </button>
            `).join("")}
          </div>
          <div class="sidebar-section">
            <button class="sidebar-item btn-danger" id="logoutSidebar" style="width:100%;margin-top:0.5rem">
              <span class="icon">🚪</span> Logout
            </button>
          </div>
        </aside>

        <!-- MAIN CONTENT -->
        <main id="dashMain">
          <div id="dashTabContent"></div>
        </main>
      </div>
    `;

    // Wire sidebar
    pane.querySelectorAll(".sidebar-item[data-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        S.dashTab = btn.dataset.tab;
        pane.querySelectorAll(".sidebar-item[data-tab]").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        renderDashTab(subjects);
      });
    });

    const logoutSide = $("logoutSidebar");
    if (logoutSide) logoutSide.addEventListener("click", onLogout);

    renderDashTab(subjects, subjectTabsHTML);
  }

  function renderDashTab(subjects, subjectTabsHTML) {
    const container = $("dashTabContent");
    if (!container) return;

    switch (S.dashTab) {
      case "lessons":   renderLessonsTab(container, subjects); break;
      case "downloads": renderDownloadsTab(container, subjects); break;
      case "practice":  renderPracticeTab(container, subjects); break;
      case "profile":   renderProfileTab(container); break;
      default:          renderLessonsTab(container, subjects);
    }
  }

  /* ─── Lessons Tab ─── */
  function renderLessonsTab(container, subjects) {
    if (!subjects.length) {
      container.innerHTML = `<div class="empty-state"><div class="icon">📚</div><h3>No Subjects</h3><p>Contact ChiaTech to update your subject list.</p></div>`;
      return;
    }

    if (!S.selectedSubject) S.selectedSubject = subjects[0].id;
    const student  = OfflineDB.getStudent();
    const classId  = student.classLevel;
    const cls      = CURRICULUM.getClassById(classId) || { name: classId };
    const currData = CURRICULUM.getCurriculumForClass(classId, S.selectedSubject);
    const seen     = OfflineDB.getSeenWeeks(S.selectedSubject, classId);
    S.weekContent  = OfflineDB.getCachedContent("weekly_" + classId) || S.weekContent || [];

    const unlockedCount = currData
      ? currData.weeks.filter(w => CURRICULUM.isWeekUnlocked(w.week)).length
      : 0;
    const totalWeeks  = currData ? currData.weeks.length : 12;
    const progressPct = Math.round((unlockedCount / totalWeeks) * 100);

    container.innerHTML = `
      <div style="margin-bottom:1.5rem">
        <p class="eyebrow">📚 My Lessons — ${cls.name}</p>
        <h2 style="font-family:var(--ff-head);font-weight:800;font-size:1.5rem;margin-bottom:0.75rem">First Term 2026/2027</h2>
        <div class="subject-tabs" id="lessonSubjTabs">
          ${subjects.map(s => `
            <button class="subject-tab ${s.id === S.selectedSubject ? "is-active" : ""}" data-subj="${s.id}">
              ${subjectIcon(s)} ${s.shortTitle}
            </button>`).join("")}
        </div>
        <div style="margin-bottom:1.5rem">
          <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:var(--clr-txt-muted);margin-bottom:0.5rem">
            <span>Term Progress</span><span>${unlockedCount}/${totalWeeks} weeks unlocked</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width:${progressPct}%"></div>
          </div>
        </div>
      </div>

      <div class="weeks-grid" id="weeksGrid">
        ${renderWeekCards(currData, seen)}
      </div>
    `;

    // Wire subject tabs
    container.querySelectorAll(".subject-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        S.selectedSubject = btn.dataset.subj;
        renderDashTab(subjects);
      });
    });

    // Wire week card clicks
    container.querySelectorAll(".week-card.unlocked").forEach(card => {
      card.addEventListener("click", () => {
        const wk = parseInt(card.dataset.week);
        openWeekModal(currData, wk);
        OfflineDB.markWeekSeen(S.selectedSubject, student.classLevel, wk);
      });
    });

    if (navigator.onLine && SheetAPI.isConfigured()) {
      SheetAPI.getWeeklyContent({
        code: S.code,
        classLevel: student.classLevel,
        subjects: student.subjects || []
      }).then(res => {
        if (res.ok && Array.isArray(res.content)) {
          S.weekContent = res.content;
          OfflineDB.cacheContent("weekly_" + classId, res.content, 120);
          if (S.view === "dashboard" && S.dashTab === "lessons") renderDashTab(subjects);
        }
      }).catch(() => {});
    }
  }

  function renderWeekCards(currData, seen) {
    if (!currData) {
      return `<div class="empty-state"><div class="icon">📅</div><h3>No content yet</h3>
        <p>Curriculum data for this subject will appear here when available. Admin uploads weekly content via the Admin Panel.</p></div>`;
    }
    return currData.weeks.map(w => {
      const unlocked = CURRICULUM.isWeekUnlocked(w.week);
      const isSeen   = seen.includes(w.week);
      const uploads  = getUploadedWeekContent(currData.classId, currData.subjectId, w.week);
      const releaseDate = CURRICULUM.getWeekReleaseDate(w.week);
      const statusLabel = unlocked
        ? (isSeen ? "available" : "new")
        : "coming";
      const statusText = unlocked
        ? (isSeen ? "✓ Read" : "🔥 New")
        : "🔒 " + releaseDate.toLocaleDateString("en-NG", { day:"numeric", month:"short" });

      return `
        <div class="week-card ${unlocked ? "unlocked" : "locked"}" data-week="${w.week}" role="${unlocked ? "button" : "article"}" tabindex="${unlocked ? "0" : "-1"}">
          <div class="week-header">
            <div class="week-number ${unlocked ? "unlocked" : "locked"}">${w.week}</div>
            <div class="week-info">
              <div class="week-title">${w.topic}</div>
              <div class="week-subject">Week ${w.week} · First Term 2026/2027</div>
            </div>
            <span class="week-status ${statusLabel}">${statusText}</span>
          </div>
          ${unlocked ? `
            <div class="week-body">
              <p>${(w.objectives || []).slice(0,2).map(o => "• " + o).join("<br>") || "Click to view lesson content."}</p>
              ${uploads.length ? `<p class="text-green" style="font-size:0.75rem;margin-top:0.5rem">${uploads.length} uploaded note${uploads.length > 1 ? "s" : ""} ready</p>` : ""}
              <button class="btn btn-ghost btn-sm">📖 Read Lesson →</button>
            </div>` : ""}
        </div>
      `;
    }).join("");
  }

  function openWeekModal(currData, weekNum) {
    const week = currData.weeks.find(w => w.week === weekNum);
    if (!week) return;

    const notesHtml = formatNotes(week.notes || "");
    const uploads = getUploadedWeekContent(currData.classId, currData.subjectId, week.week);
    const objHtml = (week.objectives || []).length
      ? `<ul style="margin:0 0 1rem 1rem;color:var(--clr-txt-muted);font-size:0.875rem;line-height:1.8">
          ${week.objectives.map(o => `<li>${o}</li>`).join("")}
        </ul>` : "";

    openModal(`
      <div class="modal-header">
        <div>
          <p class="eyebrow">Week ${week.week} · ${CURRICULUM.getSubjectById(currData.subjectId)?.title || currData.subjectId}</p>
          <h3>${week.topic}</h3>
        </div>
        <button class="btn btn-icon btn-ghost" onclick="closeModal()" aria-label="Close">✕</button>
      </div>
      ${week.objectives?.length ? `<p class="eyebrow" style="margin-bottom:0.5rem">Learning Objectives</p>${objHtml}` : ""}
      <div class="lesson-notes">${notesHtml}</div>
      ${uploads.length ? `
        <div style="margin-top:1.25rem;padding:1rem;background:var(--clr-green-glow);border:1px solid rgba(0,212,160,0.24);border-radius:var(--r-md)">
          <p class="eyebrow" style="margin-bottom:0.75rem;color:var(--clr-green)">Uploaded ChiaTech Notes</p>
          <div style="display:flex;flex-direction:column;gap:0.6rem">
            ${uploads.map(item => `<a class="btn btn-green btn-sm" href="${item.url}" target="_blank" rel="noopener">${item.title || "Open weekly note"}</a>`).join("")}
          </div>
        </div>` : ""}
    `);
  }

  function getUploadedWeekContent(classId, subjectId, week) {
    const currentClass = CURRICULUM.normalizeClassId ? CURRICULUM.normalizeClassId(classId) : String(classId || "").toLowerCase();
    const currentWeek = parseInt(String(week || "").match(/\d+/)?.[0] || week, 10);
    return (S.weekContent || []).filter(item => {
      const itemWeek = parseInt(String(item.week || item.Week || "").match(/\d+/)?.[0] || item.week || item.Week, 10);
      const itemClass = CURRICULUM.normalizeClassId ? CURRICULUM.normalizeClassId(item.classLevel || item.ClassLevel) : String(item.classLevel || item.ClassLevel || "").toLowerCase();
      const itemSubject = String(item.subjectId || item.SubjectId || "").toLowerCase();
      return itemWeek === currentWeek && itemClass === currentClass && itemSubject === String(subjectId || "").toLowerCase() && (item.url || item.URL);
    }).map(item => ({
      title: item.title || item.Title || "Open weekly note",
      url: item.url || item.URL
    }));
  }

  /* Markdown-like formatter for lesson notes */
  function formatNotes(raw) {
    if (!raw) return "";
    return raw
      // Tables: | Header | ... |
      .replace(/^\|(.+)\|\s*$/gm, (_, row) => {
        if (_.trim().replace(/[|-]/g, "").trim() === "") return ""; // separator row
        const cells = row.split("|").map(c => c.trim());
        return "<tr>" + cells.map(c => `<td style="padding:0.35rem 0.6rem;border:1px solid var(--clr-border)">${c}</td>`).join("") + "</tr>";
      })
      .replace(/(<tr>.*?<\/tr>)/gs, m => `<table style="width:100%;border-collapse:collapse;margin:1rem 0;font-size:0.85rem">${m}</table>`)
      // Bold+heading **text**
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      // Heading lines
      .replace(/^#### (.+)$/gm, "<h4 style='font-family:var(--ff-head);font-weight:700;margin:1.25rem 0 0.5rem'>$1</h4>")
      .replace(/^### (.+)$/gm, "<h3 style='font-family:var(--ff-head);font-weight:700;margin:1.5rem 0 0.5rem'>$1</h3>")
      .replace(/^## (.+)$/gm, "<h2 style='font-family:var(--ff-head);font-weight:800;margin:1.5rem 0 0.5rem'>$1</h2>")
      // Italic *text*
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      // Bullet lists
      .replace(/^- (.+)$/gm, "<li style='margin-bottom:0.3rem'>$1</li>")
      .replace(/(<li.*<\/li>\n?)+/gs, m => `<ul style="margin:0.5rem 0 0.5rem 1.25rem;color:var(--clr-txt-muted)">${m}</ul>`)
      // Numbered lists
      .replace(/^\d+\. (.+)$/gm, "<li style='margin-bottom:0.3rem'>$1</li>")
      // Blank lines → paragraph breaks
      .replace(/\n\n/g, "</p><p style='margin-bottom:0.75rem'>")
      .replace(/^(?!<)(.+)$/gm, "<p style='margin-bottom:0.75rem'>$1</p>")
      .trim();
  }

  /* ─── Downloads Tab ─── */
  function renderDownloadsTab(container, subjects) {
    const student = OfflineDB.getStudent();

    // Try to get admin-uploaded downloads from cache
    const cached = OfflineDB.getCachedContent("downloads_" + student.classLevel);

    container.innerHTML = `
      <p class="eyebrow">📥 Download Notes & Schemes</p>
      <h2 style="font-family:var(--ff-head);font-weight:800;font-size:1.5rem;margin-bottom:0.5rem">ChiaTech Resource Library</h2>
      <p style="color:var(--clr-txt-muted);font-size:0.875rem;margin-bottom:1.5rem">
        Download professionally formatted schemes of work and lesson notes for your subjects.
      </p>
      <div class="subject-tabs" id="dlSubjTabs">
        <button class="subject-tab is-active" data-subj="all">All Subjects</button>
        ${subjects.map(s => `<button class="subject-tab" data-subj="${s.id}">${subjectIcon(s)} ${s.shortTitle}</button>`).join("")}
      </div>
      <div id="downloadsGrid" class="downloads-grid">
        ${renderDownloadCards(cached, subjects, "all")}
      </div>
    `;

    container.querySelectorAll("#dlSubjTabs .subject-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        container.querySelectorAll("#dlSubjTabs .subject-tab").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        $("downloadsGrid").innerHTML = renderDownloadCards(cached, subjects, btn.dataset.subj);
      });
    });

    // Fetch fresh downloads from sheet
    if (navigator.onLine) {
      SheetAPI.getDownloads({ code: S.code, classLevel: student.classLevel })
        .then(res => {
          if (res.ok && res.downloads) {
            OfflineDB.cacheContent("downloads_" + student.classLevel, res.downloads, 120);
            $("downloadsGrid").innerHTML = renderDownloadCards(res.downloads, subjects, "all");
          }
        }).catch(() => {});
    }
  }

  function renderDownloadCards(downloads, subjects, filterSubj) {
    const libraryResources = [
      {
        title: "ChiaTech Complete JSS/SSS New Curriculum Scheme",
        subject: "",
        type: "Master Scheme",
        icon: "📘",
        description: "Full ChiaTech reference scheme for the new curriculum across junior and senior secondary classes.",
        url: "Library/2026%20Complete-Scheme-of-Work-JSS%20n%20SSS%20New%20Curriculum.pdf"
      },
      {
        title: "JSS1-JSS3 NERDC Curriculum Scheme",
        subject: "",
        type: "Junior Secondary Scheme",
        icon: "📗",
        description: "Junior secondary scheme of work aligned to the updated NERDC curriculum.",
        url: "Library/JSS%201%20TO%203%20NEW%20NERDC%20CURRICULUM%20SCHEME%20OF%20WORK.pdf"
      },
      {
        title: "Senior Secondary Approved Curriculum Scheme",
        subject: "",
        type: "Senior Secondary Scheme",
        icon: "📙",
        description: "Senior secondary curriculum scheme for SS1 to SS3 subjects and pathways.",
        url: "Library/SSS%201%20TO%203%20NEW%20APPROVED%20CURRICULUM%20SCHEME%20OF%20WORK.pdf"
      },
      {
        title: "ChiaTech Senior Secondary Subject Guide",
        subject: "",
        type: "Subject Guide",
        icon: "🎓",
        description: "ChiaTech senior secondary subject grouping and exam pathway reference.",
        url: "Library/chiatech%20SENIOR%20SECONDARY%20SCHOOL%20subjects.pdf"
      },
      {
        title: "SSS1-3 Scheme of Work",
        subject: "",
        type: "Senior Secondary Scheme",
        icon: "📒",
        description: "Additional SS1 to SS3 scheme of work reference for academic planning.",
        url: "Library/SSS1-3%20Scheme%20of%20Work.pdf"
      },
      {
        title: "Solar PV Installation and Maintenance",
        subjects: ["solar-pv-installation-and-maintenance", "electrical-installation-and-maintenance-work"],
        type: "Trade Subject Scheme",
        icon: "🔆",
        description: "Trade subject scheme for solar photovoltaic installation and maintenance.",
        url: "Library/Solar-PV-Installation-and-Maintenance-ss1-3.pdf"
      },
      {
        title: "Digital Technology Scheme - SS1",
        subjects: ["digital-technologies", "computer-studies", "data-processing"],
        type: "Digital Technology Scheme",
        icon: "💻",
        description: "SS1 digital technology scheme of work.",
        url: "Library/Digital-Technology-Scheme-of-work-SS1.pdf"
      },
      {
        title: "Digital Technology Scheme - SS2",
        subjects: ["digital-technologies", "computer-studies", "data-processing"],
        type: "Digital Technology Scheme",
        icon: "💻",
        description: "SS2 digital technology scheme of work.",
        url: "Library/Digital-Technology-Scheme-of-work-SS2.pdf"
      },
      {
        title: "Digital Technology Scheme - SS3",
        subjects: ["digital-technologies", "computer-studies", "data-processing"],
        type: "Digital Technology Scheme",
        icon: "💻",
        description: "SS3 digital technology scheme of work.",
        url: "Library/Digital-Technology-Scheme-of-work-SS3.pdf"
      },
      {
        title: "WAEC Computer Studies Reference",
        subjects: ["digital-technologies", "computer-studies", "data-processing"],
        type: "Exam Reference",
        icon: "💻",
        description: "Computer Studies support material for WAEC-aligned digital technology preparation.",
        url: "Library/WAEC%20COMPUTER%20STUDIES.pdf"
      }
    ];

    // Built-in starter resources (always available)
    const builtIn = subjects.map(s => ({
      title: s.title + " — First Term Scheme of Work",
      subject: s.id,
      type: "Scheme of Work",
      icon: "📋",
      description: "NERDC 2025 aligned scheme of work for " + s.title + " — First Term 2026/2027",
      url: null  // null = view in portal (no external file)
    }));

    const all = [
      ...libraryResources,
      ...builtIn,
      ...(Array.isArray(downloads) ? downloads : [])
    ].filter(d => {
      if (filterSubj === "all") return true;
      if (!d.subject && !d.subjects) return true;
      if (Array.isArray(d.subjects)) return d.subjects.includes(filterSubj);
      return d.subject === filterSubj;
    });

    if (!all.length) {
      return `<div class="empty-state" style="grid-column:1/-1"><div class="icon">📭</div><h3>No downloads yet</h3>
        <p>The admin will upload notes and schemes here. Check back soon.</p></div>`;
    }

    return all.map(d => `
      <div class="download-card">
        <div class="download-icon">${d.icon || "📄"}</div>
        <h4>${d.title}</h4>
        <div class="meta">${d.type || "Resource"} · ${CURRICULUM.getSubjectById(d.subject || (Array.isArray(d.subjects) ? d.subjects[0] : ""))?.shortTitle || d.subject || ""}</div>
        <p style="font-size:0.8rem;color:var(--clr-txt-muted);flex:1">${d.description || ""}</p>
        ${d.url
          ? `<a class="btn btn-green btn-sm" href="${d.url}" target="_blank" rel="noopener">⬇ Download</a>`
          : `<button class="btn btn-ghost btn-sm" onclick="alert('This resource is embedded in the portal. Open the Lessons tab for Week-by-Week content.')">📖 View in Portal</button>`}
      </div>
    `).join("");
  }

  /* ─── Practice CBT Tab ─── */
  function renderPracticeTab(container, subjects) {
    const student = OfflineDB.getStudent();
    if (!S.selectedSubject) S.selectedSubject = subjects[0]?.id || "";

    const questions = CURRICULUM.getQuestionsForSubjectAndClass(S.selectedSubject, student.classLevel);

    container.innerHTML = `
      <p class="eyebrow">🎯 Practice CBT</p>
      <h2 style="font-family:var(--ff-head);font-weight:800;font-size:1.5rem;margin-bottom:0.75rem">
        Objective Practice Questions
      </h2>
      <div class="subject-tabs" id="cbtSubjTabs" style="margin-bottom:1.5rem">
        ${subjects.map(s => `<button class="subject-tab ${s.id === S.selectedSubject ? "is-active" : ""}" data-subj="${s.id}">${subjectIcon(s)} ${s.shortTitle}</button>`).join("")}
      </div>
      <div id="cbtContent">
        ${questions.length
          ? renderCBT(questions, student.classLevel)
          : `<div class="empty-state"><div class="icon">🎯</div><h3>No Questions Yet</h3>
              <p>Practice questions for this subject and class will appear here. Coming soon.</p></div>`}
      </div>
    `;

    container.querySelectorAll("#cbtSubjTabs .subject-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        S.selectedSubject = btn.dataset.subj;
        container.querySelectorAll("#cbtSubjTabs .subject-tab").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const qs = CURRICULUM.getQuestionsForSubjectAndClass(S.selectedSubject, student.classLevel);
        $("cbtContent").innerHTML = qs.length
          ? renderCBT(qs, student.classLevel)
          : `<div class="empty-state"><div class="icon">🎯</div><h3>No Questions Yet</h3><p>Coming soon for this subject.</p></div>`;
        bindCBTEvents($("cbtContent"));
      });
    });

    bindCBTEvents(container);
  }

  function renderCBT(questions, classId) {
    return `
      <div class="cbt-shell" style="max-width:100%;padding:0">
        <div class="cbt-header">
          <div class="cbt-progress">
            <span id="cbtQCount">Question 1 of ${questions.length}</span>
          </div>
          <button class="btn btn-ghost btn-sm" id="cbtRestartBtn">🔄 Restart</button>
        </div>
        <div id="cbtQuestionArea"></div>
        <div style="display:flex;gap:0.75rem;flex-wrap:wrap" id="cbtNavRow">
          <button class="btn btn-ghost" id="cbtPrevBtn" disabled>← Previous</button>
          <button class="btn btn-primary" id="cbtNextBtn">Next →</button>
          <button class="btn btn-green hidden" id="cbtSubmitBtn">Submit Practice</button>
        </div>
        <div id="cbtScoreArea" class="hidden" style="margin-top:1.5rem;padding:2rem;background:var(--clr-bg-card);border:1px solid var(--clr-border);border-radius:var(--r-xl);text-align:center">
          <div style="font-size:3rem;margin-bottom:1rem">🏆</div>
          <h3 style="font-family:var(--ff-head);font-size:1.5rem;font-weight:800;margin-bottom:0.5rem" id="cbtScoreTitle"></h3>
          <p id="cbtScoreDetail" style="color:var(--clr-txt-muted)"></p>
          <button class="btn btn-primary" id="cbtRetryBtn" style="margin-top:1rem">Try Again</button>
        </div>
      </div>
      <div id="hiddenQs" style="display:none" data-questions='${JSON.stringify(questions)}'></div>
    `;
  }

  function bindCBTEvents(container) {
    const hidden = container.querySelector("#hiddenQs");
    if (!hidden) return;
    let questions, current, answers, submitted;
    try { questions = JSON.parse(hidden.dataset.questions); } catch (_) { return; }
    current   = 0;
    answers   = {};
    submitted = false;

    function showQuestion(idx) {
      const q = questions[idx];
      const area = $("cbtQuestionArea");
      if (!area) return;
      area.innerHTML = `
        <div class="question-card">
          <div class="question-stem">${idx+1}. ${q.stem}</div>
          <div class="options-list">
            ${q.options.map((opt, i) => {
              let cls = "";
              if (submitted) {
                if (i === q.answerIndex) cls = "correct";
                else if (answers[q.id] === i) cls = "wrong";
              }
              return `
                <label class="option-label ${cls}" for="opt_${q.id}_${i}">
                  <input type="radio" id="opt_${q.id}_${i}" name="opt_${q.id}"
                    value="${i}" ${answers[q.id] === i ? "checked" : ""} ${submitted ? "disabled" : ""}>
                  <strong style="flex-shrink:0;width:24px">${["A","B","C","D"][i]}.</strong> ${opt}
                </label>`;
            }).join("")}
          </div>
          ${submitted && q.explanation ? `<div class="explanation visible">💡 ${q.explanation}</div>` : ""}
        </div>
      `;
      // Record answer
      if (!submitted) {
        area.querySelectorAll("input[type=radio]").forEach(r => {
          r.addEventListener("change", () => { answers[q.id] = parseInt(r.value); });
        });
      }
      if ($("cbtQCount")) $("cbtQCount").textContent = `Question ${idx+1} of ${questions.length}`;
      if ($("cbtPrevBtn")) $("cbtPrevBtn").disabled = idx === 0;
      const isLast = idx === questions.length - 1;
      if ($("cbtNextBtn")) $("cbtNextBtn").classList.toggle("hidden", isLast && !submitted);
      if ($("cbtSubmitBtn")) $("cbtSubmitBtn").classList.toggle("hidden", !isLast || submitted);
    }

    function doSubmit() {
      submitted = true;
      const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.answerIndex ? 1 : 0), 0);
      showQuestion(current);
      const scoreArea = $("cbtScoreArea");
      if (scoreArea) {
        scoreArea.classList.remove("hidden");
        const pct = Math.round((score / questions.length) * 100);
        $("cbtScoreTitle").textContent = `${score} / ${questions.length} — ${pct}%`;
        $("cbtScoreDetail").textContent = pct >= 70
          ? "Excellent! You are well prepared for this topic."
          : pct >= 50
          ? "Good effort! Review the questions you got wrong."
          : "Keep studying! Re-read your lesson notes and try again.";
      }
    }

    container.addEventListener("click", e => {
      if (e.target.id === "cbtNextBtn" || e.target.closest("#cbtNextBtn")) {
        if (current < questions.length - 1) { current++; showQuestion(current); }
      }
      if (e.target.id === "cbtPrevBtn" || e.target.closest("#cbtPrevBtn")) {
        if (current > 0) { current--; showQuestion(current); }
      }
      if (e.target.id === "cbtSubmitBtn" || e.target.closest("#cbtSubmitBtn")) { doSubmit(); }
      if (e.target.id === "cbtRetryBtn" || e.target.closest("#cbtRetryBtn")) {
        answers = {}; submitted = false; current = 0;
        $("cbtScoreArea")?.classList.add("hidden");
        showQuestion(0);
      }
      if (e.target.id === "cbtRestartBtn" || e.target.closest("#cbtRestartBtn")) {
        answers = {}; submitted = false; current = 0;
        $("cbtScoreArea")?.classList.add("hidden");
        showQuestion(0);
      }
    });

    showQuestion(0);
  }

  /* ─── Profile Tab ─── */
  function renderProfileTab(container) {
    const student = OfflineDB.getStudent();
    if (!student) return;
    const subjects = (student.subjects || []).map(id => CURRICULUM.getSubjectById(id)).filter(Boolean);
    const cls = CURRICULUM.getClassById(student.classLevel);

    container.innerHTML = `
      <p class="eyebrow">👤 My Profile</p>
      <h2 style="font-family:var(--ff-head);font-weight:800;font-size:1.5rem;margin-bottom:1.5rem">Account Details</h2>
      <div style="max-width:600px">
        ${[
          ["Full Name", student.name],
          ["Email", student.email],
          ["Phone", student.phone],
          ["Class", cls ? cls.name : student.classLevel],
          ["Access Code", OfflineDB.getCode()],
          ["Exam Target", cls ? cls.exam : "—"]
        ].map(([label, val]) => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:1rem 0;border-bottom:1px solid var(--clr-border);flex-wrap:wrap;gap:0.5rem">
            <span style="font-size:0.875rem;color:var(--clr-txt-muted);min-width:120px">${label}</span>
            <strong style="font-size:0.9rem;text-align:right">${val || "—"}</strong>
          </div>`).join("")}
        <div style="padding:1rem 0">
          <span style="font-size:0.875rem;color:var(--clr-txt-muted)">Registered Subjects</span>
          <div style="margin-top:0.75rem;display:flex;flex-wrap:wrap;gap:0.5rem">
            ${subjects.map(s => `<span class="badge">${subjectIcon(s, "subject-badge-symbol")} ${s.shortTitle}</span>`).join("") || "<em>None</em>"}
          </div>
        </div>
        <div style="margin-top:1.5rem;display:flex;gap:1rem;flex-wrap:wrap">
          <button class="btn btn-danger" id="profileLogout">🚪 Logout</button>
          <button class="btn btn-ghost" onclick="navigator.share && navigator.share({title:'ChiaTech Summer Bootcamp',url:location.href})">
            📤 Share Portal
          </button>
        </div>
      </div>
    `;
    $("profileLogout")?.addEventListener("click", onLogout);
  }

  /* ════════════════════════════════════════════════════════
   * ADMIN VIEW
   * ════════════════════════════════════════════════════════ */
  function renderAdmin() {
    const pane = $("adminView");
    if (!pane) return;

    if (!OfflineDB.isAdmin()) {
      pane.innerHTML = `
        <div class="container" style="max-width:480px;padding:4rem 1.5rem">
          <p class="eyebrow">🔐 Admin Access</p>
          <h2 style="font-family:var(--ff-head);font-weight:800;font-size:1.75rem;margin-bottom:0.5rem">Admin Panel Login</h2>
          <p style="color:var(--clr-txt-muted);margin-bottom:2rem;font-size:0.875rem">Enter your Admin Panel Code to access the management console.</p>
          <form id="adminLoginForm">
            <div class="form-group">
              <label class="form-label" for="adminCodeInput">Admin Panel Code <span class="required">*</span></label>
              <input class="form-control" id="adminCodeInput" type="password" placeholder="Enter admin code" required autocomplete="off">
              <p class="form-error" id="adminLoginError"></p>
            </div>
            <button class="btn btn-primary btn-full" type="submit" id="adminLoginBtn">Login to Admin Panel</button>
          </form>
        </div>
      `;
      $("adminLoginForm")?.addEventListener("submit", onAdminLogin);
      return;
    }

    // Admin is logged in — show console
    renderAdminConsole(pane);
  }

  function renderAdminConsole(pane) {
    pane.innerHTML = `
      <div class="container" style="padding:2rem 1.5rem">
        <div class="admin-header">
          <div>
            <p class="eyebrow">🛠 Admin Console</p>
            <h2 style="font-family:var(--ff-head);font-weight:800;font-size:1.5rem">Summer Bootcamp Manager</h2>
          </div>
          <div style="display:flex;gap:0.75rem;align-items:center">
            <button class="btn btn-ghost btn-sm" id="adminRefreshBtn">🔄 Refresh</button>
            <button class="btn btn-danger btn-sm" id="adminLogoutBtn">Logout Admin</button>
          </div>
        </div>
        <div class="admin-tabs" id="adminTabs">
          ${[
            { tab:"students", label:"👥 Students" },
            { tab:"content",  label:"📅 Weekly Content" },
            { tab:"downloads",label:"📥 Downloads" },
            { tab:"sendcode", label:"🔑 Send Code" }
          ].map(t => `<button class="admin-tab ${S.adminTab === t.tab ? "is-active" : ""}" data-tab="${t.tab}">${t.label}</button>`).join("")}
        </div>
        <div id="adminTabContent" style="margin-top:1.5rem"></div>
      </div>
    `;

    $("adminLogoutBtn")?.addEventListener("click", () => {
      OfflineDB.remove(OfflineDB.KEYS.adminToken);
      S.adminToken = "";
      S.adminData  = null;
      showToast("Admin logged out", "info");
      renderAdmin();
    });

    $("adminRefreshBtn")?.addEventListener("click", () => {
      S.adminData = null;
      loadAdminData();
    });

    pane.querySelectorAll(".admin-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        S.adminTab = btn.dataset.tab;
        pane.querySelectorAll(".admin-tab").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        renderAdminTab();
      });
    });

    loadAdminData();
  }

  function loadAdminData() {
    const content = $("adminTabContent");
    if (content) content.innerHTML = `<div class="page-loader"><div class="spinner"></div><p>Loading data…</p></div>`;

    SheetAPI.adminGetDashboard({ adminToken: OfflineDB.getAdminToken() })
      .then(res => {
        if (!res.ok) { showToast(res.message || "Failed to load dashboard", "error"); return; }
        S.adminData = res;
        renderAdminTab();
      })
      .catch(() => {
        if (content) content.innerHTML = `<div class="empty-state"><div class="icon">📡</div><h3>Offline</h3><p>Connect to the internet to view admin data.</p></div>`;
      });
  }

  function renderAdminTab() {
    const container = $("adminTabContent");
    if (!container) return;
    const data = S.adminData || {};

    switch (S.adminTab) {
      case "students":  renderAdminStudents(container, data.registrations || []); break;
      case "content":   renderAdminContent(container, data.weeklyContent || []); break;
      case "downloads": renderAdminDownloads(container, data.downloads || []); break;
      case "sendcode":  renderAdminSendCode(container, data.registrations || []); break;
      default:          renderAdminStudents(container, data.registrations || []);
    }
  }

  function renderAdminStudents(container, registrations) {
    container.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:1rem">
        <p style="font-size:0.875rem;color:var(--clr-txt-muted)">${registrations.length} registration(s) found</p>
        <input class="form-control" style="max-width:260px" id="studentSearch" placeholder="Search by name or email…">
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>#</th><th>Name</th><th>Phone</th><th>Email</th><th>Class</th><th>Subjects</th><th>Code</th><th>Status</th>
            </tr>
          </thead>
          <tbody id="studentTableBody">
            ${registrations.length
              ? registrations.map((r, i) => `
                  <tr>
                    <td>${i+1}</td>
                    <td><strong>${r.name || "—"}</strong></td>
                    <td>${r.phone || "—"}</td>
                    <td style="font-size:0.8rem">${r.email || "—"}</td>
                    <td><span class="week-status available">${r.classLevel || "—"}</span></td>
                    <td style="font-size:0.75rem;max-width:160px">${r.subjects || "—"}</td>
                    <td><code style="font-size:0.8rem;color:var(--clr-gold)">${r.code || "Pending"}</code></td>
                    <td><span class="week-status ${r.code ? "available" : "coming"}">${r.code ? "✓ Active" : "⏳ Awaiting"}</span></td>
                  </tr>`)
              .join("")
              : `<tr><td colspan="8" style="text-align:center;color:var(--clr-txt-muted)">No registrations yet</td></tr>`}
          </tbody>
        </table>
      </div>
    `;

    $("studentSearch")?.addEventListener("input", e => {
      const q = e.target.value.toLowerCase();
      $("studentTableBody")?.querySelectorAll("tr").forEach(tr => {
        tr.style.display = tr.textContent.toLowerCase().includes(q) ? "" : "none";
      });
    });
  }

  function renderAdminContent(container, content) {
    container.innerHTML = `
      <div class="card card-padded" style="margin-bottom:1.5rem">
        <p class="eyebrow" style="margin-bottom:0.75rem">Add / Update Weekly Content Link</p>
        <form id="contentForm" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem;align-items:end">
          <div class="form-group" style="margin-bottom:0">
            <label class="form-label" for="cWeek">Week Number</label>
            <select class="form-control" id="cWeek">
              ${Array.from({length:12},(_,i)=>`<option value="${i+1}">Week ${i+1}</option>`).join("")}
            </select>
          </div>
          <div class="form-group" style="margin-bottom:0">
            <label class="form-label" for="cClass">Class</label>
            <select class="form-control" id="cClass">
              ${CURRICULUM.classes.map(c=>`<option value="${c.id}">${c.name}</option>`).join("")}
            </select>
          </div>
          <div class="form-group" style="margin-bottom:0">
            <label class="form-label" for="cSubject">Subject</label>
            <select class="form-control" id="cSubject">
              ${CURRICULUM.subjects.map(s=>`<option value="${s.id}">${s.title}</option>`).join("")}
            </select>
          </div>
          <div class="form-group" style="margin-bottom:0;grid-column:1/-1">
            <label class="form-label" for="cTitle">Content Title</label>
            <input class="form-control" id="cTitle" placeholder="e.g. Week 3 — Atomic Structure Notes">
          </div>
          <div class="form-group" style="margin-bottom:0;grid-column:1/-1">
            <label class="form-label" for="cUrl">Google Drive / Google Docs URL</label>
            <input class="form-control" id="cUrl" type="url" placeholder="https://docs.google.com/...">
          </div>
          <div class="form-group" style="margin-bottom:0;grid-column:1/-1">
            <label class="form-label" for="cRelease">Release Date (when students can see this)</label>
            <input class="form-control" id="cRelease" type="date">
          </div>
          <button class="btn btn-primary" type="submit" id="contentSaveBtn" style="grid-column:1/-1">Save Content Record</button>
        </form>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Week</th><th>Class</th><th>Subject</th><th>Title</th><th>Release Date</th><th>Link</th></tr></thead>
          <tbody>
            ${content.length
              ? content.map(c=>`<tr>
                  <td>W${c.week}</td>
                  <td>${c.classLevel||"—"}</td>
                  <td style="font-size:0.8rem">${CURRICULUM.getSubjectById(c.subjectId)?.shortTitle||c.subjectId||"—"}</td>
                  <td>${c.title||"—"}</td>
                  <td style="font-size:0.8rem">${c.releaseDate||"—"}</td>
                  <td>${c.url?`<a href="${c.url}" target="_blank" style="font-size:0.8rem">🔗 Open</a>`:"—"}</td>
                </tr>`).join("")
              : `<tr><td colspan="6" style="text-align:center;color:var(--clr-txt-muted)">No content records yet</td></tr>`}
          </tbody>
        </table>
      </div>
    `;
    $("contentForm")?.addEventListener("submit", e => {
      e.preventDefault();
      const payload = {
        adminToken: OfflineDB.getAdminToken(),
        week:       $("cWeek").value,
        classLevel: $("cClass").value,
        subjectId:  $("cSubject").value,
        title:      $("cTitle").value,
        url:        $("cUrl").value,
        releaseDate:$("cRelease").value
      };
      const btn = $("contentSaveBtn");
      btn.classList.add("loading"); btn.disabled = true;
      SheetAPI.adminUpdateContent(payload).then(res => {
        btn.classList.remove("loading"); btn.disabled = false;
        if (res.ok) { showToast("Content record saved ✅", "success"); loadAdminData(); }
        else showToast(res.message || "Error saving content", "error");
      });
    });
  }

  function renderAdminDownloads(container, downloads) {
    container.innerHTML = `
      <div class="card card-padded" style="margin-bottom:1.5rem">
        <p class="eyebrow" style="margin-bottom:0.75rem">Add Downloadable Resource</p>
        <form id="dlForm" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem;align-items:end">
          <div class="form-group" style="margin-bottom:0">
            <label class="form-label" for="dlClass">Class</label>
            <select class="form-control" id="dlClass">
              <option value="ALL">All Classes</option>
              ${CURRICULUM.classes.map(c=>`<option value="${c.id}">${c.name}</option>`).join("")}
            </select>
          </div>
          <div class="form-group" style="margin-bottom:0">
            <label class="form-label" for="dlSubject">Subject</label>
            <select class="form-control" id="dlSubject">
              ${CURRICULUM.subjects.map(s=>`<option value="${s.id}">${s.shortTitle}</option>`).join("")}
            </select>
          </div>
          <div class="form-group" style="margin-bottom:0;grid-column:1/-1">
            <label class="form-label" for="dlTitle">File Title</label>
            <input class="form-control" id="dlTitle" placeholder="e.g. JSS1 Mathematics Scheme of Work — First Term">
          </div>
          <div class="form-group" style="margin-bottom:0;grid-column:1/-1">
            <label class="form-label" for="dlUrl">Google Drive Share Link (anyone with link can view)</label>
            <input class="form-control" id="dlUrl" type="url" placeholder="https://drive.google.com/file/d/...">
          </div>
          <div class="form-group" style="margin-bottom:0">
            <label class="form-label" for="dlType">Type</label>
            <select class="form-control" id="dlType">
              <option>Scheme of Work</option><option>Lesson Notes</option>
              <option>Past Questions</option><option>Model Answers</option><option>Other</option>
            </select>
          </div>
          <button class="btn btn-green" type="submit" id="dlSaveBtn" style="grid-column:1/-1">Add Resource</button>
        </form>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>Title</th><th>Class</th><th>Subject</th><th>Type</th><th>Link</th><th>Remove</th></tr></thead>
          <tbody>
            ${downloads.length
              ? downloads.map((d,i)=>`<tr>
                  <td>${d.title||"—"}</td>
                  <td>${d.classLevel||"ALL"}</td>
                  <td style="font-size:0.8rem">${CURRICULUM.getSubjectById(d.subject)?.shortTitle||d.subject||"—"}</td>
                  <td>${d.type||"—"}</td>
                  <td>${d.url?`<a href="${d.url}" target="_blank" style="font-size:0.8rem">🔗 Open</a>`:"—"}</td>
                  <td><button class="btn btn-danger btn-sm" data-dlrow="${d.rowIndex || i + 2}">🗑</button></td>
                </tr>`).join("")
              : `<tr><td colspan="6" style="text-align:center;color:var(--clr-txt-muted)">No downloads uploaded yet</td></tr>`}
          </tbody>
        </table>
      </div>
    `;
    $("dlForm")?.addEventListener("submit", e => {
      e.preventDefault();
      const payload = { adminToken: OfflineDB.getAdminToken(), classLevel: $("dlClass").value, subject: $("dlSubject").value, title: $("dlTitle").value, url: $("dlUrl").value, type: $("dlType").value };
      const btn = $("dlSaveBtn");
      btn.classList.add("loading"); btn.disabled = true;
      SheetAPI.adminAddDownload(payload).then(res => {
        btn.classList.remove("loading"); btn.disabled = false;
        if (res.ok) { showToast("Download added ✅", "success"); loadAdminData(); }
        else showToast(res.message || "Error", "error");
      });
    });

    container.querySelectorAll("[data-dlrow]").forEach(btn => {
      btn.addEventListener("click", async () => {
        btn.disabled = true;
        const res = await SheetAPI.adminRemoveDownload({
          adminToken: OfflineDB.getAdminToken(),
          rowIndex: btn.dataset.dlrow
        });

        if (res.ok) {
          showToast("Download removed", "success");
          loadAdminData();
        } else {
          btn.disabled = false;
          showToast(res.message || "Unable to remove download", "error");
        }
      });
    });
  }

  function renderAdminSendCode(container, registrations) {
    container.innerHTML = `
      <div class="card card-padded" style="margin-bottom:1.5rem;max-width:600px">
        <p class="eyebrow" style="margin-bottom:0.75rem">✉️ Send Access Code to Student</p>
        <p style="font-size:0.875rem;color:var(--clr-txt-muted);margin-bottom:1.5rem">
          Enter the student's email and the access code to assign. ChiaTech will email the code to the student automatically.
        </p>
        <form id="sendCodeForm">
          <div class="form-group">
            <label class="form-label" for="scEmail">Student Email <span class="required">*</span></label>
            <input class="form-control" id="scEmail" type="email" placeholder="student@email.com" list="regEmailList" required>
            <datalist id="regEmailList">
              ${registrations.map(r=>`<option value="${r.email}">${r.name}</option>`).join("")}
            </datalist>
          </div>
          <div class="form-group">
            <label class="form-label" for="scCode">Access Code to Send <span class="required">*</span></label>
            <input class="form-control" id="scCode" type="text" placeholder="e.g. SUMMER-2026-ABC123" style="text-transform:uppercase;letter-spacing:0.05em" required>
            <p class="form-hint">A unique code for this student. Or click below to auto-generate one.</p>
          </div>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem">
            <button type="button" class="btn btn-ghost btn-sm" id="genCodeBtn">🎲 Generate Random Code</button>
          </div>
          <p class="form-error" id="sendCodeError"></p>
          <button class="btn btn-primary btn-full" type="submit" id="sendCodeBtn">Send Code + Notify Student by Email</button>
        </form>
      </div>
    `;

    $("genCodeBtn")?.addEventListener("click", () => {
      const code = "SUMMER-2026-" + Math.random().toString(36).slice(2,8).toUpperCase();
      $("scCode").value = code;
    });

    $("sendCodeForm")?.addEventListener("submit", async e => {
      e.preventDefault();
      const btn = $("sendCodeBtn");
      const errEl = $("sendCodeError");
      btn.classList.add("loading"); btn.disabled = true;
      if (errEl) { errEl.textContent = ""; errEl.classList.remove("visible"); }

      const payload = {
        adminToken: OfflineDB.getAdminToken(),
        studentEmail: $("scEmail").value.trim().toLowerCase(),
        code: $("scCode").value.trim().toUpperCase()
      };

      const res = await SheetAPI.adminSendCodeByEmail(payload);
      btn.classList.remove("loading"); btn.disabled = false;

      if (res.ok) {
        showToast("✅ Code sent to " + payload.studentEmail, "success");
        $("sendCodeForm").reset();
        loadAdminData();
      } else {
        if (errEl) { errEl.textContent = res.message || "Error sending code."; errEl.classList.add("visible"); }
        showToast(res.message || "Error", "error");
      }
    });
  }

  /* ════════════════════════════════════════════════════════
   * FORM HANDLERS
   * ════════════════════════════════════════════════════════ */

  /* Code entry handler */
  async function onCodeEntry(e) {
    e.preventDefault();
    const codeRaw = ($("codeInput")?.value || "").trim().toUpperCase();
    const errEl   = $("codeError");
    const btn     = $("codeSubmitBtn");
    if (!codeRaw) { if (errEl) { errEl.textContent = "Please enter your access code."; errEl.classList.add("visible"); } return; }

    btn.classList.add("loading"); btn.disabled = true;
    if (errEl) { errEl.textContent = ""; errEl.classList.remove("visible"); }

    const res = await SheetAPI.verifyCode({ code: codeRaw, deviceId: OfflineDB.getDeviceId() });
    btn.classList.remove("loading"); btn.disabled = false;

    if (!res.ok) {
      if (errEl) { errEl.textContent = res.message || "Invalid code. Check your code and try again."; errEl.classList.add("visible"); }
      return;
    }

    // Check device
    if (res.requiresDeviceConfirmation) {
      showDeviceConfirmModal(codeRaw, res);
      return;
    }

    // All good — save session
    finalizeLogin(codeRaw, res.student);
  }

  function finalizeLogin(code, student) {
    OfflineDB.saveSession(code, student);
    S.code    = code;
    S.student = student;
    S.selectedClass   = student.classLevel || "";
    S.selectedSubject = (CURRICULUM.getSubjectsForClass(S.selectedClass)[0] || {}).id || "";
    showToast("🎉 Welcome, " + (student.name || "Student") + "!", "success");
    showView("dashboard");
  }

  function showDeviceConfirmModal(code, verifyRes) {
    openModal(`
      <div class="device-confirm-card" style="background:none;border:none;padding:0">
        <div class="device-icon">🔐</div>
        <h3 style="font-family:var(--ff-head);font-weight:800;font-size:1.4rem;margin-bottom:0.5rem">New Device Detected</h3>
        <p style="color:var(--clr-txt-muted);font-size:0.875rem;margin-bottom:1.5rem">
          This is a new device for your account. A confirmation email has been sent to <strong>${verifyRes.email || "your registered email"}</strong>.
          <br><br>
          Check your email and click the confirmation link, then click <strong>Continue</strong> below.
        </p>
        <p style="font-size:0.75rem;color:var(--clr-txt-faint);margin-bottom:1.5rem">
          Token: <code style="color:var(--clr-gold)">${verifyRes.deviceToken || "—"}</code>
        </p>
        <div style="display:flex;gap:0.75rem;flex-wrap:wrap;justify-content:center">
          <button class="btn btn-primary" id="deviceConfirmContinue">✅ I've confirmed — Continue</button>
          <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        </div>
      </div>
    `);
    $("deviceConfirmContinue")?.addEventListener("click", async () => {
      const res = await SheetAPI.confirmDevice({ code, deviceId: OfflineDB.getDeviceId(), token: verifyRes.deviceToken });
      if (res.ok) {
        closeModal();
        finalizeLogin(code, res.student || verifyRes.student);
      } else {
        showToast(res.message || "Device not yet confirmed. Please check your email.", "error");
      }
    });
  }

  /* Registration submit */
  async function onRegSubmit(e) {
    e.preventDefault();
    const subjects = Array.from(document.querySelectorAll("#subjectCheckboxes input:checked")).map(cb => cb.value);
    const errEl    = $("regError");
    const btn      = $("regSubmitBtn");

    if (subjects.length === 0) {
      if (errEl) { errEl.textContent = "Please select at least one subject."; errEl.classList.add("visible"); }
      return;
    }

    const payload = {
      name:       $("regName")?.value.trim(),
      phone:      $("regPhone")?.value.trim(),
      email:      $("regEmail")?.value.trim().toLowerCase(),
      address:    $("regAddress")?.value.trim(),
      parent:     $("regParent")?.value.trim(),
      classLevel: $("regClass")?.value,
      subjects:   subjects.join(", ")
    };

    if (!payload.name || !payload.phone || !payload.email || !payload.address || !payload.classLevel) {
      if (errEl) { errEl.textContent = "Please fill in all required fields."; errEl.classList.add("visible"); }
      return;
    }

    btn.classList.add("loading"); btn.disabled = true;
    if (errEl) { errEl.textContent = ""; errEl.classList.remove("visible"); }

    const res = await SheetAPI.register(payload);
    btn.classList.remove("loading"); btn.disabled = false;

    if (res.ok || res.queued) {
      openModal(`
        <div style="text-align:center">
          <div style="font-size:3.5rem;margin-bottom:1rem;color:var(--clr-green);font-weight:900">&check;</div>
          <h3 style="font-family:var(--ff-head);font-weight:800;font-size:1.5rem;margin-bottom:0.75rem">Registration Successful!</h3>
          <p style="color:var(--clr-txt-muted);margin-bottom:1.5rem">
            Your registration has been submitted. ChiaTech will review your details and send your <strong>Access Code</strong> within <strong>24 hours</strong> after payment confirmation.
          </p>
          <div style="background:rgba(245,166,35,0.07);border:1px solid rgba(245,166,35,0.2);border-radius:var(--r-md);padding:1rem;margin-bottom:1.5rem;font-size:0.875rem;text-align:left">
            <strong style="color:var(--clr-gold)">Next Steps:</strong><br>
            1. Make payment (&#8358;${(subjects.length * 2500).toLocaleString()}/month for ${subjects.length} subject${subjects.length > 1 ? "s" : ""})<br>
            2. Contact ChiaTech: +234 703 768 9917 or chiatech01@gmail.com<br>
            3. Receive your Access Code and return to enter it on the Home page
          </div>
          <button class="btn btn-primary" onclick="closeModal()">Done</button>
        </div>
      `);
    } else {
      if (errEl) { errEl.textContent = res.message || "Registration failed. Please try again."; errEl.classList.add("visible"); }
    }
  }

  /* Admin login */
  async function onAdminLogin(e) {
    e.preventDefault();
    const code  = $("adminCodeInput")?.value.trim();
    const errEl = $("adminLoginError");
    const btn   = $("adminLoginBtn");

    btn.classList.add("loading"); btn.disabled = true;
    if (errEl) { errEl.textContent = ""; errEl.classList.remove("visible"); }

    const res = await SheetAPI.adminLogin({ adminCode: code });
    btn.classList.remove("loading"); btn.disabled = false;

    if (res.ok && res.adminToken) {
      OfflineDB.write(OfflineDB.KEYS.adminToken, res.adminToken);
      S.adminToken = res.adminToken;
      showToast("Admin logged in ✅", "success");
      renderAdmin();
    } else {
      if (errEl) { errEl.textContent = res.message || "Invalid admin code."; errEl.classList.add("visible"); }
    }
  }

  /* Logout */
  function onLogout() {
    openModal(`
      <div style="text-align:center">
        <div style="font-size:3rem;margin-bottom:1rem">🚪</div>
        <h3 style="font-family:var(--ff-head);font-weight:800;margin-bottom:0.5rem">Logout?</h3>
        <p style="color:var(--clr-txt-muted);margin-bottom:1.5rem">Your access code will be removed from this device. You can re-enter it at any time.</p>
        <div style="display:flex;gap:0.75rem;justify-content:center">
          <button class="btn btn-danger" id="confirmLogoutBtn">Yes, Logout</button>
          <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
        </div>
      </div>
    `);
    $("confirmLogoutBtn")?.addEventListener("click", () => {
      OfflineDB.clearSession();
      S.student = null;
      S.code    = null;
      closeModal();
      updateHeaderPill();
      showToast("Logged out successfully.", "info");
      showView("home");
    });
  }

  /* ════════════════════════════════════════════════════════
   * MODAL HELPERS
   * ════════════════════════════════════════════════════════ */
  function openModal(html) {
    if (!el.modal || !el.modalBody) return;
    el.modalBody.innerHTML = html;
    el.modal.classList.add("open");
    document.body.style.overflow = "hidden";
    // Wire any [data-goto] buttons inside modal
    el.modal.querySelectorAll("[data-goto]").forEach(btn =>
      btn.addEventListener("click", () => { closeModal(); showView(btn.dataset.goto); })
    );
  }

  window.closeModal = function () {
    if (!el.modal) return;
    el.modal.classList.remove("open");
    document.body.style.overflow = "";
    if (el.modalBody) el.modalBody.innerHTML = "";
  };

  /* ════════════════════════════════════════════════════════
   * TOAST
   * ════════════════════════════════════════════════════════ */
  let toastTimer;
  window.showToast = function (message, type, duration) {
    if (!el.toast) return;
    clearTimeout(toastTimer);
    el.toast.textContent = message;
    el.toast.className   = "toast " + (type || "info") + " show";
    toastTimer = setTimeout(() => {
      el.toast.classList.remove("show");
    }, duration || 3500);
  };

  /* ════════════════════════════════════════════════════════
   * PARTICLES
   * ════════════════════════════════════════════════════════ */
  function spawnParticles(containerId, count) {
    const container = $(containerId);
    if (!container) return;
    const colours = ["#f5a623", "#00d4a0", "#7c5cfc", "#4fa3e3"];
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 6 + 3;
      p.className = "particle";
      Object.assign(p.style, {
        width: size + "px", height: size + "px",
        left:  Math.random() * 100 + "%",
        background: colours[Math.floor(Math.random() * colours.length)],
        animationDuration: (Math.random() * 15 + 10) + "s",
        animationDelay:    (Math.random() * 8) + "s"
      });
      container.appendChild(p);
    }
  }

})();
