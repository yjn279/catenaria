import { CtaLink } from '../components/CtaLink'
import { FullImage } from '../components/FullImage'
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
      <FullImage
        src="/lp/pace.webp"
        width={1672}
        height={941}
        alt="返信と初稿の目安。ご返信 1営業日以内（目安）、初稿 5営業日以内（目安）、なおし 初稿の制作から2回まで無料。返信と初稿それぞれの目安を数字と結び付けた図解"
        loading="lazy"
      />
      <FullImage
        src="/lp/handover.webp"
        width={1536}
        height={1024}
        alt="木のカウンター越しに、袖から出た片手が無地の紙挟みを見る人の側へ差し出している情景"
        loading="lazy"
      />
      <div className="wrap">
        <CtaLink location="offer" label={OFFER.ctaLabel} className="lp-offer-cta" />
      </div>
    </section>
  )
}
