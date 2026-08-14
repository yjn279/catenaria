import { FIT } from '../content'

/** メールとフォームで進められる方に向き、訪問や電話を希望する方には向かない、という誠実な線引き。 */
export function FitOrNot() {
  return (
    <section className="lp-fit" aria-labelledby="fit-heading">
      <div className="wrap">
        <p className="lp-eyebrow">{FIT.eyebrow}</p>
        <h2 id="fit-heading" className="lp-fit-heading">
          {FIT.heading}
        </h2>
      </div>
      <div className="lp-image-full">
        <img
          src="/lp/town.webp"
          width={1672}
          height={941}
          alt="日本の地方都市の通りを斜めから写した情景"
          loading="lazy"
        />
      </div>
      <div className="wrap">
        <p className="lp-fit-area-note">{FIT.areaNote}</p>
        <div className="lp-fit-columns">
          <div>
            <p className="lp-fit-column-title">{FIT.fitTitle}</p>
            <ul className="lp-fit-list">
              {FIT.fit.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lp-fit-column-title">{FIT.notFitTitle}</p>
            <ul className="lp-fit-list">
              {FIT.notFit.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
