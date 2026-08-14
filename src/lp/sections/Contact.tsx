import { useRef, useState } from 'react'
import { AnalyticsEvent, track } from '../../lib/analytics'
import { submitToWeb3Forms } from '../../lib/web3forms'
import { OperatorInfo } from '../components/OperatorInfo'
import { CONTACT } from '../content'
import {
  type ContactFormErrors,
  type ContactFormValues,
  validateContactForm,
} from '../lib/validate'

type Status = 'idle' | 'submitting' | 'success' | 'error'

/**
 * このページで唯一の転換であるお問い合わせフォーム。
 * 送信先は会社サイトと共用の Web3Forms（新しい鍵は発行しない）で、
 * 見えない項目 `page=lp` を添えて、このページから来た問い合わせだと分かるようにする。
 */
export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    // ハニーポット。読み手には見せず、入力があれば自動送信の疑いとして送らない
    if (formData.get('botcheck')) return

    const values: ContactFormValues = {
      company: String(formData.get('company') ?? ''),
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    }
    const fieldErrors = validateContactForm(values)
    if (Object.keys(fieldErrors).length > 0) {
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
    <section id="contact" className="lp-contact" aria-labelledby="contact-heading">
      <div className="wrap">
        <h2 id="contact-heading" className="lp-eyebrow">
          {CONTACT.eyebrow}
        </h2>
        <h3 className="lp-contact-title">{CONTACT.heading}</h3>
        <p className="lp-contact-lead">{CONTACT.lead}</p>
        <p className="lp-contact-boundary">{CONTACT.boundary}</p>
      </div>
      <div className="lp-image-full">
        <img
          src="/lp/reply.webp"
          width={1536}
          height={1024}
          alt="窓からの光が横に入る木の机で、両手がノートパソコンに文字を打っている情景"
          loading="lazy"
        />
      </div>
      <div className="wrap">
        <form className="lp-contact-form" onSubmit={handleSubmit} ref={formRef} noValidate>
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />
          <input type="hidden" name="subject" value="CATENARIA LP お問い合わせ" />
          <input type="hidden" name="page" value="lp" />

          <div className="lp-field">
            <label htmlFor="lp-f-company">会社名</label>
            <input
              id="lp-f-company"
              name="company"
              type="text"
              autoComplete="organization"
              required
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? 'lp-f-company-error' : undefined}
            />
            {errors.company && (
              <p className="lp-field-error" id="lp-f-company-error">
                {errors.company}
              </p>
            )}
          </div>

          <div className="lp-field">
            <label htmlFor="lp-f-name">お名前</label>
            <input
              id="lp-f-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'lp-f-name-error' : undefined}
            />
            {errors.name && (
              <p className="lp-field-error" id="lp-f-name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="lp-field">
            <label htmlFor="lp-f-email">メールアドレス</label>
            <input
              id="lp-f-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'lp-f-email-error' : undefined}
            />
            {errors.email && (
              <p className="lp-field-error" id="lp-f-email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="lp-field">
            <label htmlFor="lp-f-message">ご相談内容</label>
            <textarea
              id="lp-f-message"
              name="message"
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'lp-f-message-error' : undefined}
            />
            {errors.message && (
              <p className="lp-field-error" id="lp-f-message-error">
                {errors.message}
              </p>
            )}
          </div>

          <div className="lp-field lp-field-optout">
            <input id="lp-f-optout" name="optout" type="checkbox" />
            <label htmlFor="lp-f-optout">今後のご連絡を希望しない</label>
          </div>

          <p className="lp-contact-privacy">{CONTACT.privacy}</p>

          <button
            className="lp-btn lp-btn-accent lp-contact-submit"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? CONTACT.submittingLabel : CONTACT.submitLabel}
          </button>

          <div aria-live="polite" className="lp-contact-status">
            {status === 'success' && <p>{CONTACT.successMessage}</p>}
            {status === 'error' && <p>{CONTACT.errorMessage}</p>}
          </div>
        </form>

        <OperatorInfo />
      </div>
    </section>
  )
}
