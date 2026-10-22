/* Plainsight Lab — EU261 (Regulation (EC) No 261/2004) compensation engine.
 * Applies the rules in force until Regulation (EU) 2026/2202 starts to apply (23 Oct 2027).
 * Rules last checked 2026-10-22. Not legal advice. */
(function (root) {
  'use strict';
  // EU member states (incl. outermost regions coded separately in ISO), EEA, Switzerland
  var EU = 'AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE RE GP MQ GF YT MF'.split(' ');
  var EEA_CH = 'IS NO LI CH'.split(' ');
  function inScopeCountry(c) { return EU.indexOf(c) >= 0 || EEA_CH.indexOf(c) >= 0; }
  function isEU(c) { return EU.indexOf(c) >= 0; }

  function distanceKm(a, b) { // great circle
    var R = 6371, toR = Math.PI / 180;
    var dLat = (b[0] - a[0]) * toR, dLon = (b[1] - a[1]) * toR;
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(a[0] * toR) * Math.cos(b[0] * toR) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  // band: 1 = <=1500 km; 2 = intra-EU >1500 or 1500-3500; 3 = >3500 (not intra-EU)
  function band(km, intraEU) { if (km <= 1500) return 1; if (intraEU || km <= 3500) return 2; return 3; }
  var AMOUNT = { 1: 250, 2: 400, 3: 600 };
  var REDUCE_LIMIT_H = { 1: 2, 2: 3, 3: 4 }; // Art. 7(2)

  /* input: { fromCountry, toCountry, km, euCarrier: 'yes'|'no'|'unknown', event: 'delay'|'cancel'|'denied',
   *          arrivalDelayH, noticeDays (cancel), reroute: {earlierDepH, laterArrH} | null, cause: 'technical'|'ownstrike'|'weather'|'atc'|'security'|'other'|'unknown',
   *          ukFlight: bool (computed) }
   * output: { scope: 'eu'|'uk'|'none'|'maybe', eligible: 'yes'|'no'|'maybe', amount, band, reasons:[], warnings:[] } */
  function assess(i) {
    var out = { reasons: [], warnings: [], amount: 0, eligible: 'no', scope: 'none' };
    var depEU = inScopeCountry(i.fromCountry), arrEU = inScopeCountry(i.toCountry);
    if (depEU) out.scope = 'eu';
    else if (arrEU) out.scope = i.euCarrier === 'yes' ? 'eu' : i.euCarrier === 'no' ? 'none' : 'maybe';
    if (out.scope === 'none' && (i.fromCountry === 'GB' || i.toCountry === 'GB')) out.scope = 'uk';
    if (out.scope === 'none') { out.reasons.push('noscope'); return out; }
    if (out.scope === 'uk') { out.reasons.push('uk'); return out; }
    if (out.scope === 'maybe') out.warnings.push('carrier');

    var b = band(i.km, isEU(i.fromCountry) && isEU(i.toCountry));
    out.band = b; var full = AMOUNT[b], amt = 0;

    if (i.event === 'delay') {
      var h = +i.arrivalDelayH;
      if (!(h >= 3)) { out.reasons.push('under3h'); return out; }
      amt = full;
      if (b === 3 && h < 4) { amt = full / 2; out.reasons.push('reduced_delay'); }
    } else if (i.event === 'cancel') {
      var n = i.noticeDays; // '14+', '7-13', '<7'
      if (n === '14+') { out.reasons.push('notice14'); return out; }
      amt = full;
      if (i.reroute) {
        var e = +i.reroute.earlierDepH || 0, l = +i.reroute.laterArrH || 0;
        if (n === '7-13' && e <= 2 && l < 4) { out.reasons.push('reroute_ok_7_13'); return out; }
        if (n === '<7' && e <= 1 && l < 2) { out.reasons.push('reroute_ok_lt7'); return out; }
        if (l <= REDUCE_LIMIT_H[b]) { amt = full / 2; out.reasons.push('reduced_reroute'); }
      }
    } else if (i.event === 'denied') {
      amt = full;
      if (i.reroute && (+i.reroute.laterArrH || 0) <= REDUCE_LIMIT_H[b]) { amt = full / 2; out.reasons.push('reduced_reroute'); }
      out.warnings.push('voluntary');
    }
    out.amount = amt;
    var c = i.cause || 'unknown';
    if (i.event === 'denied') out.eligible = out.scope === 'maybe' ? 'maybe' : 'yes';
    else if (c === 'weather' || c === 'atc' || c === 'security') { out.eligible = 'maybe'; out.warnings.push('extraordinary'); }
    else out.eligible = out.scope === 'maybe' ? 'maybe' : 'yes';
    if (c === 'technical') out.reasons.push('technical');
    if (c === 'ownstrike') out.reasons.push('ownstrike');
    return out;
  }
  var api = { assess: assess, distanceKm: distanceKm, band: band, AMOUNT: AMOUNT, inScopeCountry: inScopeCountry, isEU: isEU };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.EU261 = api;
})(typeof window !== 'undefined' ? window : this);
