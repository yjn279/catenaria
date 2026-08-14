import { STICKY_CTA } from '../content'
import { CtaLink } from './CtaLink'

/** 画面に貼り付いて付いてくる、常設の行動の入口。 */
export function StickyCta() {
  return (
    <div className="lp-sticky-cta">
      <span className="lp-sr-only">スクロールしても表示され続けるお問い合わせボタンです</span>
      <CtaLink location="sticky" label={STICKY_CTA.label} className="lp-sticky-cta-link" />
    </div>
  )
}
