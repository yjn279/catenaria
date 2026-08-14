import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

// /lp は「契約」に類する語を一律に使わない。無料の境目は本文で語ることで伝え、
// 契約手続きを連想させる言葉には頼らない。
const CONTRACT_WORDS = ['ご契約', '契約締結', '契約期間', '業務委託契約', '準委任']

// 「見積」は、公開や運用をこちらに任せる場合について述べる文脈でだけ使ってよい
// （ブリーフの禁止事項、台帳 catenaria-self.gate.json の quotation-in-production と同じ扱い）。
// 制作の流れの中で単独に使うと、無料の約束と噛み合わない。
const QUOTE_WORDS = ['お見積', '見積り', '見積もり', '見積書']
const QUOTE_CONTEXT = /運用|お任せ|任せ|おまかせ|委託/
const CONTEXT_WINDOW = 40

// 屋号の由来・込めた意味は、事実源（catenaria-free-lp.md の Facts 表）が定める
// 逐語だけを許す。見た目の指示書（ART-DIRECTION-SELF.md）にある言い回しは、
// 見え方を決めるためのものであって、事実として書いてよいものではない。
const BRAND_MEANING_WORDS = [
  '自然の摂理',
  '合理的で美しい',
  '手を離したときに現れる',
  '誰かが定めた形ではな',
  '無理のない形',
  'あるべき姿',
  '力の流れ',
  '最も強い形',
]

const ROOT = resolve(import.meta.dirname, '../../..')

function collectFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    if (entry === '__tests__') return []
    const path = join(dir, entry)
    return statSync(path).isDirectory() ? collectFiles(path) : [path]
  })
}

const TARGET_FILES = [
  join(ROOT, 'lp/index.html'),
  ...collectFiles(join(ROOT, 'src/lp')),
  ...collectFiles(join(ROOT, 'src/lib')),
]

const TARGET_CONTENTS = TARGET_FILES.map((path) => ({
  path,
  content: readFileSync(path, 'utf-8'),
}))

function findQuoteWordsOutOfContext(content: string): string[] {
  return QUOTE_WORDS.flatMap((word) => {
    const hits: string[] = []
    let index = content.indexOf(word)
    while (index !== -1) {
      const around = content.slice(
        Math.max(0, index - CONTEXT_WINDOW),
        index + word.length + CONTEXT_WINDOW,
      )
      if (!QUOTE_CONTEXT.test(around)) hits.push(word)
      index = content.indexOf(word, index + 1)
    }
    return hits
  })
}

function findViolations(findWords: (content: string) => string[]): string[] {
  return TARGET_CONTENTS.flatMap(({ path, content }) =>
    findWords(content).map((word) => `${relative(ROOT, path)}: "${word}"`),
  )
}

it('/lp が読み込む一式に「契約」に関する語が無い', () => {
  const violations = findViolations((content) =>
    CONTRACT_WORDS.filter((word) => content.includes(word)),
  )
  expect(violations).toEqual([])
})

it('/lp の「見積」は、運用・お任せの文脈から離れて使われていない', () => {
  const violations = findViolations(findQuoteWordsOutOfContext)
  expect(violations).toEqual([])
})

it('/lp が読み込む一式に、見た目の指示書の言い回しが事実として紛れ込んでいない', () => {
  const violations = findViolations((content) =>
    BRAND_MEANING_WORDS.filter((word) => content.includes(word)),
  )
  expect(violations).toEqual([])
})
