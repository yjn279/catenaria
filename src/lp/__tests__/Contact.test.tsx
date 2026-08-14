import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { track } from '../../lib/analytics'
import { Contact } from '../sections/Contact'

vi.mock('../../lib/analytics', async () => {
  const actual = await vi.importActual('../../lib/analytics')
  return { ...actual, track: vi.fn() }
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.mocked(track).mockClear()
})

it('renders exactly one form with the four entry fields and the opt-out choice', () => {
  render(<Contact />)
  expect(screen.getAllByRole('textbox')).toHaveLength(4)
  expect(screen.getByLabelText('会社名')).toBeInTheDocument()
  expect(screen.getByLabelText('お名前')).toBeInTheDocument()
  expect(screen.getByLabelText('メールアドレス')).toBeInTheDocument()
  expect(screen.getByLabelText('ご相談内容')).toBeInTheDocument()
  expect(screen.getByLabelText('今後のご連絡を希望しない')).toBeInTheDocument()
})

it('carries the origin marker as a hidden field, not as user input', () => {
  const { container } = render(<Contact />)
  const originField = container.querySelector('input[name="page"]')
  expect(originField).toHaveAttribute('type', 'hidden')
  expect(originField).toHaveValue('lp')
})

function fillForm() {
  fireEvent.change(screen.getByLabelText('会社名'), { target: { value: 'テスト送信の確認です' } })
  fireEvent.change(screen.getByLabelText('お名前'), { target: { value: 'テスト太郎' } })
  fireEvent.change(screen.getByLabelText('メールアドレス'), {
    target: { value: 'test@example.com' },
  })
  fireEvent.change(screen.getByLabelText('ご相談内容'), { target: { value: 'テスト相談内容' } })
}

describe('form submission', () => {
  it('shows validation errors and does not call fetch when the form is submitted empty', () => {
    const fetchMock = vi.spyOn(global, 'fetch')

    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    expect(screen.getByText('会社名を入力してください')).toBeInTheDocument()
    expect(screen.getByText('お名前を入力してください')).toBeInTheDocument()
    expect(screen.getByText('メールアドレスを入力してください')).toBeInTheDocument()
    expect(screen.getByText('ご相談内容を入力してください')).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()
    expect(track).not.toHaveBeenCalled()
  })

  it('posts to Web3Forms with the existing access key and the page=lp origin marker on success', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve({ success: true }),
    } as Response)

    render(<Contact />)
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    expect(await screen.findByText(/受け付けました/)).toBeInTheDocument()

    expect(global.fetch).toHaveBeenCalledOnce()
    const fetchMock = global.fetch as ReturnType<typeof vi.fn>
    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe('https://api.web3forms.com/submit')
    const body = options.body as FormData
    expect(body.get('access_key')).toBe('70feaeb7-229a-4d75-bf84-4f0352c6babc')
    expect(body.get('page')).toBe('lp')
    expect(track).toHaveBeenCalledExactlyOnceWith('contact_submit_success')
  })

  it('shows a success message that includes when and from whom the reply comes', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve({ success: true }),
    } as Response)

    render(<Contact />)
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    const message = await screen.findByText(/受け付けました/)
    expect(message.textContent).toContain('受け付けました')
    expect(message.textContent).toContain('1営業日')
    expect(message.textContent).toContain('中村')
  })

  it('shows an alternative contact email when submission fails', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve({ success: false }),
    } as Response)

    render(<Contact />)
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    const message = await screen.findByText(/y\.nakamura@catenaria\.dev/)
    expect(message).toBeInTheDocument()
    expect(track).toHaveBeenCalledExactlyOnceWith('contact_submit_error')
  })

  it('shows an alternative contact email when the request itself fails', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('network error'))

    render(<Contact />)
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    const message = await screen.findByText(/y\.nakamura@catenaria\.dev/)
    expect(message).toBeInTheDocument()
    expect(track).toHaveBeenCalledExactlyOnceWith('contact_submit_error')
  })

  it('disables the submit button while submitting to prevent double submission', async () => {
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
    await screen.findByText(/受け付けました/)
  })

  it('does not submit when the honeypot field is filled', () => {
    const fetchMock = vi.spyOn(global, 'fetch')
    const { container } = render(<Contact />)
    fillForm()
    const honeypot = container.querySelector('input[name="botcheck"]') as HTMLInputElement
    fireEvent.click(honeypot)

    fireEvent.click(screen.getByRole('button', { name: /送信する/ }))

    expect(fetchMock).not.toHaveBeenCalled()
  })
})
