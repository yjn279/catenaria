import { PROCESS } from '../content'

/**
 * 相談から受け取りまでを時系列の番号付きの段で見せる節。
 * 「打ち合わせに付き合わされるのでは」という疑いに、訪問も電話も無いことで答える。
 */
export function Process() {
  return (
    <section className="lp-process" aria-labelledby="process-heading">
      <div className="wrap">
        <p className="lp-eyebrow">{PROCESS.eyebrow}</p>
        <h2 id="process-heading" className="lp-process-heading">
          {PROCESS.heading}
        </h2>
        <ol className="lp-process-list">
          {PROCESS.steps.map((step, index) => (
            <li className="lp-process-item" key={step.title}>
              <span className="lp-process-number" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <p className="lp-process-item-title">{step.title}</p>
                <p className="lp-process-item-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
