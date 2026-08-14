import { AnalyticsEvent, track } from '../../lib/analytics'

type CtaLinkProps = {
  /** 計測と `data-cta` に使う置き場所の名。節と節の間で一意にする。 */
  location: string
  /** ボタンの文言 */
  label: string
  /** `lp-btn lp-btn-accent` に加えて付与するクラス名 */
  className: string
}

/** フォームへ誘う行動の入口。同一ページ内の #contact へ遷移しつつ、クリックを計測する。 */
export function CtaLink({ location, label, className }: CtaLinkProps) {
  return (
    // biome-ignore lint/a11y/useValidAnchor: 同一ページ内の遷移にクリック計測を添えたアンカー
    <a
      href="#contact"
      className={`lp-btn lp-btn-accent ${className}`}
      data-cta={location}
      onClick={() => track(AnalyticsEvent.CtaClick, { location, destination: 'contact' })}
    >
      {label}
    </a>
  )
}
