# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `npm run dev --turbopack` - Start development server with Turbopack for faster builds
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

### Project Structure

This is a Next.js 15 application using the App Router architecture with the following structure:

- `app/` - App Router directory containing:
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Homepage component
  - `globals.css` - Global styles with Tailwind CSS and CSS variables

### Technology Stack

- **Framework**: Next.js 15.4.4 with App Router
- **React**: Version 19.1.0
- **Styling**: Tailwind CSS v4 with PostCSS integration (USE Context7 to fetch docs from v4!)
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **TypeScript**: Full TypeScript support with strict mode enabled
- **Linting**: ESLint with Next.js config and TypeScript support

### Configuration Files

- `tsconfig.json` - TypeScript config with `@/*` path mapping for imports
- `eslint.config.mjs` - ESLint flat config extending Next.js and TypeScript rules
- `postcss.config.mjs` - PostCSS configured for Tailwind CSS v4
- `next.config.ts` - Basic Next.js configuration

### Styling Approach

The project uses Tailwind CSS v4 with a custom theme configuration in `globals.css`:

- CSS variables for consistent theming (`--background`, `--foreground`)
- Automatic dark mode support via `prefers-color-scheme`
- Font variables integrated with Tailwind theme
