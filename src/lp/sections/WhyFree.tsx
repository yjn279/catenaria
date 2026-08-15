import { FullImage } from '../components/FullImage'
import { WHY_FREE } from '../content'

/**
 * このページの中心となる節。なぜ無料でできるのかという理由と、
 * どこまでが無料かという境目を、同じ節の中で一体として示す。
 * 理由と境目は同じ1つの事実の裏表であり、切り離すと隠しているように見える。
 */
export function WhyFree() {
  return (
    <section className="lp-why" aria-labelledby="why-free-heading">
      <div className="wrap">
        <p className="lp-eyebrow">{WHY_FREE.eyebrow}</p>
        <h2 id="why-free-heading" className="lp-why-heading">
          {WHY_FREE.heading}
        </h2>
        <div className="lp-why-boundary">
          <p className="lp-why-boundary-heading">{WHY_FREE.boundaryHeading}</p>
          {WHY_FREE.boundary.map((line) => (
            <p key={line} className="lp-why-boundary-line">
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="lp-media-row">
        <div className="lp-media-row-text">
          <div className="lp-why-reasons">
            {WHY_FREE.reasons.map((reason) => (
              <p key={reason}>{reason}</p>
            ))}
          </div>
        </div>
        <FullImage
          src="/lp/capacity.webp"
          width={1536}
          height={1024}
          alt="古い木造の作業場で、梁のあいだに渡した紐に無地の紙が吊るされている情景"
          loading="lazy"
          className="lp-image-full lp-media-row-image"
        />
      </div>
    </section>
  )
}
