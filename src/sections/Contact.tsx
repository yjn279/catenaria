import { useRef, useState } from 'react'
import { z } from 'zod'
import { AnalyticsEvent, track } from '../lib/analytics'
import { submitToWeb3Forms } from '../lib/web3forms'

const contactSchema = z.object({
  name: z.string().trim().min(1, 'お名前を入力してください'),
  email: z
    .string()
    .trim()
    .min(1, 'メールアドレスを入力してください')
    .pipe(z.email('正しいメールアドレスを入力してください')),
  message: z.string().trim().min(1, 'ご相談内容を入力してください'),
})

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    // Honeypot check
    if (formData.get('botcheck')) return

    const result = contactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    })

    if (!result.success) {
      const fieldErrors: FieldErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FieldErrors
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      }
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    setStatus('submitting')

    try {
      await submitToWeb3Forms(formData)
      setStatus('success')
      formRef.current?.reset()
      track(AnalyticsEvent.ContactSubmitSuccess)
    } catch (error) {
      console.error(error)
      setStatus('error')
      track(AnalyticsEvent.ContactSubmitError)
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
            <a
              href="mailto:catenaria.dev@gmail.com"
              onClick={() => track(AnalyticsEvent.EmailClick, { location: 'contact' })}
            >
              catenaria.dev@gmail.com
            </a>{' '}
            まで。
          </p>
        </div>
        <form className="contact-form reveal d1" onSubmit={handleSubmit} ref={formRef} noValidate>
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />
          <input type="hidden" name="subject" value="Catenaria お問い合わせ" />
          <div className="field">
            <label htmlFor="f-name">お名前</label>
            <input
              id="f-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'f-name-error' : undefined}
            />
            {errors.name && (
              <p className="field-error" id="f-name-error">
                {errors.name}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="f-mail">メールアドレス</label>
            <input
              id="f-mail"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'f-mail-error' : undefined}
            />
            {errors.email && (
              <p className="field-error" id="f-mail-error">
                {errors.email}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="f-msg">ご相談内容</label>
            <textarea
              id="f-msg"
              name="message"
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'f-msg-error' : undefined}
            />
            {errors.message && (
              <p className="field-error" id="f-msg-error">
                {errors.message}
              </p>
            )}
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
