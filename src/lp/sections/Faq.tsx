import { FAQ } from '../content'

/** 事実表で裏付けできる項目だけに限ったよくあるご質問。折りたたまず、すべて最初から読める。 */
export function Faq() {
  return (
    <section className="lp-faq" aria-labelledby="faq-heading">
      <div className="wrap">
        <p className="lp-eyebrow">{FAQ.eyebrow}</p>
        <h2 id="faq-heading" className="lp-faq-heading">
          {FAQ.heading}
        </h2>
        <div className="lp-faq-list">
          {FAQ.items.map((item) => (
            <div className="lp-faq-item" key={item.q}>
              <h3 className="lp-faq-question">{item.q}</h3>
              <p className="lp-faq-answer">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
