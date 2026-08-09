import { validateContactForm } from '../lib/validate'

const VALID = {
  company: 'テスト送信の確認です',
  name: 'テスト太郎',
  email: 'test@example.com',
  message: 'テスト相談内容',
}

it('returns no errors when all fields are valid', () => {
  expect(validateContactForm(VALID)).toEqual({})
})

it('returns errors for every field when all are empty', () => {
  const errors = validateContactForm({ company: '', name: '', email: '', message: '' })
  expect(errors.company).toBe('会社名を入力してください')
  expect(errors.name).toBe('お名前を入力してください')
  expect(errors.email).toBe('メールアドレスを入力してください')
  expect(errors.message).toBe('ご相談内容を入力してください')
})

it('treats whitespace-only input as empty', () => {
  const errors = validateContactForm({ ...VALID, name: '   ', message: '\n\t' })
  expect(errors.name).toBe('お名前を入力してください')
  expect(errors.message).toBe('ご相談内容を入力してください')
})

it('rejects an email address without an "@"', () => {
  const errors = validateContactForm({ ...VALID, email: 'not-an-email' })
  expect(errors.email).toBe('正しいメールアドレスを入力してください')
})

it('rejects an email address without a domain', () => {
  const errors = validateContactForm({ ...VALID, email: 'test@example' })
  expect(errors.email).toBe('正しいメールアドレスを入力してください')
})

it('accepts the gate-check company value "テスト送信の確認です"', () => {
  const errors = validateContactForm({ ...VALID, company: 'テスト送信の確認です' })
  expect(errors.company).toBeUndefined()
})
