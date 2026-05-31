import type { ReactNode } from 'react'

const TRAITS = [
  {
    mark: '01',
    en: 'Mission',
    jp: '使命',
    keyphrase: 'AI が量産する成果物に、人の意志と責任を吹き込む。',
    body: '誰もが AI でサービスを作り出せる時代、量産される成果物は驚くほど似通っていきます。CATENARIA は、その均質化に抗う一線として、本当に作りたかったものの意志をコードに刻み、責任をもってエンドユーザーへ届けることを使命とします。',
  },
  {
    mark: '02',
    en: 'Vision',
    jp: '展望',
    keyphrase: 'AI 時代の、対等な技術パートナーであり続ける。',
    body: 'AI は手段であり、対話の相手ではありません。CATENARIA が目指すのは、AI を使いこなすあなたと対等に並び立つ技術の伴走者です。発注先でも下請けでもない、判断と責任を分かち合うヒューマン・パートナーとして、長く隣に在る存在を志します。',
  },
  {
    mark: '03',
    en: 'Value',
    jp: '価値観',
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
  { dt: 'Contract', dd: '月額継続契約 / プロジェクト単位 / 業務委託（準委任）' },
  { dt: 'Contact', dd: <a href="mailto:catenaria.dev@gmail.com">catenaria.dev@gmail.com</a> },
]

export function About() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-label">About Us</div>
          <h2 className="sec-title">私たちについて</h2>
          <p className="sec-lead">
            AI が量産する成果物の時代に、CATENARIA
            は人の意志と責任を吹き込む技術パートナーです。診て、治して、見守るを分断しない。その姿勢を、Mission・Vision・Value
            の三つに整理しました。
          </p>
        </div>
        <p className="about-origin reveal">
          社名 CATENARIA
          は、鎖が自らの重みで描く自然な曲線「カテナリー（catenary）」に由来します。二点の間を支え、その重みを引き受けて美しいかたちを保つ線——それが
          CATENARIA
          のロゴであり、あなたのアイデアと出荷されたプロダクトの間に在りたいという理念そのものです。
        </p>
        <div className="traits reveal">
          {TRAITS.map((t) => (
            <div className="trait" key={t.mark}>
              <div className="trait-mark">{t.mark}</div>
              <h4>
                <span className="trait-en">{t.en}</span>
                <span className="trait-jp"> / {t.jp}</span>
              </h4>
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
