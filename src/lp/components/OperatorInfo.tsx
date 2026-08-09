/**
 * 実在の確認をこのページの中だけで完結させるための、運営者情報の1か所。
 * 屋号・代表者名・郵便番号・所在地を1つの入れ物にまとめる。
 * 会社サイトへのリンクはここに置く1本だけで、行動の入口にはしない。
 */
export function OperatorInfo() {
  return (
    <div className="lp-operator">
      <p className="lp-operator-brand">CATENARIA</p>
      <p className="lp-operator-origin">
        「カテナリー」は、鎖やケーブルが自重で自然にたわむときにできる曲線の名前です。飾らずに、そのままの形で立つという思いを屋号に込めました。
      </p>
      <dl className="lp-operator-facts">
        <div className="lp-operator-row">
          <dt>代表者</dt>
          <dd>中村 勇士</dd>
        </div>
        <div className="lp-operator-row">
          <dt>所在地</dt>
          <dd>
            〒243-0406
            <br />
            神奈川県海老名市国分北1-35-3 102
          </dd>
        </div>
        <div className="lp-operator-row">
          <dt>連絡先</dt>
          <dd>y.nakamura@catenaria.dev</dd>
        </div>
      </dl>
      <p className="lp-operator-site">
        会社の紹介は<a href="https://catenaria.dev">catenaria.dev</a>でもご覧いただけます。
      </p>
    </div>
  )
}
