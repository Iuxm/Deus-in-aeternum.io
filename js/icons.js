/* ═══════════════════════════════════════════════════════════════
   SVG ICON & ART LIBRARY
   Custom-drawn SVG illustrations for Catholic visual elements.
   All SVGs are original works inspired by traditional Catholic
   heraldry and iconography (papal coat of arms, chalice, dove of
   the Holy Spirit, Marian lily, etc.). Public-domain heraldic
   symbols are reproduced in stylized form.
   ═══════════════════════════════════════════════════════════════ */

const ICONS = {

    /* ── PAPAL COAT OF ARMS / HOLY SEE EMBLEM ─────────────────────
       The crossed keys of St. Peter (gold and silver) surmounted
       by the papal tiara — the heraldic symbol of the Holy See.
       Stylized SVG drawing in our gold/red palette. */
    papalCoatOfArms: (size = 64) => `<svg viewBox="0 0 100 120" width="${size}" height="${size * 1.2}" xmlns="http://www.w3.org/2000/svg" aria-label="Holy See coat of arms" role="img">
        <defs>
            <linearGradient id="goldKey" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FFE680"/>
                <stop offset="50%" stop-color="#D4A930"/>
                <stop offset="100%" stop-color="#8B6508"/>
            </linearGradient>
            <linearGradient id="silverKey" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F5F5F5"/>
                <stop offset="50%" stop-color="#C0C0C0"/>
                <stop offset="100%" stop-color="#808080"/>
            </linearGradient>
            <linearGradient id="tiaraGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FFE680"/>
                <stop offset="100%" stop-color="#B8860B"/>
            </linearGradient>
        </defs>
        <!-- Crossed keys behind shield area -->
        <g transform="translate(50,70)">
            <!-- Silver key (temporal authority) - crosses left -->
            <g transform="rotate(-30)">
                <circle cx="0" cy="-22" r="9" fill="none" stroke="url(#silverKey)" stroke-width="3.5"/>
                <rect x="-1.5" y="-13" width="3" height="32" fill="url(#silverKey)"/>
                <rect x="-1.5" y="13" width="9" height="3" fill="url(#silverKey)"/>
                <rect x="-1.5" y="17" width="6" height="3" fill="url(#silverKey)"/>
            </g>
            <!-- Gold key (spiritual authority) - crosses right -->
            <g transform="rotate(30)">
                <circle cx="0" cy="-22" r="9" fill="none" stroke="url(#goldKey)" stroke-width="3.5"/>
                <rect x="-1.5" y="-13" width="3" height="32" fill="url(#goldKey)"/>
                <rect x="-1.5" y="13" width="9" height="3" fill="url(#goldKey)"/>
                <rect x="-1.5" y="17" width="6" height="3" fill="url(#goldKey)"/>
            </g>
            <!-- Red cord wrapping the keys -->
            <path d="M -8 -8 Q 0 -14 8 -8" stroke="#8B1A1A" stroke-width="2" fill="none"/>
            <circle cx="-12" cy="-3" r="2" fill="#8B1A1A"/>
            <circle cx="12" cy="-3" r="2" fill="#8B1A1A"/>
        </g>
        <!-- Papal tiara (triple crown) on top -->
        <g transform="translate(50,30)">
            <!-- Base -->
            <path d="M -22 8 L -22 -2 L 22 -2 L 22 8 Z" fill="url(#tiaraGold)" stroke="#8B6508" stroke-width="0.5"/>
            <!-- First (lowest) crown ring -->
            <ellipse cx="0" cy="-2" rx="22" ry="3" fill="url(#tiaraGold)" stroke="#8B6508" stroke-width="0.5"/>
            <!-- Mid section -->
            <path d="M -19 -2 L -19 -10 L 19 -10 L 19 -2 Z" fill="url(#tiaraGold)" stroke="#8B6508" stroke-width="0.5"/>
            <!-- Second crown ring -->
            <ellipse cx="0" cy="-10" rx="19" ry="2.5" fill="url(#tiaraGold)" stroke="#8B6508" stroke-width="0.5"/>
            <!-- Upper section -->
            <path d="M -16 -10 L -16 -18 L 16 -18 L 16 -10 Z" fill="url(#tiaraGold)" stroke="#8B6508" stroke-width="0.5"/>
            <!-- Third crown ring (top) -->
            <ellipse cx="0" cy="-18" rx="16" ry="2" fill="url(#tiaraGold)" stroke="#8B6508" stroke-width="0.5"/>
            <!-- Mound/orb at top -->
            <circle cx="0" cy="-22" r="3" fill="url(#tiaraGold)" stroke="#8B6508" stroke-width="0.5"/>
            <!-- Cross atop the orb -->
            <rect x="-0.6" y="-30" width="1.2" height="6" fill="#8B6508"/>
            <rect x="-2.5" y="-27" width="5" height="1.2" fill="#8B6508"/>
            <!-- Lappets (two ribbon strips hanging) -->
            <path d="M -16 8 L -18 28 L -14 28 L -12 8 Z" fill="#8B1A1A"/>
            <path d="M 16 8 L 18 28 L 14 28 L 12 8 Z" fill="#8B1A1A"/>
            <!-- Gold cross on each lappet -->
            <g fill="#FFE680">
                <rect x="-16.5" y="14" width="1" height="4"/>
                <rect x="-17.5" y="15.5" width="3" height="1"/>
                <rect x="15.5" y="14" width="1" height="4"/>
                <rect x="14.5" y="15.5" width="3" height="1"/>
            </g>
        </g>
    </svg>`,

    /* Compact version for header (just the keys, no tiara) */
    crossedKeys: (size = 28) => `<svg viewBox="0 0 50 50" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <linearGradient id="gKey${size}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FFE680"/>
                <stop offset="100%" stop-color="#8B6508"/>
            </linearGradient>
            <linearGradient id="sKey${size}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#F5F5F5"/>
                <stop offset="100%" stop-color="#808080"/>
            </linearGradient>
        </defs>
        <g transform="translate(25,28)">
            <g transform="rotate(-30)">
                <circle cx="0" cy="-12" r="5" fill="none" stroke="url(#sKey${size})" stroke-width="2"/>
                <rect x="-1" y="-7" width="2" height="18" fill="url(#sKey${size})"/>
                <rect x="-1" y="7" width="5" height="2" fill="url(#sKey${size})"/>
            </g>
            <g transform="rotate(30)">
                <circle cx="0" cy="-12" r="5" fill="none" stroke="url(#gKey${size})" stroke-width="2"/>
                <rect x="-1" y="-7" width="2" height="18" fill="url(#gKey${size})"/>
                <rect x="-1" y="7" width="5" height="2" fill="url(#gKey${size})"/>
            </g>
        </g>
    </svg>`,

    /* ── DOVE OF THE HOLY SPIRIT ── */
    dove: (size = 48) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <radialGradient id="halo${size}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#FFE680" stop-opacity="0.6"/>
                <stop offset="70%" stop-color="#FFE680" stop-opacity="0.1"/>
                <stop offset="100%" stop-color="#FFE680" stop-opacity="0"/>
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="url(#halo${size})"/>
        <!-- Rays of glory -->
        <g stroke="#D4A930" stroke-width="1.2" opacity="0.6">
            <line x1="50" y1="6" x2="50" y2="14"/>
            <line x1="14" y1="50" x2="22" y2="50"/>
            <line x1="86" y1="50" x2="78" y2="50"/>
            <line x1="50" y1="86" x2="50" y2="94"/>
            <line x1="22" y1="22" x2="28" y2="28"/>
            <line x1="78" y1="22" x2="72" y2="28"/>
            <line x1="22" y1="78" x2="28" y2="72"/>
            <line x1="78" y1="78" x2="72" y2="72"/>
        </g>
        <!-- Dove body -->
        <ellipse cx="50" cy="55" rx="14" ry="10" fill="#FFFFFF" stroke="#D4A930" stroke-width="1"/>
        <!-- Dove head -->
        <circle cx="62" cy="48" r="6" fill="#FFFFFF" stroke="#D4A930" stroke-width="1"/>
        <!-- Beak -->
        <path d="M 68 48 L 73 47 L 68 50 Z" fill="#D4A930"/>
        <!-- Eye -->
        <circle cx="63" cy="47" r="0.8" fill="#1A1208"/>
        <!-- Wings spread upward -->
        <path d="M 38 50 Q 30 30 45 38 Q 40 45 38 50 Z" fill="#FFFFFF" stroke="#D4A930" stroke-width="1"/>
        <path d="M 50 48 Q 50 28 60 35 Q 55 42 50 48 Z" fill="#FFFFFF" stroke="#D4A930" stroke-width="1"/>
        <!-- Tail feathers -->
        <path d="M 36 56 L 28 60 L 30 56 L 26 58 L 36 53 Z" fill="#FFFFFF" stroke="#D4A930" stroke-width="0.8"/>
    </svg>`,

    /* ── CHALICE & HOST (Eucharist) ── */
    chalice: (size = 48) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <linearGradient id="chal${size}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FFE680"/>
                <stop offset="50%" stop-color="#D4A930"/>
                <stop offset="100%" stop-color="#8B6508"/>
            </linearGradient>
        </defs>
        <!-- Host (round wafer) -->
        <circle cx="50" cy="22" r="14" fill="#FDFAF4" stroke="#D4A930" stroke-width="1.5"/>
        <!-- IHS on host -->
        <text x="50" y="27" text-anchor="middle" font-family="Cinzel, serif" font-size="9" fill="#8B6508" font-weight="700">IHS</text>
        <!-- Cup of chalice -->
        <path d="M 30 35 Q 30 55 50 60 Q 70 55 70 35 Z" fill="url(#chal${size})" stroke="#8B6508" stroke-width="1"/>
        <!-- Stem -->
        <rect x="46" y="60" width="8" height="18" fill="url(#chal${size})" stroke="#8B6508" stroke-width="0.5"/>
        <!-- Node on stem -->
        <ellipse cx="50" cy="68" rx="6" ry="3" fill="url(#chal${size})" stroke="#8B6508" stroke-width="0.5"/>
        <!-- Base -->
        <ellipse cx="50" cy="84" rx="14" ry="3" fill="url(#chal${size})" stroke="#8B6508" stroke-width="0.5"/>
        <path d="M 36 84 L 38 80 L 62 80 L 64 84 Z" fill="url(#chal${size})" stroke="#8B6508" stroke-width="0.5"/>
    </svg>`,

    /* ── MARIAN LILY (purity, Mary) ── */
    lily: (size = 48) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Stem -->
        <path d="M 50 90 Q 48 60 50 30" stroke="#3F8F3F" stroke-width="2" fill="none"/>
        <!-- Leaves -->
        <path d="M 50 70 Q 35 65 32 75 Q 42 73 50 70" fill="#3F8F3F"/>
        <path d="M 50 60 Q 65 55 68 65 Q 58 63 50 60" fill="#3F8F3F"/>
        <!-- Flower petals -->
        <g transform="translate(50,30)">
            <ellipse cx="0" cy="-10" rx="6" ry="14" fill="#FFFFFF" stroke="#D4A930" stroke-width="0.8"/>
            <ellipse cx="-9" cy="-3" rx="6" ry="14" fill="#FFFFFF" stroke="#D4A930" stroke-width="0.8" transform="rotate(-45)"/>
            <ellipse cx="9" cy="-3" rx="6" ry="14" fill="#FFFFFF" stroke="#D4A930" stroke-width="0.8" transform="rotate(45)"/>
            <ellipse cx="-12" cy="6" rx="5" ry="11" fill="#FDFAF4" stroke="#D4A930" stroke-width="0.6" transform="rotate(-75)"/>
            <ellipse cx="12" cy="6" rx="5" ry="11" fill="#FDFAF4" stroke="#D4A930" stroke-width="0.6" transform="rotate(75)"/>
            <!-- Center stamen -->
            <circle cx="0" cy="-2" r="2" fill="#D4A930"/>
            <line x1="0" y1="-3" x2="-2" y2="-7" stroke="#D4A930" stroke-width="0.8"/>
            <line x1="0" y1="-3" x2="2" y2="-7" stroke="#D4A930" stroke-width="0.8"/>
            <line x1="0" y1="-3" x2="0" y2="-8" stroke="#D4A930" stroke-width="0.8"/>
        </g>
    </svg>`,

    /* ── SACRED HEART ── */
    sacredHeart: (size = 48) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <radialGradient id="heart${size}" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stop-color="#E84545"/>
                <stop offset="100%" stop-color="#8B1A1A"/>
            </radialGradient>
        </defs>
        <!-- Rays of glory -->
        <g stroke="#D4A930" stroke-width="1" opacity="0.5">
            <line x1="50" y1="10" x2="50" y2="20"/>
            <line x1="20" y1="20" x2="28" y2="26"/>
            <line x1="80" y1="20" x2="72" y2="26"/>
            <line x1="10" y1="50" x2="20" y2="50"/>
            <line x1="90" y1="50" x2="80" y2="50"/>
        </g>
        <!-- Heart shape -->
        <path d="M 50 80 C 50 80 20 60 20 40 C 20 28 30 22 38 22 C 44 22 48 26 50 30 C 52 26 56 22 62 22 C 70 22 80 28 80 40 C 80 60 50 80 50 80 Z" fill="url(#heart${size})" stroke="#5A0E0E" stroke-width="1"/>
        <!-- Crown of thorns -->
        <ellipse cx="50" cy="42" rx="32" ry="6" fill="none" stroke="#3F2A14" stroke-width="1.2"/>
        <g stroke="#3F2A14" stroke-width="0.8" fill="none">
            <path d="M 22 42 L 19 38"/>
            <path d="M 30 39 L 27 35"/>
            <path d="M 40 38 L 38 34"/>
            <path d="M 50 38 L 50 34"/>
            <path d="M 60 38 L 62 34"/>
            <path d="M 70 39 L 73 35"/>
            <path d="M 78 42 L 81 38"/>
        </g>
        <!-- Cross emerging from top -->
        <rect x="48.5" y="14" width="3" height="14" fill="#D4A930"/>
        <rect x="44" y="18" width="12" height="3" fill="#D4A930"/>
        <!-- Flames at top of heart -->
        <path d="M 47 22 Q 48 16 50 18 Q 52 16 53 22 Z" fill="#FFC020"/>
        <!-- Wound on heart -->
        <path d="M 46 50 Q 48 52 50 50 Q 52 52 50 56 Q 48 52 46 50 Z" fill="#5A0E0E"/>
        <!-- Drops of blood -->
        <ellipse cx="50" cy="62" rx="1.5" ry="2.5" fill="#5A0E0E"/>
    </svg>`,

    /* ── CROSS WITH RAYS (Glory Cross) ── */
    glorifiedCross: (size = 48) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <radialGradient id="rays${size}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#FFE680" stop-opacity="0.7"/>
                <stop offset="100%" stop-color="#FFE680" stop-opacity="0"/>
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="url(#rays${size})"/>
        <!-- 12 rays -->
        <g stroke="#D4A930" stroke-width="1.2" opacity="0.7">
            <line x1="50" y1="2" x2="50" y2="20"/>
            <line x1="50" y1="80" x2="50" y2="98"/>
            <line x1="2" y1="50" x2="20" y2="50"/>
            <line x1="80" y1="50" x2="98" y2="50"/>
            <line x1="14" y1="14" x2="26" y2="26"/>
            <line x1="86" y1="14" x2="74" y2="26"/>
            <line x1="14" y1="86" x2="26" y2="74"/>
            <line x1="86" y1="86" x2="74" y2="74"/>
        </g>
        <!-- Cross -->
        <rect x="46" y="22" width="8" height="56" fill="#D4A930" stroke="#8B6508" stroke-width="0.5"/>
        <rect x="30" y="36" width="40" height="8" fill="#D4A930" stroke="#8B6508" stroke-width="0.5"/>
        <!-- Decorative ends (Latin cross style) -->
        <rect x="44" y="20" width="12" height="3" fill="#FFE680"/>
        <rect x="44" y="77" width="12" height="3" fill="#FFE680"/>
        <rect x="28" y="34" width="3" height="12" fill="#FFE680"/>
        <rect x="69" y="34" width="3" height="12" fill="#FFE680"/>
    </svg>`,

    /* ── ROSARY ── */
    rosary: (size = 48) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Cross at bottom -->
        <g transform="translate(50,82)">
            <rect x="-1.5" y="-8" width="3" height="14" fill="#8B6508"/>
            <rect x="-5" y="-3" width="10" height="3" fill="#8B6508"/>
        </g>
        <!-- Connecting line/bead -->
        <circle cx="50" cy="68" r="2" fill="#D4A930"/>
        <line x1="50" y1="70" x2="50" y2="73" stroke="#8B6508" stroke-width="0.6"/>
        <!-- Decade beads in circle -->
        <g fill="#D4A930" stroke="#8B6508" stroke-width="0.5">
            <circle cx="50" cy="20" r="2"/>
            <circle cx="62" cy="22" r="2"/>
            <circle cx="72" cy="28" r="2"/>
            <circle cx="80" cy="38" r="2"/>
            <circle cx="82" cy="50" r="2"/>
            <circle cx="80" cy="60" r="2"/>
            <circle cx="68" cy="66" r="2"/>
            <circle cx="56" cy="68" r="2"/>
            <circle cx="44" cy="68" r="2"/>
            <circle cx="32" cy="66" r="2"/>
            <circle cx="20" cy="60" r="2"/>
            <circle cx="18" cy="50" r="2"/>
            <circle cx="20" cy="38" r="2"/>
            <circle cx="28" cy="28" r="2"/>
            <circle cx="38" cy="22" r="2"/>
        </g>
        <!-- String connecting beads -->
        <ellipse cx="50" cy="44" rx="32" ry="24" fill="none" stroke="#8B6508" stroke-width="0.6"/>
    </svg>`,

    /* ── BIBLE / OPEN BOOK ── */
    bible: (size = 48) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <linearGradient id="page${size}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FDFAF4"/>
                <stop offset="100%" stop-color="#EDE4CE"/>
            </linearGradient>
        </defs>
        <!-- Left page -->
        <path d="M 10 25 L 50 30 L 50 80 L 10 75 Z" fill="url(#page${size})" stroke="#8B6508" stroke-width="0.8"/>
        <!-- Right page -->
        <path d="M 90 25 L 50 30 L 50 80 L 90 75 Z" fill="url(#page${size})" stroke="#8B6508" stroke-width="0.8"/>
        <!-- Spine -->
        <line x1="50" y1="30" x2="50" y2="80" stroke="#8B6508" stroke-width="1"/>
        <!-- Text lines on left page -->
        <g stroke="#A89060" stroke-width="0.4" opacity="0.7">
            <line x1="15" y1="38" x2="46" y2="40"/>
            <line x1="15" y1="44" x2="46" y2="46"/>
            <line x1="15" y1="50" x2="46" y2="52"/>
            <line x1="15" y1="56" x2="46" y2="58"/>
            <line x1="15" y1="62" x2="46" y2="64"/>
            <line x1="15" y1="68" x2="46" y2="70"/>
        </g>
        <!-- Text lines on right page -->
        <g stroke="#A89060" stroke-width="0.4" opacity="0.7">
            <line x1="54" y1="40" x2="85" y2="38"/>
            <line x1="54" y1="46" x2="85" y2="44"/>
            <line x1="54" y1="52" x2="85" y2="50"/>
            <line x1="54" y1="58" x2="85" y2="56"/>
            <line x1="54" y1="64" x2="85" y2="62"/>
            <line x1="54" y1="70" x2="85" y2="68"/>
        </g>
        <!-- Cross/bookmark in middle -->
        <rect x="49" y="20" width="2" height="14" fill="#8B1A1A"/>
        <rect x="46" y="24" width="8" height="2" fill="#8B1A1A"/>
        <!-- Ribbon -->
        <path d="M 50 78 L 48 90 L 52 90 Z" fill="#8B1A1A"/>
    </svg>`,

    /* ── FLAME (Holy Spirit / Pentecost) ── */
    flame: (size = 32) => `<svg viewBox="0 0 50 60" width="${size}" height="${size * 1.2}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <linearGradient id="fl${size}" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stop-color="#FFE680"/>
                <stop offset="50%" stop-color="#FF8C20"/>
                <stop offset="100%" stop-color="#E84545"/>
            </linearGradient>
        </defs>
        <path d="M 25 55 Q 10 40 18 25 Q 22 30 22 22 Q 22 10 30 5 Q 28 18 32 22 Q 35 18 38 22 Q 42 35 36 45 Q 32 52 25 55 Z" fill="url(#fl${size})" stroke="#8B1A1A" stroke-width="0.4"/>
    </svg>`,

    /* ── STREAK FIRE ── */
    streakFlame: (size = 24) => `<svg viewBox="0 0 30 36" width="${size}" height="${size * 1.2}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <linearGradient id="sf${size}" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stop-color="#FFE680"/>
                <stop offset="60%" stop-color="#FF8C20"/>
                <stop offset="100%" stop-color="#D4A930"/>
            </linearGradient>
        </defs>
        <path d="M 15 33 Q 5 24 11 14 Q 13 18 14 13 Q 14 5 18 2 Q 17 11 20 14 Q 22 11 24 14 Q 27 22 22 28 Q 19 31 15 33 Z" fill="url(#sf${size})"/>
    </svg>`,

    /* ── STAR (Marian / Star of Bethlehem) ── */
    marianStar: (size = 32) => `<svg viewBox="0 0 50 50" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M 25 4 L 30 18 L 45 19 L 33 28 L 38 43 L 25 34 L 12 43 L 17 28 L 5 19 L 20 18 Z" fill="#D4A930" stroke="#8B6508" stroke-width="0.6"/>
    </svg>`,

    /* Get a saint icon based on tag */
    saintIconForTags: (tags = []) => {
        const t = tags.map(x => x.toLowerCase());
        if (t.some(x => x.includes('marian') || x.includes('mary'))) return ICONS.lily(40);
        if (t.includes('martyr')) return ICONS.glorifiedCross(40);
        if (t.includes('apostle')) return ICONS.bible(40);
        if (t.includes('archangel')) return ICONS.dove(40);
        if (t.includes('pope')) return ICONS.crossedKeys(40);
        if (t.includes('doctor')) return ICONS.bible(40);
        if (t.includes('mystic') || t.includes('stigmatist')) return ICONS.sacredHeart(40);
        return ICONS.glorifiedCross(40);
    }
};

if (typeof window !== 'undefined') window.ICONS = ICONS;
