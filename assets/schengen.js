/* Plainsight Lab — Schengen 90/180 engine + local trip storage.
 * Pure date maths on UTC day numbers (no time zones, no DST bugs).
 * Rule implemented: on any given day, the number of days spent in the
 * Schengen area during the 180-day window ending that day (that day included)
 * must not exceed 90. Entry day and exit day both count as days of stay.
 */
(function (root) {
  'use strict';
  var DAY = 86400000;
  var EES_START = '2026-04-10'; // EES fully deployed at all Schengen borders

  function toDay(iso) { // 'YYYY-MM-DD' -> integer day number
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || '')) return null;
    var p = iso.split('-');
    var t = Date.UTC(+p[0], +p[1] - 1, +p[2]);
    var d = new Date(t);
    if (d.getUTCFullYear() !== +p[0] || d.getUTCMonth() !== +p[1] - 1 || d.getUTCDate() !== +p[2]) return null;
    return Math.round(t / DAY);
  }
  function toIso(n) { return new Date(n * DAY).toISOString().slice(0, 10); }
  function todayDay() { var d = new Date(); return Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY); }
  function fmt(n, locale) {
    return new Date(n * DAY).toLocaleDateString(locale || 'en-GB', { timeZone: 'UTC', day: 'numeric', month: 'short', year: 'numeric' });
  }

  // Build a set of day numbers present in the area from trips [{entry, exit}]
  function daySet(trips) {
    var s = new Set();
    (trips || []).forEach(function (t) {
      var a = toDay(t.entry), b = toDay(t.exit);
      if (a === null || b === null || b < a) return;
      for (var d = a; d <= b; d++) s.add(d);
    });
    return s;
  }
  function usedOn(set, day) { // days present in [day-179, day]
    var c = 0;
    for (var d = day - 179; d <= day; d++) if (set.has(d)) c++;
    return c;
  }
  // Days still available if you are (or would be) present on `day`
  function remainingOn(set, day) { return 90 - usedOn(set, day); }

  // Longest stay possible when entering on `start` (given existing trips).
  function maxStayFrom(set, start) {
    var s = new Set(set), len = 0;
    for (var d = start; d < start + 90 + 1; d++) {
      var had = s.has(d);
      s.add(d);
      if (usedOn(s, d) > 90) { if (!had) s.delete(d); break; }
      len++;
    }
    return Math.min(len, 90);
  }
  // Earliest entry date >= from where a stay of `n` days is allowed.
  function earliestStartFor(set, n, from) {
    if (n < 1 || n > 90) return null;
    for (var d = from; d < from + 540; d++) {
      if (set.has(d)) continue;
      if (maxStayFrom(set, d) >= n) return d;
    }
    return null;
  }
  // Days (in the set) on which the rule was broken
  function overstayDays(set) {
    var out = [];
    set.forEach(function (d) { if (usedOn(set, d) > 90) out.push(d); });
    return out.sort(function (a, b) { return a - b; });
  }
  function validateTrips(trips) {
    var errors = [], sorted = (trips || []).map(function (t, i) { return { i: i, a: toDay(t.entry), b: toDay(t.exit) }; });
    sorted.forEach(function (t) {
      if (t.a === null || t.b === null) errors.push({ i: t.i, msg: 'Missing or invalid date.' });
      else if (t.b < t.a) errors.push({ i: t.i, msg: 'Exit date is before entry date.' });
    });
    var ok = sorted.filter(function (t) { return t.a !== null && t.b !== null && t.b >= t.a; }).sort(function (x, y) { return x.a - y.a; });
    for (var k = 1; k < ok.length; k++) if (ok[k].a <= ok[k - 1].b) errors.push({ i: ok[k].i, msg: 'Overlaps another trip.' });
    return errors;
  }

  // Local storage (device only). Wrapped: storage can be blocked.
  var KEY = 'plainsight.trips.v1';
  function loadTrips() { try { var v = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
  function saveTrips(trips) { try { localStorage.setItem(KEY, JSON.stringify(trips)); return true; } catch (e) { return false; } }

  var api = { toDay: toDay, toIso: toIso, todayDay: todayDay, fmt: fmt, daySet: daySet, usedOn: usedOn,
    remainingOn: remainingOn, maxStayFrom: maxStayFrom, earliestStartFor: earliestStartFor,
    overstayDays: overstayDays, validateTrips: validateTrips, loadTrips: loadTrips, saveTrips: saveTrips,
    EES_START: EES_START, EES_START_DAY: toDay(EES_START) };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Schengen = api;
})(this);
