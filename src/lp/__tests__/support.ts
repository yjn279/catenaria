import { readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { render } from '@testing-library/react'
import { createElement } from 'react'
import App from '../App'

// /lp のソース一式のルート（このファイルから3階層上）。
export const ROOT = resolve(import.meta.dirname, '../../..')

// ディレクトリを再帰的に走査し、ファイルのパスを集める。
// skipDir でディレクトリを、includeFile でファイルを絞り込める（既定はすべて含む）。
export function collectFiles(
  dir: string,
  options: { skipDir?: (entry: string) => boolean; includeFile?: (entry: string) => boolean } = {},
): string[] {
  const { skipDir = () => false, includeFile = () => true } = options
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) return skipDir(entry.name) ? [] : collectFiles(path, options)
    return includeFile(entry.name) ? [path] : []
  })
}

// /lp を実際にレンダリングした DOM のコンテナ。ページに実際に表示される文字を読む試験が使う。
export function renderApp(): HTMLElement {
  return render(createElement(App)).container
}
