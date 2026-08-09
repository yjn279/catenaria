import { AnalyticsEvent, track } from '../../lib/analytics'
import { HERO } from '../content'

/** 最初の一画面。制作は無料であることと、誰のためのページかを言い切り、フォームへ誘う。 */
export function Hero() {
  return (
    <section className="lp-hero" aria-labelledby="hero-heading">
      <div className="wrap">
        <p className="lp-eyebrow">{HERO.eyebrow}</p>
        <h1 id="hero-heading" className="lp-hero-title">
          {HERO.headline}
        </h1>
        <p className="lp-hero-lead">{HERO.lead}</p>
        <p className="lp-hero-sub">{HERO.sub}</p>
        {/* biome-ignore lint/a11y/useValidAnchor: 同一ページ内の遷移にクリック計測を添えたアンカー */}
        <a
          href="#contact"
          className="lp-btn lp-btn-accent lp-hero-cta"
          data-cta="hero"
          onClick={() =>
            track(AnalyticsEvent.CtaClick, { location: 'hero', destination: 'contact' })
          }
        >
          {HERO.ctaLabel}
        </a>
        <div className="lp-hero-image">
          <img
            src="/lp/hero.webp"
            width={1672}
            height={941}
            alt="朝の光が差す木の机に置かれたノートパソコンとノート、コーヒーカップ"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
