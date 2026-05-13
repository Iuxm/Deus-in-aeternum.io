/* ═══════════════════════════════════════════════════════════════
   LITURGICAL CALENDAR MODULE
   Calculates everything related to the Catholic liturgical year:
   - Easter date (using Computus algorithm)
   - All movable feasts (Ash Wednesday, Pentecost, Ascension, etc.)
   - The current liturgical season
   - Sunday cycle (Year A, B, or C)
   - Weekday cycle (Year I or II)
   - Liturgical color
   - Position in the liturgical year (for the wheel visual)
   ═══════════════════════════════════════════════════════════════ */

const Liturgical = (function () {

    /* Calculate Easter Sunday for any given year using the Computus algorithm
       (Anonymous Gregorian algorithm — the formula used by the Catholic Church) */
    function calculateEaster(year) {
        const a = year % 19;
        const b = Math.floor(year / 100);
        const c = year % 100;
        const d = Math.floor(b / 4);
        const e = b % 4;
        const f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4);
        const k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        const month = Math.floor((h + l - 7 * m + 114) / 31);
        const day = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(year, month - 1, day);
    }

    /* First Sunday of Advent — fourth Sunday before Christmas */
    function firstSundayOfAdvent(year) {
        const christmas = new Date(year, 11, 25);
        const dow = christmas.getDay(); // 0 = Sun
        // The Sunday before Christmas (or Christmas itself if Sunday)
        const sundayBeforeChristmas = new Date(year, 11, 25 - (dow === 0 ? 7 : dow));
        // Go back 3 more weeks
        return new Date(sundayBeforeChristmas.getFullYear(), sundayBeforeChristmas.getMonth(), sundayBeforeChristmas.getDate() - 21);
    }

    /* Add days helper */
    function addDays(date, days) {
        const d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
    }

    /* Compare two dates ignoring time */
    function sameDay(a, b) {
        return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    }

    /* Strip time from a date */
    function stripTime(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }

    /* Days between two dates */
    function daysBetween(a, b) {
        const ms = stripTime(b) - stripTime(a);
        return Math.round(ms / (1000 * 60 * 60 * 24));
    }

    /* Get all key liturgical dates for a given calendar year */
    function getKeyDates(calendarYear) {
        const easter = calculateEaster(calendarYear);
        return {
            easter,
            ashWednesday: addDays(easter, -46),
            palmSunday: addDays(easter, -7),
            holyThursday: addDays(easter, -3),
            goodFriday: addDays(easter, -2),
            holySaturday: addDays(easter, -1),
            divineMercySunday: addDays(easter, 7),
            ascension: addDays(easter, 39), // Traditionally Thursday; in many US dioceses transferred to following Sunday
            ascensionSunday: addDays(easter, 42),
            pentecost: addDays(easter, 49),
            trinitySunday: addDays(easter, 56),
            corpusChristi: addDays(easter, 63),
            sacredHeart: addDays(easter, 68),
            christmas: new Date(calendarYear, 11, 25),
            firstSundayOfAdventCurrent: firstSundayOfAdvent(calendarYear),
            firstSundayOfAdventPrevious: firstSundayOfAdvent(calendarYear - 1),
            baptismOfTheLord: getBaptismOfTheLord(calendarYear),
            christTheKing: getChristTheKing(calendarYear)
        };
    }

    /* Baptism of the Lord — Sunday after January 6 (Epiphany), or the Monday after if Epiphany is on Jan 7 or 8 */
    function getBaptismOfTheLord(year) {
        const jan6 = new Date(year, 0, 6);
        const dow = jan6.getDay();
        // Sunday after Jan 6
        if (dow === 0) {
            // If Jan 6 is Sunday, Baptism is Jan 13... but usually Epiphany is transferred to that Sunday in US, then Baptism is the Monday
            return new Date(year, 0, 13);
        }
        return new Date(year, 0, 6 + (7 - dow));
    }

    /* Christ the King — last Sunday of the liturgical year, the Sunday before First Sunday of Advent */
    function getChristTheKing(year) {
        const firstAdvent = firstSundayOfAdvent(year);
        return addDays(firstAdvent, -7);
    }

    /* Determine which Sunday cycle (A, B, C) is active for a given date */
    function getSundayCycle(date) {
        const year = date.getFullYear();
        const advent = firstSundayOfAdvent(year);
        // The "Advent year" — the calendar year in which the current liturgical year began
        const adventYear = (date >= advent) ? year : year - 1;
        // Mapping confirmed by USCCB:
        //   adventYear % 3 === 0 → Year A  (e.g., 2022, 2025, 2028)
        //   adventYear % 3 === 1 → Year B  (e.g., 2023, 2026, 2029)
        //   adventYear % 3 === 2 → Year C  (e.g., 2024, 2027, 2030)
        const cycles = ['A', 'B', 'C'];
        return cycles[adventYear % 3];
    }

    /* Determine Weekday cycle (I or II)
       Year I: odd calendar years (the part of the liturgical year falling in odd years)
       Year II: even calendar years
       Note: This switches at the start of Advent each year. */
    function getWeekdayCycle(date) {
        const year = date.getFullYear();
        const advent = firstSundayOfAdvent(year);
        const adventYear = (date >= advent) ? year : year - 1;
        // Year I begins in Advent of even-numbered years (it's the "year I" of the next calendar year, which is odd)
        // Year II begins in Advent of odd-numbered years
        return (adventYear % 2 === 0) ? 'I' : 'II';
    }

    /* Calculate the current liturgical season for any date.
       Returns: { name, color, theme, key }
    */
    function getSeason(date) {
        const d = stripTime(date);
        const year = d.getFullYear();
        const dates = getKeyDates(year);
        const prevDates = getKeyDates(year - 1);
        const advent = firstSundayOfAdvent(year);
        const prevAdvent = firstSundayOfAdvent(year - 1);

        // Sacred Paschal Triduum (Holy Thursday evening - Easter Vigil) — but here we're treating by day
        if (sameDay(d, dates.holyThursday) || sameDay(d, dates.goodFriday) || sameDay(d, dates.holySaturday)) {
            return { name: 'Sacred Paschal Triduum', color: 'red', theme: 'The Passion, Death, and Burial of the Lord', key: 'triduum' };
        }

        // Easter Time: Easter Sunday through Pentecost
        if (d >= dates.easter && d <= dates.pentecost) {
            return { name: 'Easter Time', color: 'white', theme: 'The Resurrection of Christ and the gift of the Holy Spirit', key: 'easter' };
        }

        // Lent: Ash Wednesday to Wednesday of Holy Week (i.e., before Holy Thursday)
        if (d >= dates.ashWednesday && d < dates.holyThursday) {
            return { name: 'Lent', color: 'violet', theme: 'Conversion, repentance, and preparation for the Paschal Mystery', key: 'lent' };
        }

        // Christmas Time: Dec 25 to Baptism of the Lord (next year's calendar)
        if (d >= dates.christmas && d <= getBaptismOfTheLord(year + 1)) {
            return { name: 'Christmas Time', color: 'white', theme: 'The Word made flesh — the Incarnation', key: 'christmas' };
        }
        // Christmas Time spilling from previous year
        if (d >= new Date(year - 1, 11, 25) && d <= dates.baptismOfTheLord) {
            return { name: 'Christmas Time', color: 'white', theme: 'The Word made flesh — the Incarnation', key: 'christmas' };
        }

        // Advent: First Sunday of Advent through Dec 24
        if (d >= advent && d < dates.christmas) {
            return { name: 'Advent', color: 'violet', theme: 'Watchful waiting for the coming of Christ', key: 'advent' };
        }

        // Ordinary Time Part 2: Day after Pentecost through Saturday before Advent
        if (d > dates.pentecost && d < advent) {
            return { name: 'Ordinary Time', color: 'green', theme: 'Living the Christian mystery in daily life', key: 'ordinary2' };
        }

        // Ordinary Time Part 1: Day after Baptism of the Lord to Tuesday before Ash Wednesday
        if (d > dates.baptismOfTheLord && d < dates.ashWednesday) {
            return { name: 'Ordinary Time', color: 'green', theme: 'The public ministry of Christ', key: 'ordinary1' };
        }

        // Fallback
        return { name: 'Ordinary Time', color: 'green', theme: 'The mystery of Christ', key: 'ordinary' };
    }

    /* Get the special name for today, if any (Solemnity, Feast, Memorial) */
    function getSpecialDay(date) {
        const d = stripTime(date);
        const year = d.getFullYear();
        const dates = getKeyDates(year);

        // Major movable feasts
        if (sameDay(d, dates.easter)) return { name: 'Easter Sunday', rank: 'Solemnity', color: 'white' };
        if (sameDay(d, dates.ashWednesday)) return { name: 'Ash Wednesday', rank: 'Special', color: 'violet' };
        if (sameDay(d, dates.palmSunday)) return { name: 'Palm Sunday of the Passion of the Lord', rank: 'Sunday', color: 'red' };
        if (sameDay(d, dates.holyThursday)) return { name: 'Holy Thursday', rank: 'Triduum', color: 'white' };
        if (sameDay(d, dates.goodFriday)) return { name: 'Good Friday of the Passion of the Lord', rank: 'Triduum', color: 'red' };
        if (sameDay(d, dates.holySaturday)) return { name: 'Holy Saturday — Easter Vigil', rank: 'Triduum', color: 'white' };
        if (sameDay(d, dates.divineMercySunday)) return { name: 'Divine Mercy Sunday', rank: 'Sunday', color: 'white' };
        if (sameDay(d, dates.pentecost)) return { name: 'Pentecost Sunday', rank: 'Solemnity', color: 'red' };
        if (sameDay(d, dates.trinitySunday)) return { name: 'The Most Holy Trinity', rank: 'Solemnity', color: 'white' };
        if (sameDay(d, dates.corpusChristi)) return { name: 'The Most Holy Body and Blood of Christ', rank: 'Solemnity', color: 'white' };
        if (sameDay(d, dates.sacredHeart)) return { name: 'The Most Sacred Heart of Jesus', rank: 'Solemnity', color: 'white' };
        if (sameDay(d, dates.ascensionSunday)) return { name: 'The Ascension of the Lord', rank: 'Solemnity', color: 'white' };
        if (sameDay(d, dates.christTheKing)) return { name: 'Our Lord Jesus Christ, King of the Universe', rank: 'Solemnity', color: 'white' };
        if (sameDay(d, dates.baptismOfTheLord)) return { name: 'The Baptism of the Lord', rank: 'Feast', color: 'white' };

        // Fixed feasts
        const m = d.getMonth() + 1, day = d.getDate();
        const fixed = {
            '1-1': { name: 'Mary, Mother of God', rank: 'Solemnity', color: 'white' },
            '1-6': { name: 'Epiphany of the Lord', rank: 'Solemnity', color: 'white' },
            '2-2': { name: 'Presentation of the Lord', rank: 'Feast', color: 'white' },
            '3-19': { name: 'Saint Joseph, Spouse of the BVM', rank: 'Solemnity', color: 'white' },
            '3-25': { name: 'The Annunciation of the Lord', rank: 'Solemnity', color: 'white' },
            '6-24': { name: 'Nativity of Saint John the Baptist', rank: 'Solemnity', color: 'white' },
            '6-29': { name: 'Saints Peter and Paul, Apostles', rank: 'Solemnity', color: 'red' },
            '8-6': { name: 'The Transfiguration of the Lord', rank: 'Feast', color: 'white' },
            '8-15': { name: 'The Assumption of the Blessed Virgin Mary', rank: 'Solemnity', color: 'white' },
            '9-14': { name: 'The Exaltation of the Holy Cross', rank: 'Feast', color: 'red' },
            '11-1': { name: 'All Saints', rank: 'Solemnity', color: 'white' },
            '11-2': { name: 'All Souls\' Day', rank: 'Commemoration', color: 'violet' },
            '12-8': { name: 'The Immaculate Conception of the BVM', rank: 'Solemnity', color: 'white' },
            '12-12': { name: 'Our Lady of Guadalupe', rank: 'Feast', color: 'white' },
            '12-25': { name: 'The Nativity of the Lord (Christmas)', rank: 'Solemnity', color: 'white' }
        };
        const key = `${m}-${day}`;
        if (fixed[key]) return fixed[key];

        return null;
    }

    /* Determine the week number within Lent / Easter / Advent / Ordinary Time
       Returns something like { period: "Easter", weekNumber: 4, dayOfWeek: 6 }
       This is what the lectionary uses to look up the right reading. */
    function getLiturgicalWeek(date) {
        const d = stripTime(date);
        const year = d.getFullYear();
        const dates = getKeyDates(year);
        const advent = firstSundayOfAdvent(year);
        const dow = d.getDay(); // 0=Sun, 6=Sat

        // Easter Time: Easter Sunday is "Easter Sunday", then weeks are numbered 2-7
        if (d >= dates.easter && d <= dates.pentecost) {
            const days = daysBetween(dates.easter, d);
            const weekNumber = Math.floor(days / 7) + 1;
            return { period: 'Easter', weekNumber, dayOfWeek: dow };
        }

        // Lent
        if (d >= dates.ashWednesday && d < dates.holyThursday) {
            // Ash Wed is in "the days after Ash Wednesday"; first full week starts at the 1st Sunday of Lent
            const firstSundayLent = addDays(dates.easter, -42);
            if (d < firstSundayLent) {
                return { period: 'Lent', weekNumber: 0, dayOfWeek: dow, special: 'After Ash Wednesday' };
            }
            const days = daysBetween(firstSundayLent, d);
            const weekNumber = Math.floor(days / 7) + 1;
            // Holy Week is week 6
            if (weekNumber === 6) return { period: 'Holy Week', weekNumber: 6, dayOfWeek: dow };
            return { period: 'Lent', weekNumber, dayOfWeek: dow };
        }

        // Advent
        if (d >= advent && d < dates.christmas) {
            const days = daysBetween(advent, d);
            const weekNumber = Math.floor(days / 7) + 1;
            return { period: 'Advent', weekNumber, dayOfWeek: dow };
        }

        // Christmas Time
        if (d >= dates.christmas) {
            const next = getBaptismOfTheLord(year + 1);
            if (d <= next) return { period: 'Christmas', weekNumber: 1, dayOfWeek: dow };
        }
        if (d <= dates.baptismOfTheLord) {
            return { period: 'Christmas', weekNumber: 1, dayOfWeek: dow };
        }

        // Ordinary Time
        // Part 1 (after Baptism of the Lord): begins as "Week 1 of Ordinary Time" Monday after Baptism
        // Part 2 (after Pentecost): resumes the count
        if (d > dates.baptismOfTheLord && d < dates.ashWednesday) {
            const monAfterBaptism = addDays(dates.baptismOfTheLord, 1);
            const days = daysBetween(monAfterBaptism, d);
            const weekNumber = Math.floor(days / 7) + 1;
            return { period: 'Ordinary Time', weekNumber, dayOfWeek: dow };
        }
        if (d > dates.pentecost && d < advent) {
            // Compute total Ordinary Time weeks: the year ends with week 34 (Christ the King is the Sunday of week 34)
            // Christ the King = last Sunday before Advent
            const ctk = getChristTheKing(year);
            // Count backwards from ctk = week 34
            const weeksBefore = Math.floor(daysBetween(d, ctk) / 7);
            const weekNumber = 34 - weeksBefore;
            return { period: 'Ordinary Time', weekNumber, dayOfWeek: dow };
        }

        return { period: 'Ordinary Time', weekNumber: 1, dayOfWeek: dow };
    }

    /* Position in the liturgical year as a fraction 0..1 — used for the wheel visual.
       Returns angle in degrees (0 = top = 1st Sunday of Advent, going clockwise). */
    function getYearPosition(date) {
        const d = stripTime(date);
        const year = d.getFullYear();
        const adventThisYear = firstSundayOfAdvent(year);
        const adventNextYear = firstSundayOfAdvent(year + 1);
        const adventPrevYear = firstSundayOfAdvent(year - 1);

        let yearStart, yearEnd;
        if (d >= adventThisYear) {
            yearStart = adventThisYear;
            yearEnd = adventNextYear;
        } else {
            yearStart = adventPrevYear;
            yearEnd = adventThisYear;
        }
        const total = daysBetween(yearStart, yearEnd);
        const elapsed = daysBetween(yearStart, d);
        const fraction = elapsed / total;
        return { fraction, degrees: fraction * 360 };
    }

    /* Public API */
    return {
        calculateEaster,
        firstSundayOfAdvent,
        getKeyDates,
        getSundayCycle,
        getWeekdayCycle,
        getSeason,
        getSpecialDay,
        getLiturgicalWeek,
        getYearPosition,
        addDays,
        sameDay,
        stripTime,
        daysBetween
    };

})();

// Make available globally
if (typeof window !== 'undefined') window.Liturgical = Liturgical;
