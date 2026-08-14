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

#### 検査を走らせると3件が赤になる。これは `/lp` の作りの欠陥ではない

この検査を実行すると、`gate.json` に3件の失敗が残る。次に検査を走らせた人が同じ赤を見て理由を探し直さずに済むよう、内訳と確かめ方をここに残す。

| 内容 | 拾われた言葉 |
| --- | --- |
| 「見積」に当たる言葉が制作の流れの中にある | お見積 |
| 「契約」に当たる言葉が制作の流れの中にある | ご契約 |
| 裏付けの無い数字がある | 3102 |

**上2件（見積・契約）** — `/lp` のどのファイルにも「お見積」「ご契約」という言葉は無い（`src/lp/__tests__/forbidden-terms.test.ts` が、この状態が崩れたら落ちる試験として保っている）。この検査は、配信物一式（`/` と `/lp` の両方をまとめて組み上げたもの）から日本語の文章をすべて拾ってから検査にかけており、拾う範囲がページごとに分かれていない。そのため、会社サイトのトップページ（`/`）にある「お見積もり」「ご契約」という言葉が、`/lp` の検査にもそのまま巻き込まれる。トップページは有償の制作を売るページであり、この言葉は事実として正しく、今回`/lp` を作るために書き換える対象ではない。

確かめ方: 組み上げた結果の中から、`/lp` が実際に読み込むファイルだけを取り出して調べれば、これらの言葉が無いことが分かる。

```sh
pnpm build
grep -l "お見積\|ご契約" dist/assets/*.js dist/assets/*.css
# → 出てくるのは main-*.js（トップページ用）だけで、lp-*.js / lp-*.css には出てこない
```

**3件目（数字の3102）** — これは検査の道具の中で、2つの検査が互いに矛盾しているために起きる、道具側の作りの問題である。

- 一方の検査は、営業メールの差出人と同じ住所（`神奈川県海老名市国分北1-35-3 102`）がページの中に1か所にまとまって書かれていることを求める。
- もう一方の検査は、ページに表示される文字から空白を取り除いたうえで3桁以上の数字の並びを探し、許可した数字の一覧に無いものを裏付けの無い数字として咎める。
- 許可する数字の一覧を作るときだけは、空白を取り除く**前**の差出人の住所から数字を拾っている。そのため一覧に入るのは `1` `35` `3` `102` の4つで、`3102` という並びは入らない。
- ところがページ側で住所から空白を取り除くと、「3」と「102」がくっついて `3102` という4桁の並びが生まれ、これが許可した一覧に無い数字として咎められる。

住所の書き方をどう変えても、住所をまとめて書く検査を通せば数字の検査が落ち、数字の検査を通せば住所をまとめて書く検査が落ちる。書き方の工夫では両立しない。道具の側を直すなら、許可する数字の一覧を作るときにも、住所から空白を取り除いてから数字を拾うようにすれば1行の修正で解消する。

確かめ方（住所の文字列と、2つの検査が使っている数字の拾い方を、実際に手元で試す）:

```sh
node -e '
const raw = "神奈川県海老名市国分北1-35-3 102";
const normalize = s => s.normalize("NFKC").replace(/\s+/g, "");
console.log("ページに書く文字列（空白を除いた形）:", normalize(raw));
console.log("運営者情報の検査が拾う数字（住所の空白を除く前）:", raw.match(/[0-9]+/g));
console.log("裏付けの無い数字の検査が拾う数字（表示文字の空白を除いた後）:", normalize(raw).match(/[0-9]{3,}/g));
'
```

3件とも、`/lp` のページ自身を直しても消えない性質のものであることを、上記の方法で確かめてある。

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
