import type { ReactNode } from 'react'

interface Trait {
  eyebrow: string
  jp: string
  en: string
}

const TRAITS: Trait[] = [
  {
    eyebrow: 'MISSION',
    jp: '真理を、探求せよ。',
    en: 'Essentialism',
  },
  {
    eyebrow: 'VISION',
    jp: '原石を削り出す。',
    en: 'Simplicity',
  },
  {
    eyebrow: 'VALUE',
    jp: '細部に魂を宿す。',
    en: 'Craftsmanship',
  },
]

interface ProfileRow {
  dt: string
  dd: ReactNode
}

const PROFILE: ProfileRow[] = [
  { dt: 'Name', dd: 'CATENARIA（カテナリア）' },
  { dt: 'Service', dd: 'AI 時代の個人開発者・小規模事業者向け、技術組織アウトソーシング' },
  { dt: 'Contract', dd: '業務委託契約（準委任）' },
  { dt: 'Contact', dd: <a href="mailto:catenaria.dev@gmail.com">catenaria.dev@gmail.com</a> },
]

export function About() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-label">About Us</div>
          <h2 className="sec-title">CATENARIA について</h2>
          <p className="sec-lead">
            AI がサービスを量産する時代に、CATENARIA は人の意志と責任を吹き込む技術パートナーです。
            <br className="br-pc-only" />
            事業開発経験のあるエンジニアが、プロフェッショナルとしてサービスの成長をサポートします。
          </p>
        </div>
        <div className="about-origin reveal">
          <p>
            鎖が自重で垂れる際に描く、カテナリー曲線。サグラダ・ファミリアの設計者であるアントニ・ガウディは、自然の摂理から導かれる合理的で美しいこの形状を、建築の強固な構造として応用しました。CATENARIA
            は、ガウディが生まれ育ったスペイン・カタルーニャ地方でカテナリー曲線を表す言葉です。「ガウディの建築のようにお客さまをしっかりと支えられるような存在でありたい。」という想いを込めています。
          </p>
        </div>
        <div className="traits reveal">
          {TRAITS.map((t) => (
            <div className="trait" key={t.eyebrow}>
              <div className="trait-eyebrow">{t.eyebrow}</div>
              <h3 className="trait-jp">{t.jp}</h3>
              <div className="trait-en">{t.en}</div>
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
