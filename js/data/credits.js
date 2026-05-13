/* ═══════════════════════════════════════════════════════════════
   CREDITS & SOURCES
   Comprehensive attribution for all content used in the app.
   We are committed to honoring the sources of Catholic tradition.
   ═══════════════════════════════════════════════════════════════ */

const CREDITS = {
    intro: 'Deus in Aeternum draws on the public patrimony of the Catholic Church and on resources made freely available by the Holy See, the United States Conference of Catholic Bishops, and other authoritative bodies. The app is offered as a free study companion. We make no claim of ownership over the texts of Scripture, the Catechism, or papal documents — these belong to the Church and to all the faithful.',

    sections: [
        {
            heading: 'Sacred Scripture',
            items: [
                { label: 'Catholic Biblical Canon', detail: 'Defined at the Council of Rome (382 AD), reaffirmed at the Councils of Florence (1442), Trent (1546), and Vatican I (1870). All 73 books — 46 Old Testament (including the deuterocanonical books) and 27 New Testament.' },
                { label: 'Sample Passages', detail: 'Excerpts shown in the Bible reader are from translations in the public domain or summarized for study. For complete authoritative Catholic translations, consult the New American Bible (NAB), Revised Standard Version Catholic Edition (RSV-CE), Douay-Rheims, or New Jerusalem Bible.' },
                { label: 'Suggested Reading', detail: 'For the complete Catholic Bible online, see https://bible.usccb.org (NAB) or https://www.drbo.org (Douay-Rheims).' }
            ]
        },
        {
            heading: 'Daily Mass Readings',
            items: [
                { label: 'Lectionary for Mass', detail: 'The structure and citations follow the Lectionary for Mass (US edition), promulgated by the Congregation for Divine Worship and approved by the United States Conference of Catholic Bishops.' },
                { label: 'Sunday Cycle', detail: 'Three-year cycle (Years A, B, C) — Year A reads primarily Matthew, Year B Mark, Year C Luke, with John during Easter season and certain feasts.' },
                { label: 'Weekday Cycle', detail: 'Two-year cycle (Years I and II) — Year I in odd-numbered calendar years, Year II in even-numbered years.' },
                { label: 'Authoritative Source', detail: 'For the precise daily readings, always defer to the USCCB website at https://bible.usccb.org/daily-bible-reading or your local diocese.' }
            ]
        },
        {
            heading: 'Liturgical Calendar',
            items: [
                { label: 'General Roman Calendar', detail: 'Promulgated by Pope Paul VI in Mysterii Paschalis (1969) and revised by subsequent decrees of the Holy See.' },
                { label: 'Universal Norms on the Liturgical Year and the Calendar', detail: 'The official document governing the structure of the liturgical year.' },
                { label: 'Computus Algorithm', detail: 'Easter date calculated using the Anonymous Gregorian algorithm — the standard method used by the Catholic Church since the Gregorian calendar reform of 1582.' }
            ]
        },
        {
            heading: 'Catholic Doctrine',
            items: [
                { label: 'Catechism of the Catholic Church (CCC)', detail: 'Promulgated by Pope St. John Paul II in Fidei Depositum (October 11, 1992); revised edition 1997. Available in full at https://www.vatican.va/archive/ENG0015/_INDEX.HTM' },
                { label: 'Documents of the Second Vatican Council', detail: 'The four constitutions, nine decrees, and three declarations of Vatican II (1962-1965). Public texts available at https://www.vatican.va/archive/hist_councils/ii_vatican_council/' },
                { label: 'Papal Encyclicals', detail: 'All summaries are based on the original encyclicals as published by the Holy See. Original texts in Latin and major languages at https://www.vatican.va/content/vatican/en/holy-father.html' },
                { label: 'Defined Dogmas', detail: 'Reflect the solemn definitions of ecumenical councils and ex cathedra papal pronouncements (e.g., Pius IX\'s Ineffabilis Deus 1854, Vatican I\'s Pastor Aeternus 1870, Pius XII\'s Munificentissimus Deus 1950).' }
            ]
        },
        {
            heading: 'Prayers',
            items: [
                { label: 'Traditional Prayers', detail: 'The Sign of the Cross, Our Father, Hail Mary, Glory Be, Apostles\' Creed, Hail Holy Queen, Memorare, Anima Christi, and other classical prayers are part of the universal patrimony of the Church.' },
                { label: 'Latin Prayers', detail: 'Latin titles and texts follow the Roman Missal (Missale Romanum) and traditional liturgical books.' },
                { label: 'Modern Prayers', detail: 'Prayers attributed to specific saints (St. Faustina, St. Ignatius, etc.) are public-domain compositions of those saints, freely circulated by the Church.' }
            ]
        },
        {
            heading: 'The Holy Rosary',
            items: [
                { label: 'Joyful, Sorrowful, and Glorious Mysteries', detail: 'Traditional structure dating to the Middle Ages, formalized by Pope St. Pius V in Consueverunt Romani Pontifices (1569).' },
                { label: 'Luminous Mysteries (Mysteries of Light)', detail: 'Added by Pope St. John Paul II in his apostolic letter Rosarium Virginis Mariae (October 16, 2002).' },
                { label: 'Meditations', detail: 'The meditations provided draw on the writings of the Fathers and Doctors of the Church, particularly St. Louis de Montfort (True Devotion to Mary), St. Alphonsus Liguori (The Glories of Mary), and Pope St. John Paul II.' }
            ]
        },
        {
            heading: 'Saints',
            items: [
                { label: 'Hagiography Sources', detail: 'Biographies are drawn from the Roman Martyrology (Martyrologium Romanum), Butler\'s Lives of the Saints, and the official biographies in canonization decrees from the Congregation for the Causes of Saints.' },
                { label: 'Feast Days', detail: 'Follow the General Roman Calendar with US adaptations approved by the USCCB.' },
                { label: 'Note on Living Saints', detail: 'All saints listed have been canonized (officially declared saints) by the Catholic Church. The list is not exhaustive — the Church recognizes many thousands of canonized saints.' }
            ]
        },
        {
            heading: 'Devotions',
            items: [
                { label: 'Stations of the Cross', detail: 'Traditional fourteen Stations attributed to St. Francis of Assisi and codified in their present form by St. Leonard of Port Maurice. The optional fifteenth station (Resurrection) was added in modern revisions.' },
                { label: 'Examination of Conscience', detail: 'Structure based on the Ten Commandments and the precepts of the Church, drawing on traditional Catholic moral catechesis (cf. CCC §1846-1876).' },
                { label: 'Chaplet of Divine Mercy', detail: 'Given by Our Lord to St. Faustina Kowalska (1905-1938), recorded in her Diary. Approved for universal devotion by Pope St. John Paul II.' },
                { label: 'Other Chaplets', detail: 'St. Michael (Antonia d\'Astonac, 18th c.), Holy Wounds (Sr. Marie Martha Chambon, 19th c.), St. Jude (traditional).' }
            ]
        },
        {
            heading: 'Visual Design',
            items: [
                { label: 'Original SVG Illustrations', detail: 'All icons and visual elements (papal coat of arms, dove, chalice, lily, Sacred Heart, etc.) are original SVG drawings created for this app, inspired by traditional Catholic heraldry and iconography.' },
                { label: 'Heraldic Symbols', detail: 'The crossed keys of St. Peter and the papal tiara are part of the public heraldic patrimony of the Church and are used throughout the world to represent the Holy See.' },
                { label: 'Color Palette', detail: 'Inspired by liturgical gold (used for the most solemn feasts), ivory (signifying purity and the Eucharistic Host), and the deep red of martyrdom and the Sacred Heart.' },
                { label: 'Typography', detail: 'Cinzel and Cinzel Decorative (inspired by Roman inscriptions) and Cormorant Garamond (an open-source revival of Claude Garamond\'s 16th-century types). All from Google Fonts (Open Font License).' }
            ]
        },
        {
            heading: 'Software & AI',
            items: [
                { label: 'Fides AI Companion', detail: 'Powered by Anthropic\'s Claude language model. Fides is a study aid grounded in Catholic teaching; for matters of conscience, sin, or pastoral guidance, please always consult a faithful priest.' },
                { label: 'Open Source', detail: 'This app is built with vanilla HTML, CSS, and JavaScript — no frameworks required. The codebase is intended to be a faithful, transparent companion that users can inspect and trust.' }
            ]
        },
        {
            heading: 'Acknowledgments',
            items: [
                { label: 'The Magisterium of the Catholic Church', detail: 'For preserving, teaching, and transmitting the deposit of faith from the Apostles to our day.' },
                { label: 'The Saints', detail: 'For showing us the face of Christ in every age and culture.' },
                { label: 'The Blessed Virgin Mary', detail: 'Theotokos, Mother of God, Star of the New Evangelization — pray for us.' },
                { label: 'All who pray for the work of the Church', detail: 'Including those who will use this app to grow closer to Christ. Ad maiorem Dei gloriam — for the greater glory of God.' }
            ]
        }
    ],

    closing: '"Sub tuum praesidium confugimus, Sancta Dei Genitrix..." Under your protection we seek refuge, Holy Mother of God; despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin. Amen.\n\nDeus in Aeternum. ✝'
};

if (typeof window !== 'undefined') window.CREDITS = CREDITS;
