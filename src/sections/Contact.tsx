import { useState } from 'react'

export function Contact() {
  const [sent, setSent] = useState<boolean>(false)

  return (
    <section className="block" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-pitch reveal">
          <div className="sec-label">Contact</div>
          <h3>
            まずは、
            <br />
            お話を聞かせてください。
          </h3>
          <p>
            初回相談は無料です。30
            分間のオンライン相談で、今のご状況やご要望をお伺いします。漠然としたお悩みのご相談や、解消しないエラーのご相談でも構いません。メールでのご連絡をご希望の場合は、
            <a href="mailto:catenaria.dev@gmail.com">catenaria.dev@gmail.com</a> まで。
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
