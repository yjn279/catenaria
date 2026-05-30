import { useState, useCallback } from 'react';

const FAQS = [
  {
    q: '途中まで自分で／AIで書いたコードでも見てもらえますか？',
    a: 'はい。むしろ、そこが私たちの入口です。Vibe Coding Cleanup で、いまあるコードを診断するところから始められます。',
  },
  {
    q: 'エンジニアでなくても依頼できますか？',
    a: '問題ありません。技術用語ではなく、事業の言葉で対話します。「何に困っているか」を話していただければ十分です。',
  },
  {
    q: 'どこまで小さく頼めますか？',
    a: '最小は Vibe Coding Cleanup、1週間・¥10,000 から。ツール代の延長として、気軽にお試しいただけます。',
  },
  {
    q: '契約期間や解約の縛りはありますか？',
    a: '月額のサービスはいつでも見直せます。長期契約で縛ることはしません。必要なときに、必要な分だけ。',
  },
  {
    q: '対応していない領域はありますか？',
    a: '0→10 を専門とし、10→100 の大規模スケールは扱いません。その段階は、次の伴走者へ気持ちよく送り出す設計です。',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const [innerHeight, setInnerHeight] = useState<number>(0);

  const innerRef = useCallback((node: HTMLDivElement | null) => {
    if (node) setInnerHeight(node.scrollHeight);
  }, []);

  return (
    <div className={'faq-item' + (open ? ' open' : '')}>
      <button className="faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {q}
        <span className="plus" aria-hidden="true"></span>
      </button>
      <div
        className="faq-a"
        style={{ maxHeight: open ? `${innerHeight}px` : '0px' }}
      >
        <div className="faq-a-inner" ref={innerRef}>{a}</div>
      </div>
    </div>
  );
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
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
