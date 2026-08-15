import { CtaLink } from '../components/CtaLink'
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

/**
 * 最初の一画面。写真を地に敷き、文字はそのまま上に重ねる一枚の絵として組む
 * （見出しを画像へ焼き込まない）。制作は無料であることと、誰のためのページかを言い切り、フォームへ誘う。
 */
export function Hero() {
  const headline = splitHeadline(HERO.headline, HERO.headlineMark)
  return (
    <section className="lp-hero" aria-labelledby="hero-heading">
      <img
        className="lp-hero-photo"
        src="/lp/office.webp"
        width={1536}
        height={1024}
        alt="日本の地方にある工務店の事務室。紺色の作業着を着て机に向かって座った後ろ姿"
        loading="eager"
      />
      <div className="wrap">
        <div className="lp-hero-card">
          <p className="lp-eyebrow">{HERO.eyebrow}</p>
          <h1 id="hero-heading" className="lp-hero-title">
            {headline.before}
            <span className="lp-hero-title-mark">{headline.mark}</span>
            {headline.after}
          </h1>
          <p className="lp-hero-lead">{HERO.lead}</p>
          <p className="lp-hero-sub">{HERO.sub}</p>
          <ul className="lp-hero-chips">
            {HERO.chips.map((chip) => (
              <li className="lp-hero-chip" key={chip.value}>
                <span className="lp-hero-chip-value">{chip.value}</span>
                <span className="lp-hero-chip-caption">{chip.caption}</span>
              </li>
            ))}
          </ul>
          <CtaLink location="hero" label={HERO.ctaLabel} className="lp-hero-cta" />
        </div>
      </div>
    </section>
  )
}
