import type { ReactNode } from 'react'

const TRAITS = [
  {
    en: 'Mission',
    keyphrase: 'AI が量産する成果物に、人の意志と責任を吹き込む。',
    body: '誰もが AI でサービスを作り出せる時代、量産される成果物は驚くほど似通っていきます。CATENARIA は、その均質化に抗う一線として、本当に作りたかったものの意志をコードに刻み、責任をもってエンドユーザーへ届けることを使命とします。',
  },
  {
    en: 'Vision',
    keyphrase: 'AI 時代の、対等な技術パートナーであり続ける。',
    body: 'AI は手段であり、対話の相手ではありません。CATENARIA が目指すのは、AI を使いこなすあなたと対等に並び立つ技術の伴走者です。発注先でも下請けでもない、判断と責任を分かち合うヒューマン・パートナーとして、長く隣に在る存在を志します。',
  },
  {
    en: 'Value',
    keyphrase: 'Judgment over execution. 職人の手と、対話で応える。',
    body: 'CATENARIA が売るのは作業量ではなく判断です。AI にもできる実行ではなく、AI にはできない問いと、責任ある判断、そして対話で応える職人の手。「診て、治して、見守る」を分断せず、一つの視点で貫くことを CATENARIA は価値の中心に置きます。',
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
            AI がサービスを量産する時代に、CATENARIA
            は人の意志と責任を吹き込む技術パートナーです。事業開発経験のあるエンジニアが、プロフェッショナルとしてサービスの成長をサポートします。
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
            <div className="trait" key={t.en}>
              <div className="trait-title">{t.en}</div>
              <p className="trait-keyphrase">{t.keyphrase}</p>
              <p>{t.body}</p>
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
