/**
 * このページに書いてよい事実の唯一の正は
 * /Users/yuji/catenaria/lp-system/briefs/catenaria-free-lp.md の Facts 表である。
 * ここに無い事実・数値をページへ書き足さない。
 *
 * 無料の範囲・有償の範囲・直せる回数・権利・紹介の可否は、何度も文言を書き分けると
 * 食い違いが生まれる。事実ごとに1つの言い切りをここで定め、各節はそれを差し込む。
 */

const FREE_OFFER = 'ホームページ・LPの制作は無料です。'
const NO_COST_NO_CONTRACT = '制作から納品まで、費用や契約は一切発生しません。'
const FREE_SCOPE = '作ってお渡しするところまでが無料です。'
const PAID_FROM_PUBLISHING = '公開して使い続けるところからは有償になります。'
const FREE_REVISIONS = '無料で直せるのは、初稿の制作から2回までです。'
const RIGHTS = '権利はすべてお客様のものです。'
const DELIVERABLE_FREEDOM = 'ご自由にお使いいただけます。お使いいただかなくても構いません。'
const NO_VISIT_NO_CALL = 'ご訪問やお電話でお時間をいただくことはございません。'
const REPLY_TIMING =
  'ご返信は1営業日以内、初稿は5営業日以内が目安です。返信するのは代表の中村です。'
const CONTACT_EMAIL = 'y.nakamura@catenaria.dev'

export const HERO = {
  eyebrow: 'ホームページ・LP制作',
  headline: FREE_OFFER,
  lead: NO_COST_NO_CONTRACT,
  sub: 'ホームページが無い、あっても古いまま。手が回らないまま何年も経っている、そんな会社のために。',
  ctaLabel: '制作は無料 — まずは相談する',
} as const

export const WHY_FREE = {
  eyebrow: 'なぜ無料でできるのか',
  heading: '制作が無料でできる理由',
  reasons: [
    'AIエージェントが制作するため、お引き受けする数が増えても、費用はほとんど増えません。',
    'だからこそ制作そのものは無料にし、その先の運用でいただく事業の設計にしています。',
  ],
  boundaryHeading: 'どこまでが無料か',
  boundary: [FREE_SCOPE, PAID_FROM_PUBLISHING, FREE_REVISIONS],
} as const

export const OFFER = {
  eyebrow: '無料でお渡しする範囲',
  heading: 'お渡しするもの',
  items: [
    { title: '権利はすべてお客様のもの', body: `${RIGHTS}${DELIVERABLE_FREEDOM}` },
    {
      title: '新規もリニューアルも',
      body: '新規のホームページ制作はもちろん、既存サイトのリニューアルにも対応します。',
    },
    { title: '返信と初稿の目安', body: REPLY_TIMING },
    {
      title: '公開してからの運用',
      body: '公開してからの運用は、ご希望に応じて個別にご案内します。',
    },
    {
      title: '実績としての紹介',
      body: '実績として紹介させていただくことがありますが、事情があればお断りいただけます。',
    },
    {
      title: 'AI・DXのご支援も',
      body: 'ホームページ・LP制作のほか、AI・DXに関するご支援も行っています。',
    },
  ],
} as const

export const FIT = {
  eyebrow: 'こんな会社に',
  heading: '向いている方・向いていない方',
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
  eyebrow: 'お問い合わせ',
  heading: 'まずはメールでご相談ください',
  lead: `${FREE_OFFER}訪問や電話でのお打ち合わせは行っておりません。メールとフォームだけでやり取りします。${REPLY_TIMING}`,
  boundary: `${FREE_SCOPE}${PAID_FROM_PUBLISHING}`,
  privacy:
    'お預かりする項目と利用目的 — 会社名・お名前・メールアドレス・ご相談内容をお預かりし、お問い合わせへのご返信のためだけに利用します。',
  successMessage: `お問い合わせを受け付けました。${REPLY_TIMING}`,
  errorMessage: `送信に失敗しました。恐れ入りますが ${CONTACT_EMAIL} までご連絡ください。`,
} as const

export const FAQ = {
  eyebrow: '気になること',
  heading: 'よくあるご質問',
  items: [
    { q: '本当に無料ですか？', a: `${FREE_OFFER}${NO_COST_NO_CONTRACT}` },
    {
      q: 'どこから有償になりますか？',
      a: PAID_FROM_PUBLISHING,
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
    '「カテナリー」は、鎖やケーブルが自重で自然にたわむときにできる曲線の名前です。飾らずに、そのままの形で立つという思いを屋号に込めました。',
  representative: '中村 勇士',
  postalCode: '〒243-0406',
  address: '神奈川県海老名市国分北1-35-3 102',
  email: CONTACT_EMAIL,
  siteUrl: 'https://catenaria.dev',
  siteLabel: 'catenaria.dev',
} as const
