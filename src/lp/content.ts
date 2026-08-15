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
const REPLY_ONE_DAY = 'ご返信は1営業日以内が目安です。'
const DRAFT_FIVE_DAYS = '初稿は5営業日以内が目安です。'
const REPLY_TIMING = `${REPLY_ONE_DAY}${DRAFT_FIVE_DAYS}返信するのは代表の中村です。`
const CONTACT_EMAIL = 'y.nakamura@catenaria.dev'
const WHY_FREE_REASON_COST =
  'AIエージェントが制作するため、お引き受けする数が増えても、費用はほとんど増えません。'
const WHY_FREE_REASON_MODEL =
  'だからこそ制作そのものは無料にし、その先の運用でいただく事業の設計にしています。'

export const HERO = {
  eyebrow: 'ホームページ・LP制作',
  headline: FREE_OFFER,
  headlineMark: '無料',
  lead: `LPは、商品やサービスを紹介する1枚のページです。${NO_COST_NO_CONTRACT}`,
  sub: 'ホームページが無い、古いままの会社のために。',
  chips: [
    { value: '1営業日', caption: REPLY_ONE_DAY },
    { value: '5営業日', caption: DRAFT_FIVE_DAYS },
    { value: '2回', caption: '初稿の制作は、無料で直せます。' },
  ],
  ctaLabel: '制作は無料 — まずは相談する',
} as const

export const CONCERNS = {
  eyebrow: '2 — こんな状態のままになっていませんか',
  heading: 'こんな状態のままになっていませんか',
  items: [
    'ホームページが無い、または何年も更新できていない。',
    '作り直したい気持ちはあるが、何から始めればいいか分からない。',
    '費用や打ち合わせの手間を考えると、一歩が踏み出せない。',
  ],
  closing: FREE_OFFER,
} as const

export const WHY_FREE = {
  eyebrow: '1 — なぜ無料でできるのか',
  heading: '制作が無料でできる理由',
  reasons: [WHY_FREE_REASON_COST, WHY_FREE_REASON_MODEL],
  boundaryHeading: 'どこまでが無料か',
  boundary: [FREE_SCOPE, SELF_PUBLISH_FREE, PAID_WHEN_DELEGATED, FREE_REVISIONS],
} as const

export const OFFER = {
  eyebrow: '3 — 無料で制作してお渡しする範囲',
  heading: 'お渡しするもの',
  qualityHeading: '仕上がりは、初稿を見てから決められます',
  qualityPoints: [DRAFT_FIVE_DAYS, FREE_REVISIONS, `${DELIVERABLE_FREEDOM}${NO_COST_NO_CONTRACT}`],
  ctaLabel: '制作は無料 — ここから相談する',
  items: [
    { title: '権利はすべてお客様のもの', body: `${RIGHTS}${DELIVERABLE_FREEDOM}` },
    {
      title: '新規もリニューアルも',
      body: '新規のホームページ制作はもちろん、既存サイトのリニューアルにも対応します。',
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

export const PROCESS = {
  eyebrow: '4 — 進め方',
  heading: '進め方',
  steps: [
    { title: 'ご相談', body: `メールとフォームでやり取りします。${NO_VISIT_NO_CALL}` },
    { title: 'ご返信', body: REPLY_ONE_DAY },
    { title: '制作・初稿', body: DRAFT_FIVE_DAYS },
    { title: '初稿のご確認・お直し', body: FREE_REVISIONS },
    { title: 'お渡し', body: RIGHTS },
  ],
} as const

export const FIT = {
  eyebrow: '5 — こんな会社に',
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
  eyebrow: '7 — お問い合わせ',
  heading: 'まずはメールでご相談ください',
  lead: `${FREE_OFFER}訪問や電話はなし。${REPLY_ONE_DAY}`,
  boundary: PUBLISH_BOUNDARY,
  privacy:
    'お預かりする項目と利用目的 — 会社名・お名前・メールアドレス・ご相談内容をお預かりし、お問い合わせへのご返信と、ご依頼いただいた制作のご連絡にのみ使います。',
  retreatHeading: 'お使いいただかなくても構いません',
  retreat: `${DELIVERABLE_FREEDOM}${NO_COST_NO_CONTRACT}${RIGHTS}`,
  submitLabel: '制作は無料 — 送信する',
  submittingLabel: '送信中…',
  successMessage: `お問い合わせを受け付けました。${REPLY_TIMING}`,
  errorMessage: `送信に失敗しました。恐れ入りますが ${CONTACT_EMAIL} までご連絡ください。`,
} as const

export const CTA_BAND = {
  label: '制作は無料 — ここから相談する',
  note: `${NO_VISIT_NO_CALL}入力は4項目だけです。${REPLY_ONE_DAY}`,
} as const

export const STICKY_CTA = {
  // 文言の先頭に必ず「制作は無料」を含める。
  label: '制作は無料。今すぐメールでご相談ください',
} as const

// どこまでが無料かを示す図解。Contact 節（フォームの直前）だけに置く。
export const SCOPE_DIAGRAM = {
  src: '/lp/scope.webp',
  width: 1672,
  height: 941,
  alt: '「どこまでが無料か」という題のもと、「ご相談から制作、お渡しまで＝無料」「ご自分で公開してお使いになる＝無料」「公開や運用をこちらにお任せ＝有償」「お任せいただくかは任意です」「金額は別途お見積りします」の六つの語句が並ぶ図解',
} as const

export const FAQ = {
  eyebrow: '6 — 気になること',
  heading: 'よくあるご質問',
  items: [
    { q: '本当に無料ですか？', a: `${FREE_OFFER}${NO_COST_NO_CONTRACT}` },
    {
      q: 'どこから有償になりますか？',
      a: PUBLISH_BOUNDARY,
    },
    { q: '何回まで直してもらえますか？', a: `${FREE_REVISIONS}それ以降は別途になります。` },
    {
      q: '仕上がりが気に入らなかったらどうなりますか？',
      a: `${FREE_REVISIONS}${DELIVERABLE_FREEDOM}${NO_COST_NO_CONTRACT}`,
    },
    {
      q: 'なぜ無料でできるのですか？',
      a: `${WHY_FREE_REASON_COST}${WHY_FREE_REASON_MODEL}`,
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
  areaNote:
    '対応する地域は問いません。やり取りはメールとフォームで完結するため、全国どこからのご相談もお受けします。',
} as const
