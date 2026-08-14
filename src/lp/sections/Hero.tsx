import { AnalyticsEvent, track } from '../../lib/analytics'
import { FullImage } from '../components/FullImage'
import { HERO } from '../content'

// 大見出しのうち HERO.headlineMark（「無料」）だけを、ひときわ大きく藍で組む。
function splitHeadline(headline: string, mark: string) {
  const index = headline.indexOf(mark)
  if (index === -1) return { before: headline, mark: '', after: '' }
  return {
    before: headline.slice(0, index),
    mark,
    after: headline.slice(index + mark.length),
  }
}

/** 最初の一画面。制作は無料であることと、誰のためのページかを言い切り、フォームへ誘う。 */
export function Hero() {
  const headline = splitHeadline(HERO.headline, HERO.headlineMark)
  return (
    <section className="lp-hero" aria-labelledby="hero-heading">
      <div className="wrap">
        <p className="lp-eyebrow">{HERO.eyebrow}</p>
        <h1 id="hero-heading" className="lp-hero-title">
          {headline.before}
          <span className="lp-hero-title-mark">{headline.mark}</span>
          {headline.after}
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
      </div>
      <FullImage
        src="/lp/office.webp"
        width={1536}
        height={1024}
        alt="日本の地方にある工務店の事務室。紺色の作業着を着て机に向かって座った後ろ姿"
        loading="eager"
      />
    </section>
  )
}
