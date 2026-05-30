# CATENARIA — Landing Page

Production-ready React + Vite + TypeScript landing page for CATENARIA, deployable to Cloudflare Workers as a static site.

## Development

```sh
npm install
npm run dev
```

The dev server starts at `http://localhost:5173` with Hot Module Replacement.

## Build

```sh
npm run build
```

Output is written to `dist/`. Runs TypeScript compilation (`tsc -b`) before bundling with Vite.

## Deploy

```sh
npm run deploy
```

Builds the project and deploys to Cloudflare Workers via `wrangler deploy`. Requires Cloudflare credentials configured locally (`wrangler login` or environment variables).

## Testing

```sh
npm test
```

Runs Vitest in watch mode. For a single non-interactive run:

```sh
npm test -- --run
```

Tests cover all 8 main components/sections with `@testing-library/react` assertions.

## Lint

```sh
npm run lint
```

ESLint with TypeScript-ESLint, react-hooks, and react-refresh rules.
