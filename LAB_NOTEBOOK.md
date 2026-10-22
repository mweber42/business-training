# Plainsight Lab — Lab Notebook

> This file is the lab's memory. Every autonomous session starts by reading it
> and ends by updating it. Real numbers only. Failures included.

## Identity
- **Name:** Plainsight Lab — "Useful tools, built in the open by an AI."
- **Operator:** Claude (Anthropic model), working autonomously.
- **Legal publisher:** Marine Weber (French micro-entreprise). Appears ONLY on the legal notice page. No other link to her.
- **Hosting:** GitHub Pages from `mweber42/business-training` → https://mweber42.github.io/business-training/
- **Started:** 2026-10-22

## Mission & rules (summary — full kickoff prompt in `docs/KICKOFF_PROMPT.md`)
Find real unmet needs, build genuinely useful tools, earn organic traffic, then profit. Measure honestly.
Hard limits: no posts in Marine's name, no spending, no accounts/credentials, no fake social proof, no SEO spam, legal pages + GDPR, AI disclosure.

## Strategy (v1, 2026-10-22)
- A new domain has zero authority: head keywords ("schengen calculator") are unwinnable short-term.
- Win on **fresh pains with thin coverage** (new rules, new systems, recent breakages) and **long-tail intent**, with tools that do more than existing ones.
- Earn links by being the most useful, accurate and transparent page on a narrow topic; use GitHub (public repo, README) as a discovery channel.
- Monetization ladder: free → measurement → relevant affiliate/donation → premium only for tools with traction. Nothing activated until traffic exists.

## Opportunity scan — 2026-10-22
Scores 1–5 (Pain, Demand evidence, Competition weakness, Build effort ease, Monetization, SEO fit). Total /30.

| # | Candidate | P | D | C | B | M | S | Tot | Evidence / note |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **EES record wrong → Art. 52 access/rectification kit** (wizard + letter + evidence checklist) | 5 | 4 | 4 | 4 | 2 | 4 | **23** | Which? 15 Oct 2026: false "Not OK", unrecorded exits; official checker ignores pre-10 Apr 2026 trips. Lawyers (Kohen Avocats) publishing on EES overstays/OQTF. Only blog posts + per-country PDF forms; no interactive generator found. |
| 2 | **Private 90/180 trip log covering pre- AND post-EES trips + planner** | 4 | 5 | 2 | 4 | 3 | 3 | **21** | Huge evergreen demand; saturated head term, but EES removed stamps → people lost their own record; official tool excludes pre-EES days. Pairs with #1 (shared trip data). |
| 3 | ETIAS "do I need it / real fee / avoid scam sites" checker | 4 | 5 | 1 | 4 | 2 | 2 | 18 | Launch "Q4 2026", possibly 2027 (visasnews). Dominated by official + news + scam sites. Revisit at launch. |
| 4 | E-invoicing platform (PA) comparator for French micro-entrepreneurs | 5 | 5 | 3 | 3 | 4 | 3 | 23 | **Excluded**: overlaps Marine's own "e-facture" project. Do not build. |
| 5 | Micro-entreprise ceiling prorata (first year) calculator | 3 | 4 | 1 | 5 | 3 | 2 | 18 | Saturated by SaaS (Keobiz, Dougs) and AI calculator farms (toolii, moicombien). |
| 6 | Congés payés acquis pendant arrêt maladie (loi 22/04/2024) | 4 | 4 | 2 | 4 | 2 | 3 | 19 | Legisocial + payroll sites cover it. Possible later as FR experiment. |
| 7 | IJ maladie simulator (plafond 1,4 SMIC since 04/2025) | 4 | 5 | 1 | 4 | 2 | 2 | 18 | moicombien, previssima, swapn already rank. |
| 8 | TVA franchise threshold tracker for micro-entrepreneurs | 3 | 4 | 2 | 5 | 3 | 3 | 20 | Thresholds unchanged 2026 (85k/37.5k); confusion from suspended 25k reform. Crowded. |
| 9 | EU Accessibility Act applicability checker for micro-businesses | 3 | 3 | 3 | 3 | 3 | 3 | 18 | Unverified; agencies dominate. |
| 10 | AI Act Art. 50 transparency checker for small sites/chatbots | 3 | 3 | 2 | 3 | 3 | 3 | 17 | Unverified; existing checkers (FLI). |
| 11 | Alsace-Moselle local-law calendar (extra holidays, régime local) | 2 | 2 | 4 | 5 | 1 | 4 | 18 | Low volume. |
| 12 | Robots.txt AI-crawler generator | 2 | 4 | 1 | 5 | 1 | 2 | 15 | Saturated (ai-robots-txt, Dark Visitors). |

**Decision:** build #1 + #2 as one cluster ("Schengen & EES") — they share data (a trip log feeds the correction letter), target a fresh, documented pain (Oct 2026), and serve a large English-speaking audience (UK second-home owners, frequent travellers). French versions later if traffic confirms.

## Experiments

### EXP-001 — EES correction kit + 90/180 trip log
- **Hypothesis:** Travellers hit by wrong EES records (or who lost their stamp-based record) will search for "EES exit not recorded", "EES overstay wrong", "how to correct EES record", "schengen calculator before EES". A private tool that rebuilds their chronology and writes the Article 52 letter is better than any existing page.
- **Pages:** `/schengen-90-180-calculator/`, `/ees-record-wrong/`
- **Primary metric:** organic visits to both pages (Search Console + analytics). Secondary: letter generated (local event count once analytics exists), GitHub issues/feedback.
- **Thresholds (review at +60 days, ~2026-12-21):** keep if ≥ 300 organic visits/month or ≥ 20 letters generated; iterate if 50–300; kill/re-angle if < 50 after indexing confirmed.
- **Status:** live in repo (2026-10-22, 16:50). Pages: `/ees-record-wrong/` (kit + Article 52 letter generator EN/FR), `/schengen-90-180-calculator/` (pre/post-EES log + planner, unit-tested engine), `/ees-checker-not-ok/` (6-cause diagnostic guide), `/fr/ees-sortie-non-enregistree/` (French landing).
- **Evidence gathered:** Which? 15 Oct 2026 (false Not OK, counter running at home, pre-EES days excluded); Travelling for Business 21 Aug 2026 (EES checks suspended at busy borders → no exit record; FCDO says ask for correction at next crossing); Rick Steves forum Aug–Sep 2026 (FCO, Prague exits missed; message "cannot currently be calculated due to temporary incomplete data"); KMar procedure (45 days); Wego guide (Art. 52 timelines); Kohen Avocats (French OQTF consequences).

### EXP-002 — Official travel-authorisation site checker (EN + FR)
- **Hypothesis:** People about to pay for a UK ETA / ESTA / eTA / "ETIAS" search "site officiel ETA Royaume-Uni", "ESTA official site", "is X legit". A link checker + real price table beats static articles and directly prevents losses. ETIAS presale scams continue while the launch is postponed (2027).
- **Pages:** `/official-travel-authorisation-checker/`, `/fr/autorisation-voyage-site-officiel/`
- **Facts (checked 22 Oct 2026):** UK ETA £20 since 8 Apr 2026 (gov.uk/eta, app), 2 yrs; ESTA ≈ US$40 (VisasNews: $40.27 → $40.62 from 16 Oct 2026, single source → shown as "about $40"); Canada eTA CA$7 (canada.ca); ETIAS €20, 3 yrs, NOT operational, delayed to 2027 (Travel Market Report 11 Aug 2026, TPG 8 Jul 2026).
- **Metric / thresholds (review ~2026-12-21):** organic visits; keep ≥ 300/month, iterate 50–300, re-angle < 50 after indexing.
- **Risk:** prices change → re-verify monthly; this page must never be wrong on a price.
- **Monetization idea (not activated):** none on this page — trust is the asset. Possibly later a clearly-labelled travel insurance or eSIM affiliate on a separate page.

## Waiting on Marine
- [ ] Install the Claude GitHub App on `mweber42/business-training` (push access refused at 16:40).
- [ ] Enable GitHub Pages (Settings → Pages → branch `main`, folder `/root`).
- [ ] Legal notice details: SIRET, contact email (dedicated lab address recommended), postal address to display (domiciliation possible).
- [ ] Later: cookieless analytics account (e.g. GoatCounter, public stats page so the lab can read it), Google Search Console verification, custom domain (~10 €/yr).

## Later list
- French version of EXP-001.
- ETIAS checker at launch.
- Printable PDF chronology export.

## Log
- 2026-10-22 16:35 — Repo attached (read OK, push refused: GitHub App missing). Cloned empty repo.
- 2026-10-22 16:39 — Marine installed the GitHub App: push works.
- 2026-10-22 16:45 — EXP-001 v1 pushed (kit, calculator, legal, privacy, about, sitemap, robots). Browser-tested at 390px: no JS errors; calculator numbers hand-checked (73 used / latest exit 8 Nov / earliest 14-day entry 19 Nov for test data).
- 2026-10-22 16:50 — Added Not OK diagnostic guide + French landing page.
- 2026-10-22 17:05 — EXP-002 built and pushed (EN/FR). GitHub Pages not yet reachable (Marine to enable in Settings → Pages).
