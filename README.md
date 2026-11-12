# Anto Jeries A — Portfolio

A responsive personal portfolio for Anto Jeries A, a first-year B.Tech Computer Science student and aspiring software developer. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and lucide-react. The contact form uses Resend to deliver messages to `jeriesanto@gmail.com`.

## Features

- Responsive dark-themed portfolio with sticky navigation, reduced-motion support, and keyboard focus styles.
- Animated introduction, typed headline, code terminal, skills, projects, education, and contact sections.
- Data-driven skill and project cards with status/technology filters.
- Contact form with browser-side and server-side validation and explicit delivery error states.
- SEO metadata, Open Graph and Twitter cards, theme color, and a site icon.
- Static rendering for the portfolio page and a serverless contact API route.

## Project structure

```text
app/
  api/contact/route.ts    Contact validation and Resend delivery
  globals.css             Global styles, theme, and responsive components
  icon.svg                Site icon
  layout.tsx              Root layout and SEO metadata
  page.tsx                Portfolio sections and page content
components/
  ContactForm.tsx         Accessible contact form
  Hero.tsx                Animated intro and terminal card
  Navbar.tsx              Responsive sticky navigation
  ProjectCard.tsx         Reusable project card
  ProjectsGrid.tsx        Project filters and card grid
  Section.tsx             Shared section heading/layout
  SkillCard.tsx           Reusable skill card
data/
  education.ts            Degree and currently learning items
  projects.ts             Project entries and optional links
  skills.ts               Typed skills data
.env.example              Contact and canonical URL variables
```

## Requirements

- Node.js 20.9 or newer
- npm
- A Resend account and API key to enable contact-form delivery

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

On PowerShell, replace the copy command with `Copy-Item .env.example .env.local`. Open [http://localhost:3000](http://localhost:3000). Add your Resend values to `.env.local` to enable email delivery. Without them, the site works normally and the form reports that it is not configured.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | For contact form | API key from Resend |
| `CONTACT_FROM_EMAIL` | For contact form | Sender address or domain verified with Resend |
| `CONTACT_TO_EMAIL` | No | Destination inbox; defaults to `jeriesanto@gmail.com` |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public canonical URL used for Open Graph metadata |

Never commit `.env.local` or production API keys. Only the site URL uses the `NEXT_PUBLIC_` prefix; email credentials stay on the server.

## Update portfolio content

- **Skills:** edit the typed array in `data/skills.ts`. Each skill includes a name, description, category, and supported icon key.
- **Projects:** add or edit entries in `data/projects.ts`. Supply a real `githubUrl` or `demoUrl` to show the corresponding card button. The project grid creates technology filters from the data automatically.
- **Education:** update the degree details and `currentlyLearning` list in `data/education.ts`.
- **Profile and social links:** update the About copy and contact details in `app/page.tsx`.
- **Metadata:** change the page title and sharing descriptions in `app/layout.tsx`.

The supplied project information did not include repository or live-demo URLs, so those links are intentionally unset instead of pointing to guessed destinations.

## Contact API

`POST /api/contact` accepts JSON with `name`, `email`, and `message`. The route checks field types, email shape, and length limits before sending a plain-text email with Resend. A successful request returns `200`; invalid input returns `400`; missing Resend configuration returns `503`; and provider delivery failures return `502`. The visitor's email is set as the reply-to address. The form does not claim success when mail configuration or delivery fails.

## Check and build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

1. Import the Git repository into [Vercel](https://vercel.com/new) or deploy the project with the Vercel CLI.
2. Use the detected Next.js framework settings and `npm run build` as the build command. Use Node.js 20.9 or newer.
3. In **Project Settings → Environment Variables**, add `RESEND_API_KEY` and `CONTACT_FROM_EMAIL`. Optionally add `CONTACT_TO_EMAIL` and `NEXT_PUBLIC_SITE_URL`. Enable the variables for the required environments.
4. Verify the sender address/domain with Resend. Resend's `onboarding@resend.dev` sender is limited to test delivery; use a verified sender for production.
5. Deploy. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain and redeploy if that URL changes.
6. Submit a test message on the deployed site and confirm it arrives at the configured destination.
