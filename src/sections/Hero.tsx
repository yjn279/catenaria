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
          <span className="thin">水準へ。</span>
        </h1>
        <p className="sub reveal in d2">
          誰もが AI
          でサービスを作り出せる時代。私たち人間に必要なのは「意志」と「責任」です。本当に作りたかったものの意志をサービスに載せ、責任をもってエンドユーザーへ届ける。CATENARIA
          は AI 時代のヒューマン・パートナーとして、職人のエンジニアがあなたと共に伴走します。
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
