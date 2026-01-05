# Alt Shift App

Next.js (App Router) app that helps generate and track job applications. It uses Gemini to draft short cover letters, stores generated applications locally, and keeps a simple progress goal.

## Features
- Cover-letter generator backed by Gemini (`generateApplicationAction` server action).
- Create/regenerate/delete applications; text copy-to-clipboard; local persistence via Zustand + `localStorage`.
- Goal banner/progress in header with a default target of 5 applications.
- Storybook for the shared UI kit.

## Requirements
- Node 18.18+ (Next.js 16) and npm 10 (see `packageManager`).
- Gemini API access.

## Environment
- `GEMINI_API_KEY` (required): Google Generative AI key used by server actions.
- `GEMINI_MODEL` (optional): overrides the model name; defaults to `gemini-2.5-flash`.

## Getting started
1) Install deps: `npm install`
2) Run dev server: `npm run dev`
3) Open `http://localhost:3000` (middleware redirects to `/applications`)

Useful scripts:
- `npm run lint` — ESLint
- `npm run build` — production build
- `npm run storybook` — run component stories locally

## Data & persistence
- Applications are persisted in the browser (`localStorage` key `applications`). Clearing storage will remove saved drafts and generated text.
