# Tayssir Saidi — AI & Data Science Portfolio

This is a **single-page React and Vite portfolio** for Tayssir Saidi, positioned for freelance work in AI automation, data science, machine learning, web applications, and security systems.

The app is intentionally local-first. It has no analytics, no external runtime service, no platform-specific UI code, no database, and no separate website pages. The light/dark mode preference is stored only in the visitor's browser.

## Quick start

Install Node.js 18 or newer, then run:

```bash
pnpm install
pnpm run dev
```

Open the local URL printed by Vite. To create a production build, run:

```bash
pnpm run check
pnpm run build
pnpm run preview
```

`npm` works as well if you prefer it: replace `pnpm install` with `npm install`, and use `npm run ...` for the other commands.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to `main`. It also runs the type check before publishing.

1. Push this project to the `main` branch of your GitHub repository.
2. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Open the repository's **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish.
4. GitHub will show the published URL under **Settings → Pages** and in the deployment workflow.

The workflow builds the Vite app and publishes the generated `dist` folder. The Vite base path is set automatically from the GitHub repository name, so the site works both as a project page and as a `username.github.io` site. You can also start a deployment manually from the **Actions** tab.

## Where to edit

| File | What to change |
| --- | --- |
| `client/src/pages/Home.tsx` | All visible portfolio text, services, projects, skills, contact links, navigation, and theme-toggle behavior |
| `client/src/index.css` | Colors, typography, spacing, layout, responsive behavior, hover effects, and light/dark theme variables |
| `client/index.html` | Page title, description, and favicon reference |
| `client/public/favicon.svg` | The small AI/data-science-inspired browser icon |

The most important file is `client/src/pages/Home.tsx`. The page is kept in one component so content is easy to find and update.

## Contact details

The current email address and phone number come from the supplied CV and are used as regular `mailto:` and `tel:` links. Replace them directly in `Home.tsx` if your contact details change.

## Design notes

The visual direction is a calm, professional freelancer interface: violet and pink accents, generous spacing, readable typography, and a CSS-built neural-network visual. The theme switcher is the sun/moon button in the header.

## Project structure

```text
client/
  index.html
  public/
    favicon.svg
  src/
    App.tsx
    index.css
    main.tsx
    pages/
      Home.tsx
vite.config.ts
package.json
tsconfig.json
```

The project intentionally avoids separate routes and unnecessary UI abstractions. If you later need a contact form, connect one explicitly to a form provider or backend; the current email CTA is intentionally dependency-free.

## License

MIT. Update this section if you choose a different license before publishing the site.

## Important content note

Only information from the supplied CV is used for the portfolio content. No customer testimonials, ratings, reviews, or fabricated results are included.
