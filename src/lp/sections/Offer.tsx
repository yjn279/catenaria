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
        <div className="lp-offer-image">
          <img
            src="/lp/offer.webp"
            width={1672}
            height={941}
            alt="ご相談から制作、お渡しまでの3つの手順を示した図"
            loading="lazy"
          />
        </div>
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
    </section>
  )
}
