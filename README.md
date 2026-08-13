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

実行のしかた（`catenaria` リポジトリ側で動かす）:

```sh
cd /path/to/catenaria
node scripts/lp-self-checks.mjs \
  --gate lp-system/briefs/catenaria-self.gate.json \
  --site /path/to/catenaria-lp \
  --route /lp --out <結果を書き出す場所>
```

#### 検査ツールの既知の誤検知（`/lp` 側の欠陥ではない）

この検査は `gate.json` に3件を失敗として報告するが、いずれも `/lp` 自体の問題ではなく、検査ツール側の作りに起因する誤検知である。

| 内容 | 拾われた言葉 | 原因 |
| --- | --- | --- |
| 「見積」に当たる言葉の検出 | お見積 | 検査は `/` と `/lp` を分けず、配信物一式から日本語の文章をまとめて拾う。会社サイトのトップページ（`/`）にある「お見積もり」が `/lp` の検査にも巻き込まれる。`/lp` 自身にこの言葉は無い。 |
| 「契約」に当たる言葉の検出 | ご契約 | 同上。トップページの「ご契約」が巻き込まれる。`/lp` 自身にこの言葉は無い。 |
| 裏付けの無い数字の検出 | 3102 | 検査ツールは、許可する数字の一覧を住所（`神奈川県海老名市国分北1-35-3 102`）の空白を除く前に作る一方、ページ表示文字列の数字は空白を除いた後に拾う。そのため「3」と「102」が結合した `3102` が一覧に無い数字として誤検知される。 |

`/lp` 自身に「お見積」「ご契約」という言葉が無いことは `src/lp/__tests__/forbidden-terms.test.ts` が保証している。数字の誤検知は検査ツール側（許可する数字の一覧を作る際にも住所から空白を除いてから数字を拾う）を直せば解消する。

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
