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

## Analytics

The site uses Google Analytics (GA4, measurement ID `G-L74JBX1R42`) to measure visits and how many visitors reach the contact form. The tag is only loaded in a production build (`import.meta.env.PROD`), so `pnpm dev` and `pnpm test` never send data. All tracking logic lives in `src/lib/analytics.ts`.

| Event | When | Extra data |
| --- | --- | --- |
| `page_view` | A page is viewed (recorded automatically by GA4) | — |
| `contact_submit_success` | The contact form submission succeeds | — |
| `contact_submit_error` | The contact form submission fails | — |
| `email_click` | The `catenaria.dev@gmail.com` link is clicked | `location`: `contact` or `about` |
| `cta_click` | A call-to-action button is clicked | `location`: `header` or `hero`; `destination`: `contact` or `services` |
| `nav_click` | A header navigation link is clicked | `destination`: the target section |

No personal data (name, email address, message content) is ever recorded — only the fact that an action happened.

## 無料制作の案内ページ（`/lp`）

営業メールで「ホームページ・LPを無料で制作します」と伝えた相手が、そのまま内容を理解できるように作った、会社サイトとは別の1枚のページ。公開先は `https://catenaria.dev/lp`。会社サイトのトップページ（`/`）はこのページのために変更していない。

### 置き場所と作り

会社サイトの部品を一切持ち込まず、このページだけで完結する形にしている。理由は、読み込む量をなるべく減らすため。

| 中身 | 場所 |
| --- | --- |
| 入口のページ | `lp/index.html` |
| 画面の中身 | `src/lp/` 以下（会社サイトの `src/sections/` などとは別） |
| 見た目の指定 | `src/lp/styles.css`（会社サイトの `src/styles/globals.css` は使わない） |
| 画像 | `public/lp/`（すべて生成した画像。実在の人物・実在の職場の写真ではない） |

問い合わせフォームは会社サイトと同じ送信先（Web3Forms）を使い、新しい送信先は作っていない。フォームの中に見えない項目 `page`（値は `lp`）を持たせてあり、これで「会社サイトからの問い合わせ」と「このページからの問い合わせ」を見分けられる。

### 何を測っているか

新しい仕組みは足さず、会社サイトと同じ計測（`src/lib/analytics.ts`、Google Analytics）をそのまま使っている。

| 記録される出来事 | いつ記録されるか |
| --- | --- |
| ページを見た | `/lp` を開いたとき。会社サイトのページとは開いたアドレス（パス）の違いで見分けられる |
| ボタンを押した | 「相談する」ボタンを押したとき |
| 問い合わせを送れた・送れなかった | フォームを送信したとき |

氏名・メールアドレス・相談内容は記録していない。

### 手元の環境で問い合わせを試すときの注意

`pnpm dev` などで手元から開いた `/lp` でフォームを送信すると、送信先（Web3Forms）が許可していない場所からの送信として拒否される。これは会社サイトの問い合わせフォームにも前から共通する仕様であり、`/lp` だけの制限ではない。実際に送信が届くことは、本番のアドレス（`https://catenaria.dev`）に公開したあとで確かめる。

### 品質の確認

`/lp` が守るべき決めごと（無料の範囲を隠さず書く、存在しない実績を書かない、読み込む量の上限を超えないなど）は、このリポジトリの外にある検査の道具（`lp-self-checks.mjs`、事実と基準は `catenaria/lp-system/` 配下）で確認する。決めごとの詳しい中身は、その道具と資料が正であり、ここには写さない。

図版に焼き込んだ文字とその画像の説明文（alt）が一致しているかどうかも、この検査に含まれる。焼き込む文字列の原稿は `catenaria/lp-system/figures/*.json` に置かれており、原稿・台帳（`catenaria-self.gate.json` の申告）・説明文（alt）の三者を機械が突き合わせる。このリポジトリの中に、それとは別の照合の仕組みは持たない。

実行のしかた（`catenaria` リポジトリ側で動かす）:

```sh
cd /path/to/catenaria
node scripts/lp-self-checks.mjs \
  --gate lp-system/briefs/catenaria-self.gate.json \
  --site /path/to/catenaria-lp \
  --route /lp --out <結果を書き出す場所>
```

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
