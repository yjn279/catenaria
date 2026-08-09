import { catenaryPath } from '../../lib/catenary'

// 節と節を区切る控えめな造形として使う。ページ全体でこの1つの形に揃える。
const CURVE_PATH = catenaryPath(240, 28, 0.42, 48)

// 曲線の高さ指定（lp-curve）と、区切りの余白指定（lp-divider）を別々の入れ物に分ける。
// 同じ要素に両方かけると、余白がsvgの高さ指定を押しつぶし曲線が消える。
export function Curve() {
  return (
    <div className="lp-divider">
      <svg
        className="lp-curve"
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
    </div>
  )
}
