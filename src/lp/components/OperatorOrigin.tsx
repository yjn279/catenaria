import { OPERATOR } from '../content'
import { FullImage } from './FullImage'

/**
 * 屋号「CATENARIA」の由来。長い説明のため、送信ボタンより後ろの現在の位置に残す。
 * 会社サイトへのリンクは送信ボタンより前の `OperatorInfo` に1本だけ置く。
 */
export function OperatorOrigin() {
  return (
    <div className="lp-operator-story">
      <p className="lp-operator-origin">{OPERATOR.origin}</p>
      <FullImage
        className="lp-operator-image"
        src="/lp/catenary.webp"
        width={1672}
        height={941}
        alt="生成り色の紙の上で、細い鎖が二つの木のピンに掛かり自重で垂れて懸垂線を描いている情景"
        loading="lazy"
      />
    </div>
  )
}
