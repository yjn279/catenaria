// 屋号「カテナリー」の由来である曲線（鎖やケーブルが自重で自然にたわむ形）を、
// 節と節を区切る控えめな造形として使う。ページ全体でこの1つの形に揃える。
function buildCurvePath(width: number, height: number, tautness: number, steps: number): string {
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

const CURVE_PATH = buildCurvePath(240, 28, 0.42, 48)

interface CurveProps {
  className?: string
}

export function Curve({ className }: CurveProps) {
  return (
    <svg
      className={['lp-curve', className].filter(Boolean).join(' ')}
      viewBox="0 0 240 28"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={CURVE_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
