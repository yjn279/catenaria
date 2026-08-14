/**
 * このページに書いてよい事実の唯一の正は、隣接する catenaria リポジトリの
 * lp-system/briefs/catenaria-free-lp.md にある Facts 表である。
 * ここに無い事実・数値をページへ書き足さない。
 *
 * 無料の範囲・有償の範囲・直せる回数・権利・紹介の可否は、何度も文言を書き分けると
 * 食い違いが生まれる。事実ごとに1つの言い切りをここで定め、各節はそれを差し込む。
 */

const FREE_OFFER = 'ホームページ・LPの制作は無料です。'
const NO_COST_NO_CONTRACT = '制作から納品まで、費用や契約は一切発生しません。'
const FREE_SCOPE = '作ってお渡しするところまでが無料です。'
const SELF_PUBLISH_FREE =
  'お渡ししたものを、お客様が自分で公開してお使いになるぶんも無料です。費用は発生しません。'
const PAID_WHEN_DELEGATED =
  '公開や運用をこちらにお任せいただく場合は有償になり、その金額はご希望に応じて別途お見積りいたします。'
const PUBLISH_BOUNDARY = `${SELF_PUBLISH_FREE}${PAID_WHEN_DELEGATED}`
const FREE_REVISIONS = '無料で直せるのは、初稿の制作から2回までです。'
const RIGHTS = '権利はすべてお客様のものです。'
const DELIVERABLE_FREEDOM = 'ご自由にお使いいただけます。お使いいただかなくても構いません。'
const NO_VISIT_NO_CALL = 'ご訪問やお電話でお時間をいただくことはございません。'
const REPLY_TIMING =
  'ご返信は1営業日以内、初稿は5営業日以内が目安です。返信するのは代表の中村です。'
const CONTACT_EMAIL = 'y.nakamura@catenaria.dev'

export const HERO = {
  eyebrow: 'ホームページ・LP（商品やサービスを紹介する1枚のページ）制作',
  headline: FREE_OFFER,
  lead: NO_COST_NO_CONTRACT,
  sub: 'ホームページが無い、あっても古いまま。手が回らないまま何年も経っている、そんな会社のために。',
  ctaLabel: '制作は無料 — まずは相談する',
} as const

export const WHY_FREE = {
  eyebrow: '1 — なぜ無料でできるのか',
  heading: '制作が無料でできる理由',
  reasons: [
    'AIエージェントが制作するため、お引き受けする数が増えても、費用はほとんど増えません。',
    'だからこそ制作そのものは無料にし、その先の運用でいただく事業の設計にしています。',
  ],
  boundaryHeading: 'どこまでが無料か',
  boundary: [FREE_SCOPE, SELF_PUBLISH_FREE, PAID_WHEN_DELEGATED, FREE_REVISIONS],
} as const

export const OFFER = {
  eyebrow: '2 — 無料でお渡しする範囲',
  heading: 'お渡しするもの',
  ctaLabel: '制作は無料 — ここから相談する',
  items: [
    { title: '権利はすべてお客様のもの', body: `${RIGHTS}${DELIVERABLE_FREEDOM}` },
    {
      title: '新規もリニューアルも',
      body: '新規のホームページ制作はもちろん、既存サイトのリニューアルにも対応します。',
    },
    { title: '返信と初稿の目安', body: REPLY_TIMING },
    {
      title: '実績としての紹介',
      body: '実績として紹介させていただくことがありますが、事情があればお断りいただけます。',
    },
    {
      title: 'AI・DXのご支援も',
      body: 'ホームページ・LP制作のほか、AI・DXに関するご支援も行っています。',
    },
  ],
  operationScopeHeading: '公開してからの運用',
  operationScopeIntro:
    'ご自分で公開なさるなら費用はかかりません。こちらに任せていただく場合は、次のことを承ります。',
  operationScopeItems: [
    '公開の作業（作ったものを、実際に見られる状態にする）',
    '公開し続けるための場所の用意（公開したページが表示され続けるようにする）',
    '中身の更新（内容の書き換えや差し替え）',
    '不具合の手当て（表示の乱れや動かなくなった箇所を直す）',
  ],
} as const

export const FIT = {
  eyebrow: '3 — こんな会社に',
  heading: '向いている方・向いていない方',
  areaNote:
    '対応する地域は問いません。所在地は神奈川県海老名市ですが、やり取りはメールとフォームで完結するため、全国どこからのご相談もお受けします。',
  fitTitle: '向いている方',
  fit: [
    'メールとフォームのやり取りで、制作を進められる方',
    'ホームページが無いか、あっても何年も更新できていない方',
    '今のサイトを作り直したい方、新しく作りたい方',
  ],
  notFitTitle: '向いていない方',
  notFit: [
    `${NO_VISIT_NO_CALL}訪問や電話でのお打ち合わせをご希望の方には、この形は向いていません。`,
  ],
} as const

export const CONTACT = {
  eyebrow: '5 — お問い合わせ',
  heading: 'まずはメールでご相談ください',
  lead: `${FREE_OFFER}訪問や電話でのお打ち合わせは行っておりません。メールとフォームだけでやり取りします。${REPLY_TIMING}`,
  boundary: PUBLISH_BOUNDARY,
  privacy:
    'お預かりする項目と利用目的 — 会社名・お名前・メールアドレス・ご相談内容をお預かりし、お問い合わせへのご返信と、ご依頼いただいた制作のご連絡にのみ使います。',
  submitLabel: '制作は無料 — 送信する',
  submittingLabel: '送信中…',
  successMessage: `お問い合わせを受け付けました。${REPLY_TIMING}`,
  errorMessage: `送信に失敗しました。恐れ入りますが ${CONTACT_EMAIL} までご連絡ください。`,
} as const

export const FAQ = {
  eyebrow: '4 — 気になること',
  heading: 'よくあるご質問',
  items: [
    { q: '本当に無料ですか？', a: `${FREE_OFFER}${NO_COST_NO_CONTRACT}` },
    {
      q: 'どこから有償になりますか？',
      a: PUBLISH_BOUNDARY,
    },
    { q: '何回まで直してもらえますか？', a: `${FREE_REVISIONS}それ以降は別途になります。` },
    {
      q: 'なぜ無料でできるのですか？',
      a: 'AIエージェントが制作するため、費用がほとんど増えないからです。制作を無料にして、公開後の運用でいただく設計にしています。',
    },
    { q: '作ってもらったものを使わなくてもいいですか？', a: `${RIGHTS}${DELIVERABLE_FREEDOM}` },
    {
      q: '既存のホームページのリニューアルもできますか？',
      a: '対応しています。新規の制作と同じように、無料でお受けします。',
    },
    {
      q: '訪問や電話での打ち合わせはできますか？',
      a: `${NO_VISIT_NO_CALL}メールとフォームでのやり取りとなります。`,
    },
    { q: '返信はいつ来ますか？', a: REPLY_TIMING },
  ],
} as const

export const OPERATOR = {
  brand: 'CATENARIA',
  origin:
    '「カテナリー」は、鎖が自重で垂れるときに描く曲線の名前です。アントニ・ガウディが、この形を建築の構造に応用しました。CATENARIAは、ガウディが生まれ育ったスペイン・カタルーニャ地方でこの曲線を指す言葉です。お客さまをしっかりと支える存在でありたいという思いを、屋号に込めました。',
  representative: '中村 勇士',
  postalCode: '〒243-0406',
  address: '神奈川県海老名市国分北1-35-3 102',
  email: CONTACT_EMAIL,
  siteUrl: 'https://catenaria.dev',
  siteLabel: 'catenaria.dev',
} as const
