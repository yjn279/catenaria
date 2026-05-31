interface ServiceData {
  idx: string
  name: string
  role: string
  desc: string
  term: string
  price: string
}

const SERVICES: ServiceData[] = [
  {
    idx: '01',
    name: 'Vibe Coding Cleanup',
    role: '診断 / Cleanup',
    desc: 'AI が生成したコードを診断し、軽微な不具合やセキュリティの欠陥を修正します。動いてはいるがリリースする自信がない、どうしても直せないバグがある、そんな状態をまずは整えるところから。',
    term: '5日間 〜',
    price: '¥9,800 〜',
  },
  {
    idx: '02',
    name: 'mini-CTO',
    role: '設計 / Architecture',
    desc: '技術設計から AI エージェント開発チームの組織設計、事業視点での判断や提案まで。高度な業務を任せられる CTO のような相棒を、コスパ良く。これからサービスを拡大していきたいお客さまにおすすめです。',
    term: '月額',
    price: '¥29,800 〜',
  },
  {
    idx: '03',
    name: 'Prototyping',
    role: '構築 / Build',
    desc: 'お客さまのアイデアを、最速でサービスにする。AI エージェントの Pro プランと同様の価格、しかもプログラミングのエラーを自力で解決する必要がないので、エンジニア以外の方でも気軽にアイデアを形にできます。',
    term: 'プロジェクト単位',
    price: '¥19,800 〜',
  },
  {
    idx: '04',
    name: 'Operation',
    role: '継続 / Steward',
    desc: 'サービスをリリースした後の運用保守。ノンコア業務であり、退屈な業務でもある運用保守をアウトソースすることによって、お客さまの時間や費用、AI トークンなどを本質的な業務に割り当てられるように。',
    term: '月額',
    price: '¥9,800 〜',
  },
]

function ServiceCard({ s }: { s: ServiceData }) {
  return (
    <div className="card">
      <div className="card-name">{s.name}</div>
      <div className="card-role">{s.role}</div>
      <p className="card-desc">{s.desc}</p>
      <div className="card-meta">
        <span className="card-term">{s.term}</span>
        <span className="card-price">{s.price}</span>
      </div>
    </div>
  )
}

function ServiceCycle() {
  return (
    <div className="figure reveal">
      <div className="figure-cap">サービスマップ</div>
      <img
        src="/service-map.png"
        alt="サービスマップ — Vibe Coding Cleanup から mini-CTO を中心に Operation・Prototyping へ循環する関係図"
        className="service-map"
        loading="lazy"
      />
      <p className="figure-note">
        お客さまのサービスの状況に合わせて、どこからでも始められます。設計から運用まで網羅的にカバーし、状況の変化に応じてプランを柔軟に切り替えられます。
      </p>
    </div>
  )
}

export function Services() {
  return (
    <section className="block" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-label">Services &amp; Pricing</div>
          <h2 className="sec-title">サービス / 料金</h2>
          <p className="sec-lead">
            簡単に始められる Vibe Coding Cleanup から、高度な業務を任せられる mini-CTO
            まで。お客さまのサービスの状況に合わせて、最適なプランをお選びいただけます。
          </p>
        </div>
        <div className="cards reveal">
          {SERVICES.map((s) => (
            <ServiceCard key={s.idx} s={s} />
          ))}
        </div>
        <ServiceCycle />
      </div>
    </section>
  )
}
