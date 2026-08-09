import { catenaryPath } from '../../lib/catenary'

// 節と節を区切る控えめな造形として使う。ページ全体でこの1つの形に揃える。
const CURVE_PATH = catenaryPath(240, 28, 0.42, 48)

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
