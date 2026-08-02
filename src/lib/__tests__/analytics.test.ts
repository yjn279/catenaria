import { AnalyticsEvent, initAnalytics, track } from '../analytics'

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
  window.gtag = undefined
  window.dataLayer = undefined
  document.head.innerHTML = ''
})

describe('track', () => {
  it('does not throw when analytics is not loaded', () => {
    expect(() => track(AnalyticsEvent.NavClick, { destination: 'top' })).not.toThrow()
  })

  it('warns once in a development build when analytics is not loaded', () => {
    vi.stubEnv('DEV', true)
    vi.stubEnv('PROD', false)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    track(AnalyticsEvent.NavClick, { destination: 'top' })

    expect(warn).toHaveBeenCalledOnce()
  })

  it('does not warn in a production build when analytics is not loaded', () => {
    vi.stubEnv('DEV', false)
    vi.stubEnv('PROD', true)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    track(AnalyticsEvent.NavClick, { destination: 'top' })

    expect(warn).not.toHaveBeenCalled()
  })

  it('sends the event name and params once analytics is loaded', () => {
    const gtag = vi.fn()
    window.gtag = gtag

    track(AnalyticsEvent.NavClick, { destination: 'top' })

    expect(gtag).toHaveBeenCalledExactlyOnceWith('event', 'nav_click', { destination: 'top' })
  })
})

describe('initAnalytics', () => {
  it('does not load the tag outside of a production build', () => {
    vi.stubEnv('PROD', false)

    initAnalytics()

    expect(window.gtag).toBeUndefined()
    expect(document.querySelector('script[src*="googletagmanager"]')).toBeNull()
  })

  it('loads the GA4 tag with the measurement ID in a production build', () => {
    vi.stubEnv('PROD', true)

    initAnalytics()

    expect(typeof window.gtag).toBe('function')
    expect(document.querySelector('script[src*="G-L74JBX1R42"]')).not.toBeNull()
  })
})

describe('dataLayer entries', () => {
  it('pushes each entry as an arguments object, matching the official snippet', () => {
    vi.stubEnv('PROD', true)

    initAnalytics()
    track(AnalyticsEvent.NavClick, { destination: 'top' })

    const [initJs, initConfig, event] = window.dataLayer ?? []

    for (const entry of [initJs, initConfig, event]) {
      expect(Array.isArray(entry)).toBe(false)
      expect(Object.prototype.toString.call(entry)).toBe('[object Arguments]')
    }

    expect(initJs[0]).toBe('js')
    expect(initJs[1]).toBeInstanceOf(Date)
    expect(initConfig[0]).toBe('config')
    expect(initConfig[1]).toBe('G-L74JBX1R42')
    expect(event[0]).toBe('event')
    expect(event[1]).toBe('nav_click')
    expect(event[2]).toEqual({ destination: 'top' })
  })
})
