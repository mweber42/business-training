/* EES data controllers and supervisory authorities, per country.
 * Source: European Commission, travel-europe.europa.eu/ees/contact-details-for-data-protection-matters
 * Extracted 2026-10-22. Where a country lists several controllers, the main border authority is first.
 * c = data controller (send access/rectification requests here), s = supervisory authority (complaints). */
(function (root) {
  'use strict';
  var C = {
    'Austria': { c: [{ n: 'Federal Minister of the Interior (Bundesminister für Inneres)', a: 'Herrengasse 7, 1010 Vienna, Austria', e: 'BMI-EES@bmi.gv.at' }], s: { n: 'Austrian Data Protection Authority (Datenschutzbehörde)', e: 'dsb@dsb.gv.at' } },
    'Belgium': { c: [{ n: 'Director-General of the Immigration Office (Office des étrangers / Dienst Vreemdelingenzaken)', a: 'Boulevard Pacheco 44, 1000 Brussels, Belgium', e: 'infodesk@ibz.fgov.be' }], s: { n: 'Data Protection Authority (Autorité de protection des données)', e: 'contact@apd-gba.be' } },
    'Bulgaria': { c: [{ n: 'Ministry of Interior', a: '29 Shesti Septemvri Str., Sofia 1000, Bulgaria', e: 'pk_spvo@mvr.bg' }], s: { n: 'Commission for Personal Data Protection', e: 'kzld@cpdp.bg' } },
    'Croatia': { c: [{ n: 'Ministry of the Interior, Border Police Directorate', a: 'Ilica 335, Zagreb, Croatia', e: 'border.data.protection@policija.hr' }], s: { n: 'Personal Data Protection Agency (AZOP)', e: 'azop@azop.hr' } },
    'Czechia': { c: [{ n: 'Police Presidium of the Czech Republic', a: 'Strojnická 27, 170 89 Prague 7, Czech Republic', e: 'epodatelna.policie@policie.gov.cz' }], s: { n: 'Office for Personal Data Protection', e: 'posta@uoou.gov.cz' } },
    'Denmark': { c: [{ n: 'Ministry of Immigration and Integration (Udlændinge- og Integrationsministeriet)', a: 'Slotsholmsgade 10-12, DK-1216 København K, Denmark', e: 'uim@uim.dk' }], s: { n: 'Danish Data Protection Agency (Datatilsynet)', e: 'dt@datatilsynet.dk' } },
    'Estonia': { c: [{ n: 'Police and Border Guard Board (Politsei- ja Piirivalveamet)', a: 'Pärnu mnt 139, 15060 Tallinn, Estonia', e: 'ppa@politsei.ee' }], s: { n: 'Data Protection Inspectorate', e: 'info@aki.ee' } },
    'Finland': { c: [{ n: 'Finnish Border Guard HQ (Rajavartiolaitoksen esikunta)', a: 'Vilhonvuorenkatu 6 (P.O. Box 3), 00500 Helsinki, Finland', e: 'rajavartiolaitos@raja.fi' }], s: { n: 'Office of the Data Protection Ombudsman', e: 'tietosuoja@om.fi' } },
    'France': { c: [{ n: 'Direction générale des étrangers en France (DGEF), Ministère de l’Intérieur', a: 'Place Beauvau, 75008 Paris, France', e: 'donnees-personnelles-dgef@interieur.gouv.fr' }], s: { n: 'CNIL (Commission nationale de l’informatique et des libertés)', w: 'https://www.cnil.fr' } },
    'Germany': { c: [
      { n: 'Federal Police (Bundespolizeipräsidium)', a: 'Heinrich-Mann-Allee 103, 14473 Potsdam, Germany', e: 'bpolp@polizei.bund.de' },
      { n: 'Federal Office of Administration (Bundesverwaltungsamt)', a: '50728 Köln, Germany (S I 7)', e: 'eu-zentrale-services@bva.bund.de' },
      { n: 'Bavarian Border Police (Grenzpolizeidirektion Passau)', a: 'Spitalhofstraße 94, 94032 Passau, Germany', e: 'grenzpolizeidirektion.passau@polizei.bayern.de' },
      { n: 'Hamburg Water Police (Wasserschutzpolizei Hamburg)', a: 'Kehrwiederspitze 1, 20457 Hamburg, Germany', e: 'wsp62@polizei.hamburg.de' }],
      s: { n: 'Federal Commissioner for Data Protection (BfDI)', e: 'poststelle@bfdi.bund.de' },
      note: 'Germany lists several controllers. Write to the one that operated the crossing point concerned; the Federal Police is the general border police.' },
    'Greece': { c: [{ n: 'Hellenic Police Headquarters', a: 'P. Kanellopoulou 4, 101 77 Athens, Greece', e: 'kepik@astynomia.gr' }], s: { n: 'Hellenic Data Protection Authority', e: 'contact@dpa.gr' } },
    'Hungary': { c: [{ n: 'National Police Headquarters (Országos Rendőr-főkapitányság)', a: 'Teve u. 4-6, 1139 Budapest, Hungary', e: 'adatvedelem@orfk.police.hu', eNote: 'Data Protection Officer address (the controller lists only its website).' }], s: { n: 'National Authority for Data Protection and Freedom of Information', e: 'ugyfelszolgalat@naih.hu' } },
    'Iceland': { c: [{ n: 'National Police Commissioner (Ríkislögreglustjóri)', a: 'Rauðarárstíg 25, 105 Reykjavík, Iceland', e: 'rls@rls.is' }], s: { n: 'Icelandic Data Protection Authority (Persónuvernd)', e: 'postur@personuvernd.is' } },
    'Italy': { c: [{ n: 'Ministero dell’Interno – Dipartimento della Pubblica Sicurezza', a: 'Piazza del Viminale 1, 00184 Roma, Italy', e: 'rpd.dipps@pecps.interno.it' }], s: { n: 'Garante per la protezione dei dati personali', e: 'protocollo@gpdp.it' } },
    'Latvia': { c: [{ n: 'State Border Guard', a: 'Rūdolfa street 5, Rīga, LV-1012, Latvia', e: 'pasts@rs.gov.lv' }], s: { n: 'Data State Inspectorate', e: 'pasts@dvi.gov.lv' } },
    'Liechtenstein': { c: [{ n: 'Migration and Passport Office (Ausländer- und Passamt)', a: 'Giessenstrasse 3, Postfach 684, 9490 Vaduz, Liechtenstein', e: 'dsk.apa@llv.li' }], s: { n: 'Data Protection Authority (Datenschutzstelle)', e: 'info.dss@llv.li' } },
    'Lithuania': { c: [{ n: 'State Border Guard Service', a: 'Savanorių pr. 2, Vilnius, Lithuania', e: 'dvks@vsat.vrm.lt' }], s: { n: 'State Data Protection Inspectorate', e: 'ada@ada.lt' } },
    'Luxembourg': { c: [{ n: 'Direction générale de l’immigration, Ministère des Affaires intérieures', a: 'B.P. 752, L-2017 Luxembourg', e: 'immigration.ees@mai.etat.lu' }], s: { n: 'CNPD (Commission nationale pour la protection des données)', w: 'https://cnpd.public.lu' } },
    'Malta': { c: [{ n: 'Principal Immigration Officer (Malta Police Force)', a: 'Police General Headquarters, Floriana FRN1530, Malta', e: 'sb.police@gov.mt' }], s: { n: 'Information and Data Protection Commissioner', e: 'idpc.info@ispc.org.mt' } },
    'Netherlands': { c: [{ n: 'Royal Netherlands Marechaussee – GDPR Coordinator (Cluster Juridische Zaken)', a: 'Postbus 90200, 3509 BE Utrecht, Netherlands', e: 'coordinator.avg.kmar@mindef.nl' }], s: { n: 'Dutch Data Protection Authority (Autoriteit Persoonsgegevens)', w: 'https://autoriteitpersoonsgegevens.nl' } },
    'Norway': { c: [{ n: 'National Police Directorate (Politidirektoratet)', a: 'Postboks 2090 Vika, 0125 Oslo, Norway', e: 'Behandlingsansvarlige.Grense@politiet.no' }], s: { n: 'Norwegian Data Protection Authority (Datatilsynet)', w: 'https://www.datatilsynet.no' } },
    'Poland': { c: [{ n: 'Commander-in-Chief of the Border Guard (Komendant Główny Straży Granicznej)', a: 'al. Niepodległości 100, 02-585 Warsaw, Poland', e: 'nu.ees@strazgraniczna.pl' }], s: { n: 'President of the Personal Data Protection Office (UODO)', e: 'kancelaria@uodo.gov.pl' } },
    'Portugal': { c: [{ n: 'Border and Foreigners Coordination Unit (UCFE)', a: 'Av. Defensores de Chaves 6, 1049-063 Lisboa, Portugal', e: 'ucfe.gabinete@ssi.gov.pt' }], s: { n: 'CNPD – Comissão Nacional de Proteção de Dados', e: 'geral@cnpd.pt' } },
    'Romania': { c: [{ n: 'General Inspectorate of Border Police', a: '42C Geniului Blvd, District 6, 060117 Bucharest, Romania', e: 'pfr@igpf.ro' }], s: { n: 'National Supervisory Authority for Personal Data Processing', e: 'anspdcp@dataprotection.ro' } },
    'Slovakia': { c: [{ n: 'Bureau of Border and Foreign Police, Presidium of the Police Force', a: 'Pribinova 2, 812 72 Bratislava, Slovakia', e: 'ees.slovakia@minv.sk' }], s: { n: 'Office for Personal Data Protection', e: 'statny.dozor@pdp.gov.sk' } },
    'Slovenia': { c: [{ n: 'Police, Ministry of the Interior (Policija)', a: 'Štefanova 2, 1501 Ljubljana, Slovenia', e: 'GP.POLICIJA@POLICIJA.SI' }], s: { n: 'Information Commissioner', e: 'GP.IP@IP-RS.SI' } },
    'Spain': { c: [{ n: 'Comisaría General de Extranjería y Fronteras (General Commissioner for Aliens and Borders)', a: 'c/ General Pardiñas 90, 28006 Madrid, Spain', e: 'policianacional.dpd@policia.es', eNote: 'Data Protection Officer address (no email is listed for the controller).' }], s: { n: 'Spanish Data Protection Agency (AEPD)', w: 'https://www.aepd.es' } },
    'Sweden': { c: [{ n: 'Police Authority – National Border Police Division (Polismyndigheten)', a: 'Department of National Operations, SE-106 75 Stockholm, Sweden', e: 'granspolisenheten.noa.kansli@polisen.se' }], s: { n: 'Swedish Authority for Privacy Protection (IMY)', e: 'imy@imy.se' } },
    'Switzerland': { c: [{ n: 'State Secretariat for Migration SEM – Data Protection Officer', a: 'Quellenweg 6, CH-3003 Berne, Switzerland', e: 'dsbo@sem.admin.ch' }], s: { n: 'Federal Data Protection and Information Commissioner (FDPIC)', w: 'https://www.edoeb.admin.ch' } }
  };
  var api = { CONTACTS: C, SOURCE: 'https://travel-europe.europa.eu/ees/contact-details-for-data-protection-matters', EXTRACTED: '2026-10-22' };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.EESContacts = api;
})(this);
