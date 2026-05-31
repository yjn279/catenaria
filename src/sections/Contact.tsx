import { useState } from 'react'

export function Contact() {
  const [sent, setSent] = useState<boolean>(false)

  return (
    <section className="block" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-pitch reveal">
          <div className="sec-label">Contact</div>
          <h3>まずは、お話を聞かせてください。</h3>
          <p>
            初回相談は無料です。30〜60
            分のオンラインで、いまの状況とご要望をお聞きします。コードや資料があれば、ぜひ事前に共有してください。話の解像度が一段上がります。
          </p>
          <p className="contact-alt">
            もしくは <a href="mailto:catenaria.dev@gmail.com">catenaria.dev@gmail.com</a>{' '}
            まで直接どうぞ。
          </p>
        </div>
        <div className="contact-form reveal d1">
          <div className="field">
            <label htmlFor="f-name">お名前</label>
            <input id="f-name" type="text" autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="f-mail">メールアドレス</label>
            <input id="f-mail" type="email" autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="f-msg">ご相談内容</label>
            <textarea id="f-msg"></textarea>
          </div>
          <button
            className="btn btn-accent"
            id="form-btn"
            type="button"
            onClick={() => setSent(true)}
          >
            送信する
          </button>
          {sent && (
            <p className="form-thanks">ありがとうございます。追って折り返しご連絡します。</p>
          )}
        </div>
      </div>
    </section>
  )
}
