/**
 * 屋号「カテナリー」の由来である曲線（鎖やケーブルが自重で自然にたわむ形）のSVGパスを作る。
 * 会社サイトのロゴ・アニメーションと `/lp` の区切り線が、同じ1つの形を共有する。
 */
export function catenaryPath(
  width: number,
  height: number,
  tautness: number,
  steps: number,
): string {
  const halfWidth = width / 2
  const a = halfWidth * tautness
  const denom = Math.cosh(halfWidth / a) - 1
  let d = ''
  for (let i = 0; i <= steps; i++) {
    const x = -halfWidth + (width * i) / steps
    const y = (height * (Math.cosh(x / a) - 1)) / denom
    d += `${i === 0 ? 'M' : 'L'}${(x + halfWidth).toFixed(2)} ${y.toFixed(2)} `
  }
  return d.trim()
}
