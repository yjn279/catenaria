import { OPERATOR } from '../content'

/**
 * 実在の確認をフォーム送信前に済ませるための、運営者情報の1か所。
 * 屋号・代表者名・郵便番号・所在地・連絡先・会社サイト・対応地域を1つの入れ物にまとめる。
 * 会社サイトへのリンクはページ全体でここに置く1本だけで、行動の入口にはしない。
 * 長い屋号の由来は、送信ボタンより後ろの `OperatorOrigin` に残す。
 */
export function OperatorInfo() {
  return (
    <div className="lp-operator">
      <p className="lp-operator-brand">{OPERATOR.brand}</p>
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
        <div className="lp-operator-row">
          <dt>会社サイト</dt>
          <dd>
            <a href={OPERATOR.siteUrl}>{OPERATOR.siteLabel}</a>
          </dd>
        </div>
        <div className="lp-operator-row">
          <dt>対応地域</dt>
          <dd>{OPERATOR.areaNote}</dd>
        </div>
      </dl>
    </div>
  )
}
