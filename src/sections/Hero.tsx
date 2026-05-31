import { HeroMotif } from '../components/Mark'

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
          水準へ。
        </h1>
        <p className="sub reveal in d2">
          誰もが AI でサービスを作り出せる時代。
          <br />
          私たち人間に必要なのは「意志」と「責任」です。
          <br />
          本当に作りたかったサービスを、責任をもってエンドユーザーへ届ける。
          <br />
          CATENARIA ではプロフェッショナルな職人であるエンジニアが、
          <br />
          AI 時代のヒューマン・パートナーとしてお客さまと共に伴走します。
        </p>
        <div className="hero-cta reveal in d3">
          <a href="#contact" className="btn btn-accent">
            無料で相談する
          </a>
          <a href="#services" className="btn btn-ghost">
            サービスを見る
          </a>
        </div>
      </div>
    </section>
  )
}
