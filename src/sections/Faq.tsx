import { useCallback, useState } from 'react'

const FAQS = [
  {
    q: '途中まで自分で／AIで書いたコードでも見てもらえますか？',
    a: 'はい。むしろ、そこが CATENARIA の入口です。Vibe Coding Cleanup では、既にあるコードを診断し、本番に出すために何が足りないかを可視化するところから始めます。コードを書き直すか、活かすかの判断も含めて、お任せください。',
  },
  {
    q: 'エンジニアでなくても依頼できますか？',
    a: 'もちろんです。CATENARIA は技術用語ではなく、事業の言葉で対話します。「何を作りたいか」「何に困っているか」をお話しいただければ、技術的な翻訳と判断は CATENARIA 側で引き受けます。エンジニアでない方ほど、伴走の価値を感じていただけるはずです。',
  },
  {
    q: 'いくらから依頼できますか？',
    a: '最小は Vibe Coding Cleanup の 5 日間・¥98,000 からです。月額のサービスは ¥19,800（Operation）／¥29,800（mini-CTO）から始められます。まずはお試しのつもりで、最小の入口からご利用いただけます。',
  },
  {
    q: '契約期間や解約の縛りはありますか？',
    a: '月額のサービスはいつでも見直し・解約が可能です。長期契約で縛ることはしません。必要なときに必要な分だけご利用いただき、不要になったら気持ちよく送り出す——その関係性を CATENARIA は理想としています。',
  },
  {
    q: '対応してもらえない領域はありますか？',
    a: 'CATENARIA は 0→10 の領域（アイデア検証から本番リリース直後の安定運用まで）を専門としています。10→100 の大規模スケールアップや、エンタープライズ向けの大型受託は扱いません。その段階に至った際は、信頼できる次の伴走者へ気持ちよくお送りします。',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState<boolean>(false)
  const [innerHeight, setInnerHeight] = useState<number>(0)

  const innerRef = useCallback((node: HTMLDivElement | null) => {
    if (node) setInnerHeight(node.scrollHeight)
  }, [])

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        type="button"
        className="faq-q"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {q}
        <span className="plus" aria-hidden="true"></span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? `${innerHeight}px` : '0px' }}>
        <div className="faq-a-inner" ref={innerRef}>
          {a}
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section className="block alt" id="faq">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-label">FAQ</div>
          <h2 className="sec-title">よくある質問</h2>
        </div>
        <div className="faq reveal">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
