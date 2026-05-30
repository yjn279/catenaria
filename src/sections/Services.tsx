interface ServiceData {
  idx: string;
  name: string;
  role: string;
  desc: string;
  forWhom: string;
  term: string;
  price: string;
  unit?: string;
  small?: boolean;
}

const SERVICES: ServiceData[] = [
  {
    idx: '01',
    name: 'Vibe Coding Cleanup',
    role: '入口 / Cleanup',
    desc: 'AIが生成したコードを診断し、軽微な不具合を整える。まずは現状を可視化するところから。',
    forWhom: '動いてはいるが、本番に出す自信がない',
    term: '1週間〜',
    price: '¥10,000',
    unit: ' –',
  },
  {
    idx: '02',
    name: 'mini-CTO',
    role: '中心 / Continuous',
    desc: '技術判断・実装管理に加え、人ではなくAIエージェント組織の組成までを継続支援する。',
    forWhom: '相談できる技術の相棒がほしい',
    term: '月額',
    price: '¥30,000',
    unit: ' –/月',
  },
  {
    idx: '03',
    name: 'Prototyping',
    role: '構築 / Build',
    desc: '本番運用に耐えるプロトタイプを、設計から実装まで一貫して形にする。',
    forWhom: 'アイデアを、確かな形にしたい',
    term: 'プロジェクト単位',
    price: '要見積',
    small: true,
  },
  {
    idx: '04',
    name: 'Operation',
    role: '継続 / Operate',
    desc: 'リリース後の運用保守と、継続的な改善を引き受ける。出した後も、ひとりにしない。',
    forWhom: '出した後の運用に手が回らない',
    term: '月額',
    price: '要見積',
    small: true,
  },
];

function ServiceCard({ s }: { s: ServiceData }) {
  return (
    <div className="card">
      <div className="card-name">{s.name}</div>
      <div className="card-role">{s.role}</div>
      <p className="card-desc">{s.desc}</p>
      <div className="card-for">
        <span className="lbl">こんな方へ —</span>
        <span>{s.forWhom}</span>
      </div>
      <div className="card-meta">
        <span className="card-term">{s.term}</span>
        <span className="card-price" style={s.small ? { fontSize: '15px' } : undefined}>
          {s.price}
          {s.unit && <small>{s.unit}</small>}
        </span>
      </div>
    </div>
  );
}

function ServiceCycle() {
  return (
    <div className="figure reveal">
      <div className="figure-cap">— Service Cycle —</div>
      <svg className="cycle" viewBox="0 0 560 400" aria-label="サービスの関係図">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#c4c4c4" />
          </marker>
        </defs>
        <text x="280" y="44" textAnchor="middle" fontSize="16" letterSpacing="0.04em">Vibe Coding Cleanup</text>
        <text className="jp" x="280" y="64" textAnchor="middle" fontSize="11">入口</text>
        <circle className="node-core" cx="280" cy="200" r="3.5" />
        <text x="280" y="196" textAnchor="middle" fontSize="19" letterSpacing="0.04em" fill="#e8b537">mini-CTO</text>
        <text className="jp" x="280" y="216" textAnchor="middle" fontSize="11">中心</text>
        <text x="92" y="356" textAnchor="middle" fontSize="16" letterSpacing="0.04em">Operation</text>
        <text x="468" y="356" textAnchor="middle" fontSize="16" letterSpacing="0.04em">Prototyping</text>
        <line x1="280" y1="78" x2="280" y2="176" className="edge" strokeWidth="1" markerEnd="url(#arr)" />
        <line x1="312" y1="212" x2="436" y2="336" className="edge" strokeWidth="1" markerEnd="url(#arr)" />
        <line x1="410" y1="350" x2="150" y2="350" className="edge" strokeWidth="1" markerEnd="url(#arr)" />
        <line x1="124" y1="336" x2="248" y2="212" className="edge" strokeWidth="1" markerEnd="url(#arr)" />
      </svg>
      <p className="figure-note">
        Vibe Coding Cleanup を入口に、mini-CTO を軸として循環する。一度きりの納品ではなく、課題ごとに巡る関係として。
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section className="block" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-label">Services &amp; Pricing</div>
          <h2 className="sec-title">サービス・料金</h2>
          <p className="sec-lead">
            四つのサービスは、それぞれが独立して成立し、顧客の旅において自然に連なる。最小の入口から、必要な分だけ。
          </p>
        </div>
        <div className="cards reveal">
          {SERVICES.map((s) => (
            <ServiceCard key={s.idx} s={s} />
          ))}
        </div>
        <div className="price-note reveal">
          プランは分けない。対話を通じて、いまのあなたに必要な分だけを見積もる。意思決定の摩擦を、できる限り小さく。
        </div>
        <ServiceCycle />
      </div>
    </section>
  );
}
