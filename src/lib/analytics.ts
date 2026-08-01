const MEASUREMENT_ID = 'G-L74JBX1R42'

export const AnalyticsEvent = {
  ContactSubmitSuccess: 'contact_submit_success',
  ContactSubmitError: 'contact_submit_error',
  EmailClick: 'email_click',
  CtaClick: 'cta_click',
  NavClick: 'nav_click',
} as const

export type AnalyticsEventName = (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent]

type AnalyticsParams = Record<string, string>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/** 本番向けの組み立てのときだけ GA4 の計測タグを読み込み、初期化する。 */
export function initAnalytics(): void {
  if (!import.meta.env.PROD) return

  window.dataLayer = window.dataLayer ?? []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)
}

/** 記録名と付随情報を GA4 へ送る。計測タグ未読み込み時は何もせず、開発向けの組み立てでのみ警告する。 */
export function track(name: AnalyticsEventName, params?: AnalyticsParams): void {
  if (typeof window.gtag !== 'function') {
    if (import.meta.env.DEV) {
      console.warn(`[analytics] "${name}" was not sent because analytics is not loaded`)
    }
    return
  }
  window.gtag('event', name, params)
}
