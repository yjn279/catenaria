import type { ReactNode } from 'react'

interface Trait {
  eyebrow: string
  en: string
  jp: string
  body: string
}

const TRAITS: Trait[] = [
  {
    eyebrow: 'MISSION',
    en: 'Essentialism',
    jp: '真理を、探求せよ。',
    body: '対処療法ではなく、根本的な原因を解決する。目先の現象に左右されるのではなく、真の課題を見極めて解決する。無駄な装飾や機能を削ぎ落とし、表層的ではなく本質的な意味のある価値を追い求める。一つの本質的な仕組みで複数の問題を同時に解決しましょう。それがアイデアです。',
  },
  {
    eyebrow: 'VISION',
    en: 'Simplicity',
    jp: '原石を削り出す。',
    body: '必要のないものを作らない。すべて作るのではなく、作らないことを判断する。全部盛りは過剰です。不要な要素や複雑性を排除することで依存関係を増やさずに済むため、管理コストを必要最低限に抑えることができます。最小構成で価値を成立させることで、本質的な価値を探究しましょう。これは引き算の美学、あるいは日本文化における独特の美的様式とも表現することができます。これは「やらない言い訳」ではありません。怠慢ではなく、ある種の労力を割いてもシンプルであるよう判断を下す。この違いを認識することが重要です。',
  },
  {
    eyebrow: 'VALUE',
    en: 'Craftsmanship',
    jp: '細部に魂を宿す。',
    body: '完成度を極限まで高め上げる。完璧を追求する。削り出した必要最小限の要素を、徹底的に磨き込む。0.1 mm までこだわり抜く。デザインの 1 ピクセル、プログラムの変数名一つにまで意味を持たせ、秩序だった整然たる論理を作り上げます。すべてのものに必然性や意味付けを持たせ、それぞれの要素が無駄なく作用するよう組み立てましょう。これは「スピードを犠牲にする」という意味ではありません。不要な 8 割を削り落とし、残りの 2 割に時間を注ぎましょう。その職人的な機能美の探求によって、本質の価値が浮かび上がってくるのです。',
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
            <br />
            事業開発経験のあるエンジニアが、プロフェッショナルとしてサービスの成長をサポートします。
          </p>
        </div>
        <div className="about-origin reveal">
          <p>
            鎖が自重で垂れる際に描く、カテナリー曲線。サグラダ・ファミリアの設計者であるアントニ・ガウディは、自然の摂理から導かれる合理的で美しいこの形状を、建築の強固な構造として応用しました。
          </p>
          <p>
            CATENARIA は、ガウディが生まれ育ったスペイン
            カタルーニャ地方でカテナリー曲線を表す言葉です。「ガウディの建築のように、お客さまをしっかりと支えられるような存在でありたい。」そのような想いを
            CATENARIA に込めています。
          </p>
        </div>
        <div className="traits reveal">
          {TRAITS.map((t) => (
            <div className="trait" key={t.eyebrow}>
              <div className="trait-eyebrow">{t.eyebrow}</div>
              <div className="trait-en">{t.en}</div>
              <p className="trait-jp">{t.jp}</p>
              <p className="trait-body">{t.body}</p>
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
