const STEPS = [
  {
    num: '01',
    title: 'お問い合わせ',
    desc: 'フォームまたはメールでご連絡ください。技術の言葉でなくて構いません。',
  },
  {
    num: '02',
    title: '無料相談',
    desc: 'オンラインで 30〜60 分、現状とご要望をお聞きします。費用は一切かかりません。',
  },
  {
    num: '03',
    title: 'お見積もり',
    desc: 'お話を踏まえて、最適なサービスと費用感をご提案します。比較検討のための簡易見積も歓迎です。',
  },
  {
    num: '04',
    title: 'ご契約',
    desc: '内容にご納得いただけたら、業務委託契約を締結します。月額継続かプロジェクト単位かを選べます。',
  },
  {
    num: '05',
    title: '業務実施 / 納品',
    desc: '合意したスコープで実装・運用を進めます。完了時に成果物を納品し、必要に応じて運用へ移行します。',
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
            初めてのご相談から業務完了まで、5
            つのステップでご案内します。気になる段階だけでも、お気軽にお声がけください。
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
      </div>
    </section>
  )
}
