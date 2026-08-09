import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

// /lp は「見積」「契約」に類する語を使わない。無料の境目は本文で語ることで伝え、
// 見積り依頼や契約手続きを連想させる言葉には頼らない。
const FORBIDDEN_WORDS = [
  'お見積',
  '見積り',
  '見積もり',
  '見積書',
  'ご契約',
  '契約締結',
  '契約期間',
  '業務委託契約',
  '準委任',
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
  join(ROOT, 'src/lib/analytics.ts'),
  join(ROOT, 'src/lib/catenary.ts'),
  join(ROOT, 'src/lib/web3forms.ts'),
]

it('/lp が読み込む一式に「見積」「契約」に関する語が無い', () => {
  const violations = TARGET_FILES.flatMap((path) => {
    const content = readFileSync(path, 'utf-8')
    return FORBIDDEN_WORDS.filter((word) => content.includes(word)).map(
      (word) => `${relative(ROOT, path)}: "${word}"`,
    )
  })
  expect(violations).toEqual([])
})
