import { CTA_BAND } from '../content'
import { CtaLink } from './CtaLink'

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
        <CtaLink location={location} label={CTA_BAND.label} className="lp-cta-band-link" />
      </div>
    </div>
  )
}
