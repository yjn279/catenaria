# CATENARIA — Landing Page

Production-ready React + Vite + TypeScript landing page for CATENARIA, deployable to Cloudflare Workers as a static site.

## Setup

This project uses [pnpm](https://pnpm.io/) as the package manager. The recommended way to install pnpm is via [corepack](https://nodejs.org/api/corepack.html):

```sh
corepack enable
corepack prepare pnpm@10.28.0 --activate
```

Then install dependencies:

```sh
pnpm install
```

The `postinstall` lifecycle script automatically registers the pre-commit hook via `simple-git-hooks`.

> **Note (git worktree users):** If you are working inside a git worktree, run the following once to configure the hooks path before `pnpm install`:
>
> ```sh
> git config --local core.hooksPath "$(git rev-parse --git-path hooks)"
> ```

## Development

```sh
pnpm dev
```

The dev server starts at `http://localhost:5173` with Hot Module Replacement.

## Build

```sh
pnpm build
```

Output is written to `dist/`. Runs TypeScript compilation (`tsc -b`) before bundling with Vite.

## Deploy

```sh
pnpm deploy
```

Builds the project and deploys to Cloudflare Workers via `wrangler deploy`. Requires Cloudflare credentials configured locally (`wrangler login` or environment variables).

## Testing

```sh
pnpm test
```

Runs Vitest in watch mode. For a single non-interactive run:

```sh
pnpm test -- --run
```

Tests cover all 8 main components/sections with `@testing-library/react` assertions.

## Lint & Format

This project uses [Biome](https://biomejs.dev/) for linting and formatting.

```sh
pnpm lint        # Check for lint errors (biome check .)
pnpm lint:fix    # Auto-fix lint errors (biome check --write .)
pnpm format      # Format files (biome format --write .)
```

Biome runs automatically on staged files via a pre-commit hook (registered by `simple-git-hooks` during `pnpm install`).

## Release & Versioning

This project uses [Release Please](https://github.com/googleapis/release-please) for automated releases.

- Every push to `main` triggers the Release Please GitHub Actions workflow.
- Release Please collects [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore!:`, etc.) and opens a Release PR when a releasable change is detected.
- Merging the Release PR automatically creates a GitHub Release and a `v<semver>` tag, and bumps `version` in `package.json`.

**Commit message convention (recommended):**

| Prefix | Version bump |
| --- | --- |
| `feat:` | minor |
| `fix:` | patch |
| `chore!:` / `feat!:` | major |
| `chore:` / `docs:` / `style:` / `refactor:` / `test:` | no bump |

> **Repository setting required:** Go to **Settings → Actions → General → Workflow permissions** and select **Read and write** so that Release Please can create PRs and tags.
>
> Release Please may not create a Release PR immediately after the first few non-Conventional-Commits pushes. This is expected behavior.
