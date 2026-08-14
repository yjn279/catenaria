import { CONCERNS } from '../content'

/**
 * 最初の一画面のすぐ後に置く、悩みの自分事化の節。
 * 読み手が自分の状態だと気づいてから、次の「なぜ無料か」へ渡す。事実の範囲にとどめ、煽らない。
 */
export function Concerns() {
  return (
    <section className="lp-concerns" aria-labelledby="concerns-heading">
      <div className="wrap">
        <p className="lp-eyebrow">{CONCERNS.eyebrow}</p>
        <h2 id="concerns-heading" className="lp-concerns-heading">
          {CONCERNS.heading}
        </h2>
        <ul className="lp-concerns-list">
          {CONCERNS.items.map((item) => (
            <li key={item} className="lp-concerns-item">
              <span className="lp-concerns-check" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="lp-concerns-closing">{CONCERNS.closing}</p>
      </div>
    </section>
  )
}
