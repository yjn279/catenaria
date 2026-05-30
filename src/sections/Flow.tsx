const STEPS = [
  {
    num: '01',
    title: '問い合わせ',
    desc: 'まずは現状を聞かせてください。技術の言葉でなくて構いません。',
  },
  { num: '02', title: '診断', desc: 'コードと事業の両面から、本当の課題を見極めます。' },
  { num: '03', title: '提案', desc: '残すもの、捨てるものを、一緒に決めます。' },
  { num: '04', title: '実装', desc: '残すと決めたものを、Production-Ready水準まで磨き上げます。' },
  { num: '05', title: '運用', desc: 'リリース後も見守りながら、改善を続けます。' },
]

export function Flow() {
  return (
    <section className="block alt" id="flow">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-label">Flow</div>
          <h2 className="sec-title">ご依頼の流れ</h2>
          <p className="sec-lead">
            関係は一方通行ではない。新たな課題が現れるたび、また入口へ戻る。
          </p>
        </div>
        <div className="flow reveal">
          {STEPS.map((st) => (
            <div className="step" key={st.num}>
              <div className="step-num">{st.num}</div>
              <div className="step-title">{st.title}</div>
              <p className="step-desc">{st.desc}</p>
            </div>
          ))}
        </div>
        <p className="flow-loop reveal">— 新たな課題ごとに、再び —</p>
      </div>
    </section>
  )
}
