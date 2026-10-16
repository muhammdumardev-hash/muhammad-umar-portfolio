# Muhammad Umar — Personal Portfolio

Premium dark-themed portfolio for a Generative AI / AI-ML focused Computer Science student.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide Icons

## Quick start

```bash
cd muhammad-umar-portfolio
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional local preview of the build
```

## Deploy

### Vercel

1. Push this folder to a GitHub repository.
2. Import the repo in [Vercel](https://vercel.com).
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
4. Deploy.

### Netlify

1. Push to GitHub (or drag the `dist` folder after `npm run build`).
2. In Netlify: Build command `npm run build`, publish directory `dist`.
3. Deploy.

## Customize content

**Single source of truth:** `src/data/config.ts`

| What | How |
|------|-----|
| Project demo / code links | Edit `demoUrl` and `codeUrl` on each project. Empty string hides the button and shows “unavailable”. |
| Contact email, phone, LinkedIn, GitHub | Top of `config.ts` → `siteConfig` |
| Download CV | 1. Put your PDF at `public/cv/Muhammad_Umar_CV.pdf`<br>2. Set `cvAvailable: true` in `siteConfig` |
| Skills, experience, certs, education | Arrays / objects in the same config file |

Never invent repository or demo URLs — leave them blank until real links exist.

## Project structure

```
src/
  components/   Navbar, Footer, ProjectModal, visuals, …
  sections/     Hero, About, Skills, Projects, Experience, Contact
  data/         config.ts  ← edit here
  App.tsx
  main.tsx
  index.css     Tailwind + design tokens
public/
  favicon.svg
  cv/           Place CV PDF here
```

## Accessibility & quality

- Semantic HTML and visible focus states
- Keyboard-friendly modal (Escape to close)
- `prefers-reduced-motion` respected
- Sticky nav with active section highlight
- Responsive mobile menu
- SEO meta tags and Open Graph in `index.html`

## License

Personal portfolio — use and adapt freely for your own profile.
