import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { track } from '../../lib/analytics'
import { Contact } from '../Contact'

vi.mock('../../lib/analytics', async () => {
  const actual = await vi.importActual('../../lib/analytics')
  return { ...actual, track: vi.fn() }
})

it('renders the contact section headline', () => {
  render(<Contact />)
  expect(screen.getByText(/お話を聞かせてください/)).toBeInTheDocument()
})

it('renders the submit button', () => {
  render(<Contact />)
  expect(screen.getByText(/送信する/)).toBeInTheDocument()
})

it('records email_click when the contact email is clicked', () => {
  render(<Contact />)
  fireEvent.click(screen.getByText(/catenaria\.dev@gmail\.com/))
  expect(track).toHaveBeenCalledExactlyOnceWith('email_click', { location: 'contact' })
  vi.mocked(track).mockClear()
})

describe('form submission', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.mocked(track).mockClear()
  })

  function fillForm() {
    fireEvent.change(screen.getByLabelText('お名前'), { target: { value: 'テスト太郎' } })
    fireEvent.change(screen.getByLabelText('メールアドレス'), {
      target: { value: 'test@example.com' },
    })
    fireEvent.change(screen.getByLabelText('ご相談内容'), { target: { value: 'テスト相談内容' } })
  }

  it('shows success message and calls fetch with correct URL and access_key on success', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve({ success: true }),
    } as Response)

    render(<Contact />)
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    const message = await screen.findByText('ありがとうございます。追って折り返しご連絡します。')
    expect(message).toBeInTheDocument()

    expect(global.fetch).toHaveBeenCalledOnce()
    const fetchMock = global.fetch as ReturnType<typeof vi.fn>
    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe('https://api.web3forms.com/submit')
    expect(options.body).toBeInstanceOf(FormData)
    expect((options.body as FormData).get('access_key')).toBe(
      '70feaeb7-229a-4d75-bf84-4f0352c6babc',
    )
    expect(track).toHaveBeenCalledExactlyOnceWith('contact_submit_success')
  })

  it('shows error message when fetch returns success: false', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve({ success: false }),
    } as Response)

    render(<Contact />)
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    const message = await screen.findByText(/送信に失敗しました/)
    expect(message).toBeInTheDocument()
    expect(track).toHaveBeenCalledExactlyOnceWith('contact_submit_error')
  })

  it('shows error message when fetch rejects', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('network error'))

    render(<Contact />)
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    const message = await screen.findByText(/送信に失敗しました/)
    expect(message).toBeInTheDocument()
    expect(track).toHaveBeenCalledExactlyOnceWith('contact_submit_error')
  })

  it('disables submit button while submitting to prevent double submission', async () => {
    let resolveJson!: (value: { success: boolean }) => void
    const jsonPromise = new Promise<{ success: boolean }>((resolve) => {
      resolveJson = resolve
    })

    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () => jsonPromise,
    } as Response)

    render(<Contact />)
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /送信中/ })).toBeDisabled()
    })

    resolveJson({ success: true })
    await screen.findByText('ありがとうございます。追って折り返しご連絡します。')
  })

  it('shows validation errors and does not call fetch when form is submitted empty', () => {
    const fetchMock = vi.spyOn(global, 'fetch')

    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    expect(screen.getByText('お名前を入力してください')).toBeInTheDocument()
    expect(screen.getByText('メールアドレスを入力してください')).toBeInTheDocument()
    expect(screen.getByText('ご相談内容を入力してください')).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()
    expect(track).not.toHaveBeenCalled()
  })

  it('shows email format error and does not call fetch when email is invalid', () => {
    const fetchMock = vi.spyOn(global, 'fetch')

    render(<Contact />)
    fireEvent.change(screen.getByLabelText('お名前'), { target: { value: 'テスト太郎' } })
    fireEvent.change(screen.getByLabelText('メールアドレス'), {
      target: { value: 'not-an-email' },
    })
    fireEvent.change(screen.getByLabelText('ご相談内容'), { target: { value: 'テスト相談内容' } })
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    expect(screen.getByText('正しいメールアドレスを入力してください')).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()
    expect(track).not.toHaveBeenCalled()
  })
})
