import { readdirSync, readFileSync, statSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import { render } from '@testing-library/react'
import { createElement } from 'react'
import App from '../App'

// 図解の命令文（image-prompts/ 配下）は、絵に焼き込む文字列を「禁止事項:」の行に
// 「」で並べる（IMAGE-GENERATION.md の作法）。この文字列とその画像の説明文（alt）が
// 食い違うと、絵だけ直して説明文が古いまま、あるいは説明文だけ直して絵が古いままの
// 状態を誰も気づけない。焼き込み文字は別の場所へ書き写さず、命令文を出どころとする。
const ROOT = resolve(import.meta.dirname, '../../..')
const PROMPTS_DIR = join(ROOT, 'image-prompts')

// 対象の一覧は人が書き並べず、image-prompts/ 配下の *.prompt.txt を機械的に数え上げる。
function collectPromptFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) return collectPromptFiles(path)
    return entry.endsWith('.prompt.txt') ? [path] : []
  })
}

// 「禁止事項:」の行のうち、最初の「以外」より前に並ぶ「」だけを焼き込み文字として扱う。
// それより後ろの「」は別の注意書き（例:「公開」の語だけを単独で置くな）であり、焼き込み文字ではない。
function extractBurnedStrings(promptPath: string): string[] {
  const line = readFileSync(promptPath, 'utf-8')
    .split('\n')
    .find((l) => l.startsWith('禁止事項:'))
  if (line === undefined) throw new Error(`${promptPath}: 「禁止事項:」の行が無い`)
  const boundary = line.indexOf('以外')
  const scope = boundary === -1 ? line : line.slice(0, boundary)
  const words = [...scope.matchAll(/「([^」]+)」/g)].map((m) => m[1])
  if (words.length === 0) throw new Error(`${promptPath}: 焼き込み文字が「」で見つからない`)
  return words
}

// その画像を実際に使う <img> の alt を、レンダリングした結果から読む
// （説明文の置き場は節ごとに異なるため、画像の src で一意に引く）。
function altFor(imageName: string): string {
  const { container } = render(createElement(App))
  const img = container.querySelector(`img[src="/lp/${imageName}.webp"]`)
  if (!img) throw new Error(`/lp/${imageName}.webp を使う img が見つからない`)
  return img.getAttribute('alt') ?? ''
}

const PROMPT_FILES = collectPromptFiles(PROMPTS_DIR)

it('image-prompts 配下から命令文が1件以上数え上げられる', () => {
  expect(PROMPT_FILES.length).toBeGreaterThan(0)
})

for (const path of PROMPT_FILES) {
  const imageName = basename(path).replace(/\.prompt\.txt$/, '')
  it(`${imageName}.webp: 命令文が焼き込む文字列が、説明文に一字一句すべて含まれる`, () => {
    const burned = extractBurnedStrings(path)
    const alt = altFor(imageName)
    for (const word of burned) {
      expect(alt).toContain(word)
    }
  })
}
