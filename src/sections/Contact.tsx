import { useState } from 'react';

export function Contact() {
  const [sent, setSent] = useState<boolean>(false);

  return (
    <section className="block" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-pitch reveal">
          <div className="sec-label">Contact</div>
          <h3>
            作るべきか迷っているなら、<br />
            まずは、話しましょう。
          </h3>
          <p>初回相談は無料です。コードを見せていただく必要も、まだありません。いまの状況を聞かせてください。</p>
          <p className="contact-alt">
            もしくは <a href="mailto:hello@catenaria.jp">hello@catenaria.jp</a> まで直接どうぞ。
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
          <button className="btn btn-accent" id="form-btn" type="button" onClick={() => setSent(true)}>
            送信する
          </button>
          {sent && <p className="form-thanks">ありがとうございます。追って折り返しご連絡します。</p>}
        </div>
      </div>
    </section>
  );
}
