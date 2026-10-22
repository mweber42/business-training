/* Plainsight Lab — official travel-authorisation sites & URL checker.
 * Facts checked 2026-10-22. Update `checked` when re-verified. */
(function (root) {
  'use strict';
  var DATA = [
    { id: 'uk-eta', name: { en: 'UK ETA (Electronic Travel Authorisation)', fr: 'ETA Royaume-Uni (autorisation de voyage électronique)' },
      price: { en: '£20 per person (since 8 April 2026)', fr: '20 £ par personne (depuis le 8 avril 2026), soit environ 23 €' },
      validity: { en: '2 years or until your passport expires', fr: '2 ans, ou jusqu’à l’expiration du passeport' },
      official: 'https://www.gov.uk/eta', app: { en: 'Official “UK ETA” app (UK Home Office)', fr: 'Application officielle « UK ETA » (Home Office britannique)' },
      domains: ['gov.uk'], keywords: ['eta', 'uk', 'royaume', 'britain', 'england', 'angleterre'],
      status: { en: 'Open', fr: 'Ouvert' } },
    { id: 'esta', name: { en: 'US ESTA', fr: 'ESTA (États-Unis)' },
      price: { en: 'About US$40 per person', fr: 'Environ 40 $ US par personne' },
      validity: { en: '2 years or until your passport expires', fr: '2 ans, ou jusqu’à l’expiration du passeport' },
      official: 'https://esta.cbp.dhs.gov/', app: { en: 'Official “ESTA Mobile” app (U.S. CBP)', fr: 'Application officielle « ESTA Mobile » (CBP américain)' },
      domains: ['cbp.dhs.gov', 'dhs.gov'], keywords: ['esta', 'usa', 'etats', 'america', 'us-'],
      status: { en: 'Open', fr: 'Ouvert' } },
    { id: 'ca-eta', name: { en: 'Canada eTA', fr: 'AVE / eTA Canada' },
      price: { en: 'CA$7 per person', fr: '7 $ CA par personne' },
      validity: { en: 'Up to 5 years or until your passport expires', fr: 'Jusqu’à 5 ans, ou jusqu’à l’expiration du passeport' },
      official: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/apply.html', app: null,
      domains: ['canada.ca', 'gc.ca'], keywords: ['eta', 'ave', 'canada'],
      status: { en: 'Open', fr: 'Ouvert' } },
    { id: 'etias', name: { en: 'EU ETIAS', fr: 'ETIAS (Union européenne)' },
      price: { en: '€20 once it opens (ages 18–70)', fr: '20 € une fois ouvert (de 18 à 70 ans)' },
      validity: { en: '3 years or until your passport expires', fr: '3 ans, ou jusqu’à l’expiration du passeport' },
      official: 'https://travel-europe.europa.eu/etias_en', app: null,
      domains: ['europa.eu'], keywords: ['etias', 'europe', 'schengen'],
      status: { en: 'NOT open yet — launch postponed to 2027, no date set. Nobody can sell you an ETIAS today.', fr: 'PAS encore ouvert — lancement reporté à 2027, sans date fixée. Personne ne peut vous vendre un ETIAS aujourd’hui.' },
      closed: true }
  ];
  var CHECKED = '2026-10-22';

  function hostOf(input) {
    var s = String(input || '').trim();
    if (!s) return null;
    if (!/^[a-z]+:\/\//i.test(s)) s = 'https://' + s;
    try { return new URL(s).hostname.toLowerCase().replace(/\.$/, ''); } catch (e) { return null; }
  }
  function endsWithDomain(host, dom) { return host === dom || host.slice(-(dom.length + 1)) === '.' + dom; }

  // Returns {verdict: 'official'|'unofficial'|'invalid', match: item|null, lookalike: bool, host}
  function check(input) {
    var host = hostOf(input);
    if (!host || host.indexOf('.') < 0) return { verdict: 'invalid', host: host };
    for (var i = 0; i < DATA.length; i++) {
      for (var j = 0; j < DATA[i].domains.length; j++) {
        if (endsWithDomain(host, DATA[i].domains[j])) return { verdict: 'official', match: DATA[i], host: host };
      }
    }
    var guess = null;
    DATA.forEach(function (d) { d.keywords.forEach(function (k) { if (!guess && host.indexOf(k) >= 0) guess = d; }); });
    return { verdict: 'unofficial', match: guess, lookalike: !!guess, host: host };
  }

  var api = { DATA: DATA, CHECKED: CHECKED, check: check, hostOf: hostOf };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Official = api;
})(this);
