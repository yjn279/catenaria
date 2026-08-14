import { AnalyticsEvent, track } from '../../lib/analytics'
import { OFFER } from '../content'

/** 無料の範囲で実際にお渡しするものと、有償になる範囲の扱いを具体的に示す。 */
export function Offer() {
  return (
    <section className="lp-offer" aria-labelledby="offer-heading">
      <div className="wrap">
        <p className="lp-eyebrow">{OFFER.eyebrow}</p>
        <h2 id="offer-heading" className="lp-offer-heading">
          {OFFER.heading}
        </h2>
      </div>
      <div className="lp-image-full">
        <img
          src="/lp/steps.webp"
          width={1672}
          height={941}
          alt="ご相談・制作・お渡し・公開の四つの段を、垂れた一本の線の上に並べた図解"
          loading="lazy"
        />
      </div>
      <div className="wrap">
        <dl className="lp-offer-list">
          {OFFER.items.map((item) => (
            <div className="lp-offer-item" key={item.title}>
              <dt className="lp-offer-item-title">{item.title}</dt>
              <dd className="lp-offer-item-body">{item.body}</dd>
            </div>
          ))}
          <div className="lp-offer-item">
            <dt className="lp-offer-item-title">{OFFER.operationScopeHeading}</dt>
            <dd className="lp-offer-item-body">
              <p>{OFFER.operationScopeIntro}</p>
              <ul className="lp-fit-list">
                {OFFER.operationScopeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <div className="lp-image-full">
        <img
          src="/lp/pace.webp"
          width={1672}
          height={941}
          alt="ご返信 1営業日以内、初稿 5営業日以内、なおし 2回まで無料、目安です。三つの目安を、一本の線の上に並べた図解"
          loading="lazy"
        />
      </div>
      <div className="lp-image-full">
        <img
          src="/lp/handover.webp"
          width={1536}
          height={1024}
          alt="木のカウンター越しに、袖から出た片手が無地の紙挟みを見る人の側へ差し出している情景"
          loading="lazy"
        />
      </div>
      <div className="wrap">
        {/* biome-ignore lint/a11y/useValidAnchor: 同一ページ内の遷移にクリック計測を添えたアンカー */}
        <a
          href="#contact"
          className="lp-btn lp-btn-accent lp-offer-cta"
          data-cta="offer"
          onClick={() =>
            track(AnalyticsEvent.CtaClick, { location: 'offer', destination: 'contact' })
          }
        >
          {OFFER.ctaLabel}
        </a>
      </div>
    </section>
  )
}
