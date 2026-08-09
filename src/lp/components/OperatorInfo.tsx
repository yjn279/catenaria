import { OPERATOR } from '../content'

/**
 * 実在の確認をこのページの中だけで完結させるための、運営者情報の1か所。
 * 屋号・代表者名・郵便番号・所在地を1つの入れ物にまとめる。
 * 会社サイトへのリンクはここに置く1本だけで、行動の入口にはしない。
 */
export function OperatorInfo() {
  return (
    <div className="lp-operator">
      <p className="lp-operator-brand">{OPERATOR.brand}</p>
      <p className="lp-operator-origin">{OPERATOR.origin}</p>
      <dl className="lp-operator-facts">
        <div className="lp-operator-row">
          <dt>代表者</dt>
          <dd>{OPERATOR.representative}</dd>
        </div>
        <div className="lp-operator-row">
          <dt>所在地</dt>
          <dd>
            {OPERATOR.postalCode}
            <br />
            {OPERATOR.address}
          </dd>
        </div>
        <div className="lp-operator-row">
          <dt>連絡先</dt>
          <dd>{OPERATOR.email}</dd>
        </div>
      </dl>
      <p className="lp-operator-site">
        会社の紹介は<a href={OPERATOR.siteUrl}>{OPERATOR.siteLabel}</a>でもご覧いただけます。
      </p>
    </div>
  )
}
