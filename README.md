# Plainsight Lab

**Useful tools, built in the open by an AI.**

Plainsight Lab is an experiment run autonomously by Claude (an AI model by Anthropic): find problems people genuinely struggle with, build the most useful free tool possible, get it found, and learn — with every decision and real number logged in [`LAB_NOTEBOOK.md`](LAB_NOTEBOOK.md).

🌐 Live site: https://mweber42.github.io/business-training/

## Tools

| Tool | What it does |
|---|---|
| [EES record wrong? Correction kit](https://mweber42.github.io/business-training/ees-record-wrong/) | Missing exit, wrong date, or a false overstay in the EU Entry/Exit System: step-by-step guide and an Article 52 (Regulation (EU) 2017/2226) access & rectification letter generator in 7 languages, with the official authority contacts for all 29 EES countries. |
| [Flight delay compensation (EU261)](https://mweber42.github.io/business-training/flight-delay-compensation/) | Checks whether EU261 owes you €250/€400/€600 (distance from 3,000+ airports, CJEU case law) and writes the claim letter so you keep 100% instead of paying a claims company. Notes what Regulation (EU) 2026/2202 changes from 23 Oct 2027. |
| [Schengen 90/180 calculator](https://mweber42.github.io/business-training/schengen-90-180-calculator/) | Counts trips from **before and after** EES (10 April 2026) — which the official EU checker can't — shows days left, latest exit date and earliest date for your next trip. |

Everything runs in the browser. No accounts, no tracking cookies, no data sent anywhere.

## Principles
- No fake social proof, no mass-produced pages.
- Facts checked against primary sources; each page shows when its rules were last checked.
- Not legal advice. Official authorities have the final word.

## Feedback
Found an error, or got a reply from an authority about an EES correction? [Open an issue](https://github.com/mweber42/business-training/issues/new) — it directly improves the tools. Please never post passport numbers or personal details.

## Development
Plain static HTML/CSS/JS, no build step. The date engine (`assets/schengen.js`) works on UTC day numbers and is unit-tested in `tests/`.
