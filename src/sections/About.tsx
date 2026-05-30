import type { ReactNode } from 'react'

const TRAITS = [
  {
    mark: '01',
    h: '作る前に、作るべきかを問う。',
    p: '「言われた通り」には作らない。捨てる判断ができることが、本質的な助言を可能にする。',
  },
  {
    mark: '02',
    h: '診て、治して、見守るを分断しない。',
    p: '診断する人と実装する人を分けない。一つの視点で貫くから、歪みが生まれない。',
  },
  {
    mark: '03',
    h: 'AIにできないことを、売る。',
    p: 'AIは顧客のYESマシンになりがち。私たちは対等な視座から、本質を提示する。',
  },
]

interface ProfileRow {
  dt: string
  dd: ReactNode
}

const PROFILE: ProfileRow[] = [
  {
    dt: 'Name',
    dd: (
      <>
        CATENARIA <span className="en">/ カテナリア</span>
      </>
    ),
  },
  { dt: 'Structure', dd: 'フリーランス少数精鋭 ＋ AIエージェント組織' },
  { dt: 'Service', dd: 'AI時代の個人開発者・小規模事業者向け、技術機能アウトソーシング' },
  { dt: 'Phase', dd: '0→10 の領域に特化（10→100 のスケールは扱わない）' },
  { dt: 'Contact', dd: <a href="mailto:hello@catenaria.jp">hello@catenaria.jp</a> },
]

export function About() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-label">About Us</div>
          <h2 className="sec-title">私たちについて</h2>
          <p className="sec-lead">
            AIが進化するほど、私たちの価値は際立つ。AIには立てられない問い、取れない責任、続かない伴走を引き受ける。
          </p>
        </div>
        <div className="traits reveal">
          {TRAITS.map((t) => (
            <div className="trait" key={t.mark}>
              <div className="trait-mark">{t.mark}</div>
              <h4>{t.h}</h4>
              <p>{t.p}</p>
            </div>
          ))}
        </div>
        <dl className="profile reveal">
          {PROFILE.map((r) => (
            <div className="profile-row" key={r.dt}>
              <dt>{r.dt}</dt>
              <dd>{r.dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
