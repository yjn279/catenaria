import { AnalyticsEvent, track } from '../../lib/analytics'
import { CTA_BAND } from '../content'

type CtaBandProps = {
  /** 計測と `data-cta` に使う置き場所の名。節と節の間で一意にする。 */
  location: string
}

/** 節と節の間に置く、行動の入口の帯。手間の軽さと損しない旨を短く添え、フォームへ誘う。 */
export function CtaBand({ location }: CtaBandProps) {
  return (
    <div className="lp-cta-band">
      <div className="wrap lp-cta-band-inner">
        <p className="lp-cta-band-note">{CTA_BAND.note}</p>
        {/* biome-ignore lint/a11y/useValidAnchor: 同一ページ内の遷移にクリック計測を添えたアンカー */}
        <a
          href="#contact"
          className="lp-btn lp-btn-accent lp-cta-band-link"
          data-cta={location}
          onClick={() => track(AnalyticsEvent.CtaClick, { location, destination: 'contact' })}
        >
          {CTA_BAND.label}
        </a>
      </div>
    </div>
  )
}
