import { OPERATOR } from '../content'

/**
 * 実在の確認をフォーム送信前に済ませるための、運営者情報の1か所。
 * 屋号・代表者名・郵便番号・所在地・連絡先を1つの入れ物にまとめる。
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
      </dl>
    </div>
  )
}
