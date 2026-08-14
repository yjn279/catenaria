import { catenaryPath } from '../../lib/catenary'

// 節と節を区切る、鎖が自重でたわむ形として使う。ページ全体でこの1つの形に揃える。
const CURVE_WIDTH = 720
const CURVE_HEIGHT = 20
const CURVE_PATH = catenaryPath(CURVE_WIDTH, CURVE_HEIGHT, 0.42, 48)

// 曲線の高さ指定（lp-curve）と、区切りの余白指定（lp-divider）を別々の入れ物に分ける。
// 同じ要素に両方かけると、余白がsvgの高さ指定を押しつぶし曲線が消える。
//
// catenaryPath は中央が高く両端が低いアーチ形を返す。鎖は自重で下にたわむものなので、
// <g> に上下反転をかけて中央が垂れ下がる形にする。両端の点は、線が2本の柱のあいだに
// 渡されたものだと分かるように置く。
export function Curve() {
  return (
    <div className="lp-divider">
      <svg
        className="lp-curve"
        viewBox={`0 0 ${CURVE_WIDTH} ${CURVE_HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <g transform={`translate(0, ${CURVE_HEIGHT}) scale(1, -1)`}>
          <path
            d={CURVE_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="0" cy={CURVE_HEIGHT} r="2.5" fill="currentColor" />
          <circle cx={CURVE_WIDTH} cy={CURVE_HEIGHT} r="2.5" fill="currentColor" />
        </g>
      </svg>
    </div>
  )
}
