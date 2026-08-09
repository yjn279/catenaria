import { AnalyticsEvent, track } from '../../lib/analytics'

/** 画面に貼り付いて付いてくる、常設の行動の入口。文言の先頭に必ず「制作は無料」を含める。 */
export function StickyCta() {
  return (
    <div className="lp-sticky-cta">
      <span className="lp-sr-only">スクロールしても表示され続けるお問い合わせボタンです</span>
      {/* biome-ignore lint/a11y/useValidAnchor: 同一ページ内の遷移にクリック計測を添えたアンカー */}
      <a
        href="#contact"
        className="lp-btn lp-btn-accent lp-sticky-cta-link"
        data-cta="sticky"
        onClick={() =>
          track(AnalyticsEvent.CtaClick, { location: 'sticky', destination: 'contact' })
        }
      >
        制作は無料。今すぐメールでご相談ください
      </a>
    </div>
  )
}
