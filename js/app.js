/* ═══════════════════════════════════════════════════════════
   DEUS IN AETERNUM — APP v2.0
   Wires: streak · papal arms · icons · i18n · saint-of-day
          readings · liturgical wheel · bible · prayers
          saints · rosary · doctrine · stations · examination
          chaplets · credits · Fides AI
   ═══════════════════════════════════════════════════════════ */

/* ── TOAST ── */
let _toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ── NAVIGATION ── */
function navigate(p) {
    document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(x => x.removeAttribute('aria-current'));
    const page = document.getElementById('page-' + p);
    if (!page) return;
    page.classList.add('active');
    const nb = document.getElementById('nav-' + p);
    if (nb) nb.setAttribute('aria-current', 'page');
    page.focus({ preventScroll: true });
    window.scrollTo(0, 0);
    if (p === 'bible')       initBible();
    if (p === 'prayers')     initPrayers();
    if (p === 'saints')      initSaints();
    if (p === 'rosary')      initRosary();
    if (p === 'doctrine')    initDoctrine();
    if (p === 'stations')    initStations();
    if (p === 'examination') initExamination();
    if (p === 'chaplets')    initChaplets();
    if (p === 'credits')     initCredits();
    setTimeout(runReveal, 40);
}

/* ── REVEAL ANIMATIONS ── */
function runReveal() {
    document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 55);
    });
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });

/* ═══ DAILY STREAK ═══ */
function initStreak() {
    const today = new Date().toDateString();
    const last  = localStorage.getItem('lastVisit');
    let streak  = parseInt(localStorage.getItem('streak') || '0');
    if (last !== today) {
        const yest = new Date(Date.now() - 86400000).toDateString();
        streak = (last === yest) ? streak + 1 : 1;
        localStorage.setItem('streak', streak);
        localStorage.setItem('lastVisit', today);
    }
    const countEl = document.getElementById('streak-count');
    if (countEl) countEl.textContent = streak;
    const flameEl = document.getElementById('streak-flame');
    if (flameEl && window.ICONS) flameEl.innerHTML = ICONS.streakFlame(20);
}

/* ═══ PAPAL ARMS & ICONS ═══ */
function renderVisuals() {
    if (!window.ICONS) return;
    // Header compact crossed keys
    const hArms = document.getElementById('header-arms');
    if (hArms) hArms.innerHTML = ICONS.crossedKeys(32);
    // Hero full coat of arms
    const heroArms = document.getElementById('hero-arms');
    if (heroArms) heroArms.innerHTML = ICONS.papalCoatOfArms(54);
    // Quick cards icons
    const qBible = document.getElementById('qc-bible');
    if (qBible) qBible.innerHTML = ICONS.bible(34);
    const qPrayers = document.getElementById('qc-prayers');
    if (qPrayers) qPrayers.innerHTML = ICONS.glorifiedCross(34);
    const qRosary = document.getElementById('qc-rosary');
    if (qRosary) qRosary.innerHTML = ICONS.rosary(34);
    const qSaints = document.getElementById('qc-saints');
    if (qSaints) qSaints.innerHTML = ICONS.lily(34);
    // Devotion heroes
    const pairs = [
        ['rosary-hero-icon',   ICONS.rosary(56)],
        ['doctrine-hero-icon', ICONS.bible(56)],
        ['stations-hero-icon', ICONS.glorifiedCross(56)],
        ['exam-hero-icon',     ICONS.sacredHeart(56)],
        ['chaplets-hero-icon', ICONS.sacredHeart(56)],
        ['credits-hero-icon',  ICONS.crossedKeys(56)],
    ];
    pairs.forEach(([id, svg]) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = svg;
    });
}

/* ═══ SAINT OF THE DAY ═══ */
function displaySaintOfDay() {
    if (!window.SAINTS) return;
    const today = new Date();
    const m = today.getMonth() + 1, d = today.getDate();
    // Try to match today's feast date (saints store feast like "May 10")
    const months = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
    const todayFeastPrefix = `${months[m]} ${d}`;
    let saint = SAINTS.find(s => s.feast && s.feast.startsWith(todayFeastPrefix));
    // Fallback: pick by day-of-year
    if (!saint) {
        const doy = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
        saint = SAINTS[doy % SAINTS.length];
    }
    const nameEl  = document.getElementById('saint-of-day-name');
    const feastEl = document.getElementById('saint-of-day-feast');
    const iconEl  = document.getElementById('saint-of-day-icon');
    if (nameEl)  nameEl.textContent  = saint.n;
    if (feastEl) feastEl.textContent = `${saint.feast} · ${saint.tags[0] || ''}`;
    if (iconEl && window.ICONS) iconEl.innerHTML = ICONS.saintIconForTags(saint.tags);
}

/* ═══ DAILY READINGS ═══ */
function displayDailyReadings() {
    if (!window.Liturgical || !window.getReadingsForDate) return;
    const today = new Date();
    const Lit = window.Liturgical;
    const readings = getReadingsForDate(today);
    const season = Lit.getSeason(today);
    const sundayCycle = Lit.getSundayCycle(today);
    const weekdayCycle = Lit.getWeekdayCycle(today);
    const dow = today.getDay();

    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = today.toLocaleDateString('en-US', opts);

    const metaEl = document.getElementById('readings-meta');
    if (metaEl) {
        metaEl.innerHTML = `
            <span>${dateStr}</span>
            <span class="readings-meta-pill">${season.name}</span>
            <span class="readings-meta-pill">Year ${dow === 0 ? sundayCycle : weekdayCycle}</span>
            <span class="readings-meta-pill"><span class="color-dot color-${season.color}"></span>${season.color[0].toUpperCase() + season.color.slice(1)}</span>`;
    }

    const inject = (id, labelKey, ref, text) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.innerHTML = `<div class="reading-label" data-i18n="${labelKey}">${I18N.t(labelKey)}</div>
            <div class="reading-ref">${ref}</div>
            <div class="reading-text">${text}</div>`;
    };

    if (readings.first)  inject('reading-first',  'firstReading',  readings.first.ref,  readings.first.text);
    if (readings.psalm) {
        const el = document.getElementById('reading-psalm');
        if (el) el.innerHTML = `<div class="reading-label">${I18N.t('psalm')}</div>
            <div class="reading-ref">${readings.psalm.ref}</div>
            <div class="psalm-refrain">${readings.psalm.refrain || ''}</div>`;
    }
    const secondEl = document.getElementById('reading-second');
    if (secondEl) {
        if (readings.second) {
            secondEl.style.display = '';
            inject('reading-second', 'secondReading', readings.second.ref, readings.second.text);
        } else {
            secondEl.style.display = 'none';
        }
    }
    if (readings.gospel) inject('reading-gospel', 'gospel', readings.gospel.ref, readings.gospel.text);
}

/* ═══ LITURGICAL WHEEL ═══ */
function drawLiturgicalWheel() {
    if (!window.Liturgical) return;
    const Lit = window.Liturgical;
    const today = new Date();
    const sundayCycle  = Lit.getSundayCycle(today);
    const weekdayCycle = Lit.getWeekdayCycle(today);
    const season       = Lit.getSeason(today);
    const position     = Lit.getYearPosition(today);

    const setEl = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
    const setHTML = (id, val) => { const e = document.getElementById(id); if (e) e.innerHTML = val; };

    setEl('wheel-cycle', sundayCycle);
    setHTML('lit-season',  `<span class="color-dot color-${season.color}"></span>${season.name}`);
    setEl('lit-sunday',  `Year ${sundayCycle}`);
    setEl('lit-weekday', `Year ${weekdayCycle}`);
    setEl('lit-theme',   season.theme);

    const wheel = document.getElementById('liturgical-wheel-svg');
    if (!wheel) return;

    const segs = [
        { color:'#6B3FA0', p:.075 }, // Advent
        { color:'#E8CC80', p:.050 }, // Christmas
        { color:'#3F8F3F', p:.150 }, // OT-1
        { color:'#5A2E80', p:.115 }, // Lent
        { color:'#8B1A1A', p:.010 }, // Triduum
        { color:'#FFD700', p:.135 }, // Easter
        { color:'#4FA84F', p:.465 }, // OT-2
    ];
    const cx = 65, cy = 65, ro = 60, ri = 38;
    const polar = (ang, r) => {
        const rad = (ang - 90) * Math.PI / 180;
        return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
    };
    let cum = 0, svg = '';
    segs.forEach(s => {
        const a1 = cum * 360, a2 = (cum + s.p) * 360;
        const [x1,y1] = polar(a1,ro), [x2,y2] = polar(a2,ro);
        const [x3,y3] = polar(a2,ri), [x4,y4] = polar(a1,ri);
        const lg = s.p > .5 ? 1 : 0;
        svg += `<path d="M${x1} ${y1} A${ro} ${ro} 0 ${lg} 1 ${x2} ${y2} L${x3} ${y3} A${ri} ${ri} 0 ${lg} 0 ${x4} ${y4}Z" fill="${s.color}" stroke="#FDFAF4" stroke-width="0.8"/>`;
        cum += s.p;
    });
    // Today marker
    const [mx,my] = polar(position.degrees, (ro+ri)/2);
    svg += `<circle cx="${mx}" cy="${my}" r="4.5" fill="#1A1208" stroke="#FFE680" stroke-width="2.5"/>`;
    // Inner circle (white fill for text readability)
    svg += `<circle cx="${cx}" cy="${cy}" r="${ri}" fill="#FDFAF4"/>`;
    wheel.innerHTML = svg;
}

/* ═══ THEME (DARK MODE) ═══ */
function initTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    _applyTheme(saved);
}
function _applyTheme(theme) {
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) { toggle.setAttribute('aria-checked', theme === 'dark'); toggle.classList.toggle('active', theme === 'dark'); }
}
function toggleDarkMode() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    _applyTheme(next);
}

/* ═══ FONT SIZE ═══ */
function initFontSize() {
    const saved = localStorage.getItem('fontSize') || 'medium';
    _applyFontSize(saved);
}
function _applyFontSize(size) {
    document.documentElement.classList.remove('fs-small', 'fs-medium', 'fs-large');
    document.documentElement.classList.add('fs-' + size);
    document.querySelectorAll('.size-pill[data-size]').forEach(p => p.classList.toggle('active', p.dataset.size === size));
}
function setFontSize(size) {
    localStorage.setItem('fontSize', size);
    _applyFontSize(size);
}

/* ═══ REDUCE ANIMATIONS ═══ */
function initReduceAnimations() {
    const on = localStorage.getItem('reduceAnimations') === 'true';
    _applyReduceAnimations(on);
}
function _applyReduceAnimations(on) {
    document.documentElement.classList.toggle('reduce-motion', on);
    const toggle = document.getElementById('reduce-anim-toggle');
    if (toggle) { toggle.setAttribute('aria-checked', on); toggle.classList.toggle('active', on); }
}
function toggleReduceAnimations() {
    const isOn = localStorage.getItem('reduceAnimations') === 'true';
    localStorage.setItem('reduceAnimations', !isOn);
    _applyReduceAnimations(!isOn);
}

/* ═══ LOCATION ═══ */
function initLocationToggle() {
    const on = localStorage.getItem('useLocation') === 'true';
    const toggle = document.getElementById('location-toggle');
    if (toggle) { toggle.setAttribute('aria-checked', on); toggle.classList.toggle('active', on); }
    if (on) {
        const lat = localStorage.getItem('lat'), lon = localStorage.getItem('lon');
        if (lat && lon) _showLocationStatus(lat, lon);
    }
}
function toggleLocation() {
    const isOn = localStorage.getItem('useLocation') === 'true';
    if (isOn) {
        localStorage.setItem('useLocation', 'false');
        localStorage.removeItem('lat'); localStorage.removeItem('lon');
        const toggle = document.getElementById('location-toggle');
        if (toggle) { toggle.setAttribute('aria-checked', 'false'); toggle.classList.remove('active'); }
        const statusEl = document.getElementById('location-status');
        if (statusEl) statusEl.style.display = 'none';
        return;
    }
    if (!navigator.geolocation) { showToast('Geolocation not available'); return; }
    navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude.toFixed(4), lon = pos.coords.longitude.toFixed(4);
        localStorage.setItem('useLocation', 'true');
        localStorage.setItem('lat', lat); localStorage.setItem('lon', lon);
        const toggle = document.getElementById('location-toggle');
        if (toggle) { toggle.setAttribute('aria-checked', 'true'); toggle.classList.add('active'); }
        _showLocationStatus(lat, lon);
        showToast('Location saved ✦');
        displayDailyReadings();
    }, () => showToast('Location access denied — check browser settings'));
}
function _showLocationStatus(lat, lon) {
    const el = document.getElementById('location-status');
    if (!el) return;
    const latDir = parseFloat(lat) >= 0 ? 'N' : 'S', lonDir = parseFloat(lon) >= 0 ? 'E' : 'W';
    el.innerHTML = `✦ ${Math.abs(parseFloat(lat)).toFixed(2)}° ${latDir}, ${Math.abs(parseFloat(lon)).toFixed(2)}° ${lonDir} · Timezone: <strong>${Intl.DateTimeFormat().resolvedOptions().timeZone}</strong>`;
    el.style.display = 'block';
}

/* ═══ READING LAYOUT ═══ */
function initReadingLayout() {
    const saved = localStorage.getItem('readingLayout') || 'full';
    _applyReadingLayout(saved);
}
function _applyReadingLayout(layout) {
    document.body.classList.toggle('reading-compact', layout === 'compact');
    document.querySelectorAll('.size-pill[data-layout]').forEach(p => p.classList.toggle('active', p.dataset.layout === layout));
}
function setReadingLayout(layout) {
    localStorage.setItem('readingLayout', layout);
    _applyReadingLayout(layout);
}

/* ═══ ROSARY GUIDE ═══ */
function toggleRosaryGuide() {
    const isOn = localStorage.getItem('showRosaryGuide') === 'true';
    localStorage.setItem('showRosaryGuide', !isOn);
    const toggle = document.getElementById('rosary-guide-toggle');
    if (toggle) { toggle.setAttribute('aria-checked', !isOn); toggle.classList.toggle('active', !isOn); }
    _rosaryReady = false;
    if (document.getElementById('page-rosary')?.classList.contains('active')) initRosary();
}

/* ═══ ROSARY DEFAULT ═══ */
function setRosaryDefault(val) {
    localStorage.setItem('rosaryDefault', val);
    _rosaryReady = false;
    if (document.getElementById('page-rosary')?.classList.contains('active')) initRosary();
}

/* ═══ SYNC ALL SETTINGS TOGGLES ═══ */
function syncSettingsToggles() {
    _applyTheme(localStorage.getItem('theme') || 'light');
    _applyReduceAnimations(localStorage.getItem('reduceAnimations') === 'true');
    _applyFontSize(localStorage.getItem('fontSize') || 'medium');
    _applyReadingLayout(localStorage.getItem('readingLayout') || 'full');
    initLocationToggle();
    const showGuide = localStorage.getItem('showRosaryGuide') === 'true';
    const guideToggle = document.getElementById('rosary-guide-toggle');
    if (guideToggle) { guideToggle.setAttribute('aria-checked', showGuide); guideToggle.classList.toggle('active', showGuide); }
    const rosarySelect = document.getElementById('rosary-default');
    if (rosarySelect) rosarySelect.value = localStorage.getItem('rosaryDefault') || 'auto';
}

/* ═══ SETTINGS & LANGUAGE ═══ */
function initSettings() {
    const savedName = localStorage.getItem('userName') || '';
    const nameInput = document.getElementById('user-name-input');
    if (nameInput && savedName) nameInput.value = savedName;
    updateHeroName(savedName);
    buildLangPicker();
    I18N.applyAll();
    syncSettingsToggles();
}

function updateHeroName(name) {
    const el = document.getElementById('hero-name');
    if (el) el.textContent = name || 'Friend';
}

function openSettings() {
    document.getElementById('settings-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
    syncSettingsToggles();
    setTimeout(() => { const i = document.getElementById('user-name-input'); if(i) i.focus(); }, 250);
}

function closeSettings() {
    document.getElementById('settings-modal').classList.remove('open');
    document.body.style.overflow = '';
}

function buildLangPicker() {
    const grid = document.getElementById('lang-grid');
    if (!grid || !window.I18N) return;
    const current = I18N.getLanguage();
    grid.innerHTML = I18N.languages.map(lang => `
        <button type="button" class="lang-option${lang.code === current ? ' active' : ''}"
                onclick="setLanguage('${lang.code}')">
            <span class="lang-flag">${lang.flag}</span>
            <span class="lang-name">${lang.name}</span>
        </button>`).join('');
}

function setLanguage(code) {
    I18N.setLanguage(code);
    buildLangPicker();
    // Re-render dynamic content that uses I18N
    displayDailyReadings();
}

function initNameInput() {
    const nameInput = document.getElementById('user-name-input');
    if (!nameInput) return;
    nameInput.addEventListener('input', e => {
        const n = e.target.value.trim();
        localStorage.setItem('userName', n);
        updateHeroName(n);
    });
}

/* ═══ BIBLE ═══ */
let _bibleReady = false, _lastBookBtn = null;
function initBible() {
    if (_bibleReady) return; _bibleReady = true;
    ['ot-grid','nt-grid'].forEach((gid, ti) => {
        const books = ti === 0 ? window.OT : window.NT;
        const grid = document.getElementById(gid);
        books.forEach((b, i) => {
            const d = document.createElement('button');
            d.type = 'button'; d.className = 'book-btn reveal';
            d.style.transitionDelay = (i * 0.018) + 's';
            d.setAttribute('role','listitem');
            d.setAttribute('aria-label', `${b.n}, ${b.c} chapters`);
            d.innerHTML = `<span class="book-label">${b.n}</span><span class="book-ch">${b.c} ch</span>`;
            d.onclick = () => { _lastBookBtn = d; openBook(b.n, b.c); };
            grid.appendChild(d); observer.observe(d);
        });
    });
}
function selTrans(el) {
    document.querySelectorAll('.trans-pill').forEach(x => x.setAttribute('aria-pressed','false'));
    el.setAttribute('aria-pressed','true');
}
function openBook(name, chapters) {
    document.getElementById('bible-list').style.display = 'none';
    const reader = document.getElementById('bible-reader');
    reader.classList.add('open');
    document.getElementById('reader-title').textContent = name;
    const cs = document.getElementById('ch-scroll'); cs.innerHTML = '';
    for (let i = 1; i <= Math.min(chapters, 40); i++) {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'ch-pill';
        if (i === 1) b.setAttribute('aria-current','true');
        b.textContent = i; b.setAttribute('aria-label',`Chapter ${i}`);
        b.onclick = (ch => () => {
            document.querySelectorAll('.ch-pill').forEach(x => x.removeAttribute('aria-current'));
            b.setAttribute('aria-current','true'); loadChapter(name, ch);
        })(i);
        cs.appendChild(b);
    }
    loadChapter(name, 1); reader.focus({ preventScroll: true });
}
function loadChapter(book, ch) {
    const vc = document.getElementById('verse-content');
    const data = window.SAMPLE && window.SAMPLE[book] && window.SAMPLE[book][ch];
    if (data) {
        vc.innerHTML = data.map((v,i) => `<span class="vnum">${i+1}</span><span>${v} </span>`).join('');
    } else {
        vc.innerHTML = `<div style="text-align:center;padding:30px 0;color:var(--text-soft);font-style:italic">
            ${ICONS ? ICONS.bible(40) : '✝'}
            <br><br>${book} · Chapter ${ch}<br>
            <span style="font-size:13px;margin-top:8px;display:block">
            Full text at <a href="https://bible.usccb.org" target="_blank" style="color:var(--gold-deep)">bible.usccb.org</a></span></div>`;
    }
}
function closeBible() {
    document.getElementById('bible-list').style.display = '';
    document.getElementById('bible-reader').classList.remove('open');
    if (_lastBookBtn) _lastBookBtn.focus();
}

/* ═══ PRAYERS ═══ */
let _prayersReady = false;
function initPrayers() {
    if (_prayersReady) return; _prayersReady = true;
    const c = document.getElementById('prayer-container');
    window.PRAYERS.forEach((p, i) => {
        const d = document.createElement('div');
        d.className = 'prayer-card reveal';
        d.style.transitionDelay = (i * 0.02) + 's';
        const bodyId = `pb-${i}`;
        d.innerHTML = `<button type="button" class="prayer-head" aria-expanded="false" aria-controls="${bodyId}">
            <span><span class="prayer-name">${p.name}</span><span class="prayer-latin" lang="la">${p.latin}</span></span>
            <span class="prayer-toggle" aria-hidden="true">▼</span>
        </button>
        <div class="prayer-body" id="${bodyId}">
            <div class="prayer-text">${p.text.replace(/\n/g,'<br><br>')}</div>
        </div>`;
        d.querySelector('.prayer-head').onclick = () => {
            const open = d.classList.toggle('open');
            d.querySelector('.prayer-head').setAttribute('aria-expanded', open);
        };
        c.appendChild(d); observer.observe(d);
    });
}

/* ═══ SAINTS ═══ */
let _saintsReady = false;
function initSaints() {
    if (_saintsReady) return; _saintsReady = true;
    renderSaints(window.SAINTS);
}
function renderSaints(list) {
    const c = document.getElementById('saints-container');
    if (!list.length) { c.innerHTML = `<div class="no-results">No saints found. Try a different name or patronage.</div>`; return; }
    c.innerHTML = list.map((s, i) => {
        const bioId = `sb-${i}`;
        const iconSvg = window.ICONS ? ICONS.saintIconForTags(s.tags) : s.n[0];
        return `<button type="button" class="saint-card reveal" style="transition-delay:${i*0.02}s"
                        aria-expanded="false" aria-controls="${bioId}">
            <div class="saint-top">
                <div class="saint-avatar" aria-hidden="true">${iconSvg}</div>
                <div>
                    <div class="saint-name">${s.n}</div>
                    <div class="saint-feast-text">Feast: ${s.feast}</div>
                    <div class="saint-tags">${s.tags.map(t=>`<span class="s-tag">${t}</span>`).join('')}</div>
                </div>
            </div>
            <div class="saint-bio-wrap" id="${bioId}"><div class="saint-bio">${s.bio}</div></div>
        </button>`;
    }).join('');
    c.querySelectorAll('.saint-card').forEach(card => {
        card.addEventListener('click', () => {
            const open = card.classList.toggle('open');
            card.setAttribute('aria-expanded', open);
        });
        observer.observe(card);
    });
}
function filterSaints(q) {
    const query = q.toLowerCase().trim();
    renderSaints(SAINTS.filter(s =>
        s.n.toLowerCase().includes(query) || s.tags.some(t => t.toLowerCase().includes(query))
    ));
}

/* ═══ ROSARY ═══ */
let _rosaryReady = false;
function initRosary() {
    if (_rosaryReady) return; _rosaryReady = true;
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const todayCode = days[new Date().getDay()];
    const todaySet  = ROSARY.schedule[todayCode];
    const defaultPref = localStorage.getItem('rosaryDefault') || 'auto';
    const activeSet   = defaultPref === 'auto' ? todaySet : defaultPref;

    const banner = document.getElementById('rosary-day-banner');
    if (banner) {
        banner.querySelector('.name').textContent = ROSARY[activeSet].name;
        banner.style.display = defaultPref === 'auto' ? '' : 'none';
    }

    // Prayer guide (optional)
    const showGuide = localStorage.getItem('showRosaryGuide') === 'true';
    let guideEl = document.getElementById('rosary-guide-block');
    if (showGuide && window.ROSARY && ROSARY.guide) {
        if (!guideEl) {
            guideEl = document.createElement('div');
            guideEl.id = 'rosary-guide-block';
            guideEl.className = 'rosary-guide-block reveal';
            const container = document.getElementById('mysteries-container');
            container.parentNode.insertBefore(guideEl, container);
        }
        guideEl.style.display = '';
        guideEl.innerHTML = `
            <div class="rosary-guide-title">${ROSARY.guide.title}</div>
            ${ROSARY.guide.steps.map(s => `
            <div class="rosary-guide-step">
                <div class="rosary-guide-step-num">${s.num}</div>
                <div>
                    <div class="rosary-guide-step-title">${s.title}</div>
                    <div class="rosary-guide-step-text">${s.text}</div>
                </div>
            </div>`).join('')}`;
    } else if (guideEl) {
        guideEl.style.display = 'none';
    }

    const tabsEl = document.getElementById('mystery-tabs');
    const sets = ['joyful','sorrowful','glorious','luminous'];
    const labels = { joyful: 'Joyful', sorrowful: 'Sorrowful', glorious: 'Glorious', luminous: 'Luminous' };
    tabsEl.innerHTML = sets.map(s =>
        `<button type="button" class="mystery-tab" aria-pressed="${s === activeSet}"
             onclick="showMysteries('${s}')">${labels[s]}</button>`).join('');

    showMysteries(activeSet);
}
function showMysteries(set) {
    document.querySelectorAll('#mystery-tabs .mystery-tab').forEach(t => {
        const on = t.getAttribute('onclick').includes(`'${set}'`);
        t.setAttribute('aria-pressed', on);
    });
    const data = ROSARY[set];
    const c = document.getElementById('mysteries-container');
    c.innerHTML = `
        <div class="mystery-set-intro">
            <div class="mystery-set-name">${data.name}</div>
            <div class="mystery-set-latin" lang="la">${data.latin}</div>
            <div class="mystery-set-days">${data.days}</div>
            <div class="mystery-set-text">${data.intro}</div>
        </div>
        ${data.mysteries.map(m => `
        <div class="mystery-card">
            <div class="mystery-card-header">
                <span class="mystery-num">${m.num}</span>
                <div>
                    <div class="mystery-title">${m.title}</div>
                    <div class="mystery-latin" lang="la">${m.latin}</div>
                </div>
            </div>
            <div class="mystery-section">
                <div class="mystery-section-label">${I18N.t('scripture')}</div>
                <div class="mystery-scripture">${m.scripture}</div>
                <div class="mystery-text">${m.reading}</div>
            </div>
            <div class="mystery-section">
                <div class="mystery-section-label">${I18N.t('meditation')}</div>
                <div class="mystery-text">${m.meditation}</div>
            </div>
            <div class="mystery-section">
                <div class="mystery-section-label">${I18N.t('spiritualFruit')}</div>
                <span class="mystery-fruit">${m.fruit}</span>
            </div>
        </div>`).join('')}`;
}

/* ═══ DOCTRINE ═══ */
let _doctrineReady = false;
function initDoctrine() {
    if (_doctrineReady) return; _doctrineReady = true;
    showDoctrine('dogmas');
}
function showDoctrine(tab) {
    document.querySelectorAll('.doctrine-tab').forEach(el =>
        el.setAttribute('aria-pressed', el.dataset.tab === tab));
    const c = document.getElementById('doctrine-container');
    const card = (title, meta, summary, text, ccc) =>
        `<div class="doctrine-card">
            <div class="doctrine-title">${title}</div>
            ${meta ? `<div class="doctrine-meta">${meta}</div>` : ''}
            ${summary ? `<div class="doctrine-summary">${summary}</div>` : ''}
            ${text ? `<div class="doctrine-text">${text}</div>` : ''}
            ${ccc ? `<span class="doctrine-ccc">${ccc}</span>` : ''}
        </div>`;
    if (tab === 'dogmas') {
        c.innerHTML = DOCTRINE.dogmas.map(d =>
            card(d.title, d.year, d.summary, d.text, d.ccc)).join('');
    } else if (tab === 'encyclicals') {
        c.innerHTML = DOCTRINE.encyclicals.map(d =>
            card(`${d.title} — "${d.translated}"`, `${d.pope} · ${d.date}`, d.summary, d.key, '')).join('');
    } else if (tab === 'vaticanII') {
        c.innerHTML = DOCTRINE.vaticanII.map(d =>
            card(`${d.title} — "${d.translated}"`, `${d.type} · ${d.date}`, '', d.key, '')).join('');
    } else {
        c.innerHTML = DOCTRINE.coreDoctrines.map(d => card(d.title, '', '', d.text, '')).join('');
    }
}

/* ═══ STATIONS OF THE CROSS ═══ */
let _stationsReady = false;
function initStations() {
    if (_stationsReady) return; _stationsReady = true;
    const c = document.getElementById('stations-container');
    c.innerHTML = `
        <div class="credits-intro reveal">${STATIONS.intro}</div>
        <div class="readings-card reveal" style="margin:16px 0">
            <div class="reading-label">Instructions</div>
            <div class="reading-text" style="font-style:normal">${STATIONS.instructions || ''}</div>
        </div>
        <div class="readings-card reveal" style="margin-bottom:18px">
            <div class="reading-label" lang="la">Opening Prayer</div>
            <div class="reading-text">${STATIONS.opening.replace(/\n/g,'<br>')}</div>
        </div>
        ${STATIONS.stations.map(s => `
        <div class="station-card${s.optional ? ' optional' : ''} reveal">
            <div class="station-header">
                <div class="station-num-circle">${s.num}</div>
                <div class="station-title">${s.title}${s.optional ? ' <span style="font-size:10px;font-style:italic;color:var(--gold-deep)">(optional)</span>' : ''}</div>
            </div>
            <div style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:.12em;color:var(--red-church);text-transform:uppercase;font-weight:600;margin:10px 0 4px">Versicle</div>
            <div style="font-size:13px;color:var(--text-soft);font-style:italic;margin-bottom:12px">${STATIONS.versicle.replace(/\n/g,'<br>')}</div>
            ${s.scripture ? `<div style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:.12em;color:var(--red-church);text-transform:uppercase;font-weight:600;margin-bottom:4px">Scripture</div>
            <div style="font-size:13.5px;line-height:1.65;color:var(--text-mid);margin-bottom:12px;padding:10px 12px;background:var(--gold-pale);border-left:3px solid var(--gold);border-radius:0 8px 8px 0">${s.scripture}</div>` : ''}
            <div style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:.12em;color:var(--red-church);text-transform:uppercase;font-weight:600;margin-bottom:4px">Meditation</div>
            <div class="station-meditation" style="border-top:none;padding-top:0">${s.meditation}</div>
            ${s.prayer ? `<div style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:.12em;color:var(--gold-deep);text-transform:uppercase;font-weight:600;margin:12px 0 4px">Prayer</div>
            <div style="font-size:14px;line-height:1.7;color:var(--text-mid)">${s.prayer}</div>` : ''}
        </div>`).join('')}
        <div class="readings-card reveal" style="margin-top:8px">
            <div class="reading-label">Closing Prayer</div>
            <div class="reading-text">${STATIONS.closing.replace(/\n/g,'<br>')}</div>
        </div>`;
    c.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ═══ EXAMINATION OF CONSCIENCE ═══ */
let _examReady = false;
function initExamination() {
    if (_examReady) return; _examReady = true;
    const c = document.getElementById('examination-container');
    c.innerHTML = `
        <div class="credits-intro">${EXAMINATION.intro}</div>
        <div class="readings-card reveal" style="margin-bottom:16px">
            <div class="reading-label">Opening Prayer</div>
            <div class="reading-text">${EXAMINATION.opening}</div>
        </div>
        ${EXAMINATION.sections.map((sec, i) => `
        <div class="exam-section reveal" id="exam-sec-${i}">
            <button type="button" class="exam-section-head" onclick="toggleExam(${i})">
                <div class="exam-cmd-num">${sec.commandment}</div>
                <div class="exam-cmd-title">${sec.title}</div>
                <div class="exam-toggle-icon">▼</div>
            </button>
            <div class="exam-questions">
                <div class="exam-questions-inner">
                    ${sec.questions.map(q => `<div class="exam-question">${q}</div>`).join('')}
                </div>
            </div>
        </div>`).join('')}
        <div class="readings-card reveal" style="margin-top:8px">
            <div class="reading-label" style="color:var(--red-church)">Act of Contrition</div>
            <div class="reading-text">${EXAMINATION.actOfContrition}</div>
        </div>`;
    c.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
function toggleExam(i) {
    const sec = document.getElementById(`exam-sec-${i}`);
    if (sec) sec.classList.toggle('open');
}

/* ═══ CHAPLETS ═══ */
let _chapletsReady = false;
function initChaplets() {
    if (_chapletsReady) return; _chapletsReady = true;
    const c = document.getElementById('chaplets-container');
    const iconMap = {
        'divine-mercy': window.ICONS ? ICONS.sacredHeart(42) : '✦',
        'st-michael':   window.ICONS ? ICONS.glorifiedCross(42) : '✦',
        'holy-wounds':  window.ICONS ? ICONS.sacredHeart(42) : '✦',
        'st-jude':      window.ICONS ? ICONS.glorifiedCross(42) : '✦',
    };
    c.innerHTML = CHAPLETS.map((ch, i) => `
        <div class="chaplet-card reveal" id="chap-${i}">
            <button type="button" class="chaplet-head" onclick="toggleChaplet(${i})" aria-expanded="false">
                <div class="chaplet-icon">${iconMap[ch.id] || '✦'}</div>
                <div>
                    <div class="chaplet-name">${ch.name}</div>
                    <div class="chaplet-latin" lang="la">${ch.latin}</div>
                </div>
                <span style="margin-left:auto;font-size:14px;color:var(--gold-border)">▼</span>
            </button>
            <div class="chaplet-body">
                <div class="chaplet-body-inner">
                    <div class="chaplet-section">
                        <div class="chaplet-section-label">Origin</div>
                        <div class="chaplet-text">${ch.origin}</div>
                    </div>
                    <div class="chaplet-section">
                        <div class="chaplet-section-label">Opening</div>
                        <div class="chaplet-text">${ch.opening.replace(/\n/g,'<br><br>')}</div>
                    </div>
                    <div class="chaplet-section">
                        <div class="chaplet-section-label">Prayers</div>
                        ${ch.prayers.map(p => `
                        <div class="chaplet-prayer-block">
                            <div class="chaplet-prayer-label">${p.label}</div>
                            <div class="chaplet-prayer-text">${p.text}</div>
                        </div>`).join('')}
                    </div>
                    <div class="chaplet-section">
                        <div class="chaplet-section-label">Closing</div>
                        <div class="chaplet-text">${ch.closing.replace(/\n/g,'<br><br>')}</div>
                    </div>
                </div>
            </div>
        </div>`).join('');
    c.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
function toggleChaplet(i) {
    const card = document.getElementById(`chap-${i}`);
    if (!card) return;
    const open = card.classList.toggle('open');
    card.querySelector('.chaplet-head').setAttribute('aria-expanded', open);
}

/* ═══ CREDITS ═══ */
let _creditsReady = false;
function initCredits() {
    if (_creditsReady) return; _creditsReady = true;
    const c = document.getElementById('credits-container');
    c.innerHTML = `
        <div class="credits-intro reveal">${CREDITS.intro}</div>
        ${CREDITS.sections.map(sec => `
        <div class="credits-section reveal">
            <div class="credits-heading">${sec.heading}</div>
            ${sec.items.map(item => `
            <div class="credits-item">
                <div class="credits-label">${item.label}</div>
                <div class="credits-detail">${item.detail}</div>
            </div>`).join('')}
        </div>`).join('')}
        <div class="credits-closing reveal">${CREDITS.closing}</div>`;
    c.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ═══ FIDES AI ═══ */
const chatHistory = [];
function addMsg(role, text) {
    const wrap = document.getElementById('chat-msgs');
    const d = document.createElement('div');
    d.className = `msg msg-${role === 'user' ? 'user' : 'ai'}`;
    d.innerHTML = `<div class="msg-sender">${role === 'user' ? 'You' : 'Fides AI ✦'}</div>${text.replace(/\n/g,'<br>')}`;
    wrap.appendChild(d); wrap.scrollTop = wrap.scrollHeight;
}
function showTyping() {
    const wrap = document.getElementById('chat-msgs');
    const d = document.createElement('div');
    d.className = 'msg msg-ai'; d.id = 'typing-dot';
    d.innerHTML = `<div class="msg-sender">Fides AI ✦</div><div class="typing"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
    wrap.appendChild(d); wrap.scrollTop = wrap.scrollHeight;
}
function askSugg(btn) {
    document.getElementById('sugg-grid').style.display = 'none';
    document.getElementById('chat-in').value = btn.textContent;
    sendMsg();
}
async function sendMsg() {
    const inp = document.getElementById('chat-in');
    const txt = inp.value.trim(); if (!txt) return;
    inp.value = '';
    document.getElementById('sugg-grid').style.display = 'none';
    document.getElementById('send-btn').disabled = true;
    addMsg('user', txt);
    chatHistory.push({ role: 'user', content: txt });
    showTyping();
    try {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514', max_tokens: 1000,
                system: 'You are Fides, a devout and knowledgeable Catholic AI companion inside an app called "Deus in Aeternum." Answer questions about Catholic faith, theology, Scripture (all 73 books), sacraments, saints, Church teaching, prayer, and history. Respond warmly, faithfully, and with depth. Cite Scripture with book and verse. Draw from the Catechism and Church tradition. End responses with a short Latin blessing when fitting.',
                messages: chatHistory
            })
        });
        const data = await res.json();
        document.getElementById('typing-dot')?.remove();
        const reply = data.content[0].text;
        chatHistory.push({ role: 'assistant', content: reply });
        addMsg('assistant', reply);
    } catch {
        document.getElementById('typing-dot')?.remove();
        addMsg('assistant', 'Forgive me — a connection issue occurred. Please try again.\n\nPax et bonum.');
    }
    document.getElementById('send-btn').disabled = false;
    inp.focus();
}

/* ═══ SETTINGS MODAL ═══ */
function initSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeSettings(); });
}

/* ═══ STARTUP ═══ */
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved display prefs before rendering anything
    initTheme();
    initFontSize();
    initReduceAnimations();
    initReadingLayout();

    // Core content
    initStreak();
    renderVisuals();
    displaySaintOfDay();
    displayDailyReadings();
    drawLiturgicalWheel();
    initSettings();
    initNameInput();
    initSettingsModal();

    // Animate home reveals
    document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => observer.observe(el));
    setTimeout(runReveal, 100);
});
