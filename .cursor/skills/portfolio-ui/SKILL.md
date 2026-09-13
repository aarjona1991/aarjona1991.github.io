---
name: portfolio-ui
description: Build and change this React portfolio UI (CRA, Tailwind, atoms/molecules, i18n). Use when editing Hero, Navigation, Home, pages, components, layout, or client-visible behavior.
---

# Portfolio UI

Create React App (`react-scripts`) + TypeScript + Tailwind. Use `yarn`, not npm.

## Component layout

```
src/pages/Home.tsx
src/pages/components/atoms/          # Avatar, LanguageSwitcher
src/pages/components/molecules/      # Navigation, Hero, About, Skills, Projects, Contact, Footer
src/contexts/LanguageContext.tsx     # en | es
src/config/personalInfo.ts           # env-backed fallbacks
```

Colocate molecule files (`Hero.tsx`, `heroHooks.ts`). Export through the folder `index.ts`.

Keep hook return shapes that consumers already destructure. Hero expects `nameData`, `fullNameData`, `textsData`, `descriptionData`, `greetingData`, `contactButtonData`, `projectsButtonData`, `socialLinksData`.

## Language

`useLanguage()` provides `language` and `t()`. Firebase copy is keyed by `language`. UI chrome strings may come from `src/locales/{en,es}.json`. Do not hard-code a single locale for section content that already lives in RTDB.

## Visual changes

After UI, layout, routing, or rendered-data changes, verify in the browser (desktop and a mobile width when layout is involved). Confirm the changed flow, not only a screenshot.

Static fallbacks stay in `personalInfo` / `.env` (`REACT_APP_*`). Prefer RTDB for live section copy when the section already reads from Firebase.
