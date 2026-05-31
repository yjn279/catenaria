import { useRef, useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', '70feaeb7-229a-4d75-bf84-4f0352c6babc')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const json = (await res.json()) as { success: boolean }
      if (json.success) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
        <form className="contact-form reveal d1" onSubmit={handleSubmit} ref={formRef}>
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />
          <input type="hidden" name="subject" value="Catenaria お問い合わせ" />
          <div className="field">
            <label htmlFor="f-name">お名前</label>
            <input id="f-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="f-mail">メールアドレス</label>
            <input id="f-mail" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="f-msg">ご相談内容</label>
            <textarea id="f-msg" name="message" required></textarea>
          </div>
          <button
            className="btn btn-accent"
            id="form-btn"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? '送信中…' : '送信する'}
          </button>
          <div aria-live="polite">
            {status === 'success' && (
              <p className="form-thanks">ありがとうございます。追って折り返しご連絡します。</p>
            )}
            {status === 'error' && (
              <p className="form-thanks" style={{ color: 'var(--text)' }}>
                送信に失敗しました。時間をおいて再度お試しください。
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
