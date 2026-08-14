/**
 * このページは読み込む量の上限が厳しく、zod（約58KB）を足す余地が無い。
 * そのため入力の確かめは自前で最小限に書く。
 */

export type ContactFormValues = {
  company: string
  name: string
  email: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.company.trim()) {
    errors.company = '会社名を入力してください'
  }
  if (!values.name.trim()) {
    errors.name = 'お名前を入力してください'
  }

  const email = values.email.trim()
  if (!email) {
    errors.email = 'メールアドレスを入力してください'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = '正しいメールアドレスを入力してください'
  }

  if (!values.message.trim()) {
    errors.message = 'ご相談内容を入力してください'
  }

  return errors
}
