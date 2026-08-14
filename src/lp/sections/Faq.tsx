import { FullImage } from '../components/FullImage'
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
      <FullImage
        src="/lp/mail.webp"
        width={1536}
        height={1024}
        alt="木の机の隅を斜め上から写し、片手が画面の消えた携帯電話を持っている情景"
        loading="lazy"
      />
    </section>
  )
}
