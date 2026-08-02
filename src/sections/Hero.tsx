import { HeroMotif } from '../components/Mark'
import { AnalyticsEvent, track } from '../lib/analytics'

export function Hero() {
  return (
    <section className="hero">
      <HeroMotif />
      <div className="wrap hero-inner">
        <div className="kicker reveal in">Human Partner for AI Era</div>
        <h1 className="reveal in d1">
          Vibe Codingを、
          <br />
          <span className="accent">Production-Ready</span>
          <br className="br-mobile-only" />
          水準へ。
        </h1>
        <p className="sub reveal in d2">
          誰もが AI でサービスを作り出せる時代。
          <br className="br-pc-only" />
          私たち人間に必要なのは「意志」と「責任」です。
          <br className="br-pc-only" />
          本当に作りたかったサービスを、責任をもってエンドユーザーへ届ける。
          <br className="br-pc-only" />
          CATENARIA ではプロフェッショナルな職人であるエンジニアが、
          <br className="br-pc-only" />
          AI 時代のヒューマン・パートナーとしてお客さまと共に伴走します。
        </p>
        <div className="hero-cta reveal in d3">
          {/* biome-ignore lint/a11y/useValidAnchor: same-page navigation anchor with an added click-tracking handler */}
          <a
            href="#contact"
            className="btn btn-accent"
            onClick={() =>
              track(AnalyticsEvent.CtaClick, { location: 'hero', destination: 'contact' })
            }
          >
            無料で相談する
          </a>
          {/* biome-ignore lint/a11y/useValidAnchor: same-page navigation anchor with an added click-tracking handler */}
          <a
            href="#services"
            className="btn btn-ghost"
            onClick={() =>
              track(AnalyticsEvent.CtaClick, { location: 'hero', destination: 'services' })
            }
          >
            サービスを見る
          </a>
        </div>
      </div>
    </section>
  )
}
