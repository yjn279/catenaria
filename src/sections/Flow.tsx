const STEPS = [
  {
    title: 'お問い合わせ',
    desc: 'フォームまたはメールでご連絡ください。まずはざっくりとしたご依頼でも構いません。',
  },
  {
    title: '無料相談',
    desc: 'オンラインで 30 分間、無料相談をご利用いただけます。現状のお悩みやご要望をお聞かせください。',
  },
  {
    title: 'お見積もり',
    desc: 'お問い合わせや無料相談の内容を踏まえて、最適なサービスと費用感をご提案します。',
  },
  {
    title: 'ご契約 / 業務開始',
    desc: '内容にご納得いただけたら、契約を締結後に業務の開始となります。',
  },
]

export function Flow() {
  return (
    <section className="block alt" id="flow">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-label">Process</div>
          <h2 className="sec-title">ご依頼の流れ</h2>
          <p className="sec-lead">
            お問い合わせから業務開始まではたったの 4 ステップで、簡単にご依頼いただけます。
          </p>
        </div>
        <div className="flow reveal">
          {STEPS.map((st) => (
            <div className="step" key={st.title}>
              <div className="step-title">{st.title}</div>
              <p className="step-desc">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
