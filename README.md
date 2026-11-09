# Dada Walrus

Public company homepage for Dada Walrus and its AI Key product concept. Static HTML, CSS, and a small script for the footer year. No build tools or backend required. Logo and fonts are served locally; the page has no analytics or tracking scripts.

## Preview

From this directory, run `python3 -m http.server 4173 --bind 127.0.0.1` and visit http://127.0.0.1:4173.

## GitHub Pages

The repository is `dadawalrus/dadawalrus.github.io`. GitHub Pages is already configured to deploy from **main / (root)**. After reviewing locally, commit and push the public site files to `main`. The site will appear at https://dadawalrus.github.io/. No token belongs in the site or its history.

To check the configuration: repository **Settings → Pages → Build and deployment → Deploy from a branch → main → / (root)**. `.nojekyll` allows these static files to be served directly. Deployment may take several minutes.

Official setup: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Public content boundaries

Keep research files in the separate private research workspace. The public product name is AI Key and its intended form factor is a USB-C stick. Do not add model sizes, context limits, throughput targets, hardware dimensions, implementation diagrams, or unreleased product specifications here. Proprietary model protection is a research objective, not a demonstrated capability. Commercial performance, power, cost, and availability remain unestablished.

## Editing

- `index.html`: copy, navigation, contact email, and abstract conceptual illustration.
- `styles.css`: responsive layout, typography, and colors.
- `assets/dada-walrus.svg`: full supplied badge, retained for the favicon and sharing metadata.
- `assets/hand.svg` and `assets/wordmark.svg`: hand and straightened original outlined letters for the header and footer.
- `assets/fonts/`: locally hosted DM Sans and Space Grotesk, licensed under the SIL Open Font License (see included license files).
- `script.js`: footer year, animation controls, and reduced-motion preference.

The brand palette uses navy `#03213B`, cream `#FFF5E6`, and orange `#FF7514`. CSS animates the connection and local session in a laptop-and-USB-C-stick illustration; its pause control stops ambient motion throughout the page. Operating-system reduced-motion settings pause animation by default. The founder’s engineering background is visible in the company section.

The public contact is dadawalrus.labs@gmail.com. `.env` and related environment files are ignored by Git and must never be committed.

The concept demo uses one shared 12-second CSS timeline: AI Key slides into the laptop, the screen detects the device, local inference starts with a pulsing hand indicator and response lines, then the session clears and the key unplugs. Pause freezes all parts together; reduced-motion uses a static connected state. This illustration does not establish actual setup steps or performance.
